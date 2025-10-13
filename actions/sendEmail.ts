"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { checkRateLimit } from "@/lib/rate-limit";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

// Blocked email addresses and domains
const BLOCKED_EMAILS: string[] = [
  "ikaralaficoj94@gmail.com", // The specific spammer you mentioned
];

const BLOCKED_DOMAINS: string[] = [
  // Add suspicious domains here if needed
];

// Function to check if message contains spam patterns
function isSpamMessage(message: string, email: string): boolean {
  const lowerMessage = message.toLowerCase();
  const lowerEmail = email.toLowerCase();
  
  // Check for gibberish patterns (repeated random characters)
  const gibberishPattern = /^[a-z]{15,}$/i;
  if (gibberishPattern.test(message.trim())) {
    return true;
  }
  
  // Check for common spam keywords
  const spamKeywords = [
    'crypto', 'bitcoin', 'forex', 'casino', 'viagra', 
    'cialis', 'loan', 'bitcoin', 'cryptocurrency',
    'investment opportunity', 'make money fast'
  ];
  
  if (spamKeywords.some(keyword => lowerMessage.includes(keyword))) {
    return true;
  }
  
  // Check for excessive links
  const linkCount = (message.match(/https?:\/\//g) || []).length;
  if (linkCount > 2) {
    return true;
  }
  
  // Check blocked emails
  if (BLOCKED_EMAILS.includes(lowerEmail)) {
    return true;
  }
  
  // Check blocked domains
  const emailDomain = email.split('@')[1]?.toLowerCase();
  if (emailDomain && BLOCKED_DOMAINS.includes(emailDomain)) {
    return true;
  }
  
  return false;
}

export const sendEmail = async (formData: FormData) => {
  // Get IP address for rate limiting
  const headersList = headers();
  const forwardedFor = (await headersList).get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
  
  // Check rate limit
  const rateLimitResult = checkRateLimit(ip);
  if (!rateLimitResult.success) {
    return {
      error: rateLimitResult.error,
    };
  }
  
  // Check honeypot field
  const honeypot = formData.get("website");
  if (honeypot) {
    // Bot detected - honeypot field should be empty
    console.log(`Bot detected from IP ${ip}: honeypot field filled`);
    return {
      error: "Invalid submission",
    };
  }
  
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  
  // Check for spam patterns
  if (isSpamMessage(message as string, senderEmail as string)) {
    console.log(`Spam detected from ${senderEmail} (IP: ${ip})`);
    return {
      error: "Message flagged as spam. Please contact directly via email if this is a legitimate message.",
    };
  }
  
  // Minimum message length check
  if ((message as string).trim().length < 10) {
    return {
      error: "Message is too short. Please provide more details.",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "thayrovg@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
