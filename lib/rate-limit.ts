// Simple in-memory rate limiter for contact form submissions
// In production, consider using Redis or a database for persistent storage

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  rateLimitMap.forEach((entry, key) => {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  });
}, 10 * 60 * 1000);

export function checkRateLimit(identifier: string): { success: boolean; error?: string } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // Rate limit: 3 submissions per hour per IP
  const maxAttempts = 3;
  const windowMs = 60 * 60 * 1000; // 1 hour

  if (!entry) {
    // First submission from this identifier
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true };
  }

  if (now > entry.resetTime) {
    // Window has expired, reset
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true };
  }

  if (entry.count >= maxAttempts) {
    const minutesLeft = Math.ceil((entry.resetTime - now) / 60000);
    return {
      success: false,
      error: `Too many submissions. Please try again in ${minutesLeft} minute${minutesLeft !== 1 ? 's' : ''}.`,
    };
  }

  // Increment count
  entry.count++;
  return { success: true };
}
