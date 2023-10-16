import { navigationLinks } from "./data";

// export type SectionName = (typeof links)[number]["name"];

type LinkNames = typeof navigationLinks['en'] | typeof navigationLinks['es'];
export type SectionName = LinkNames[number]['name'];
