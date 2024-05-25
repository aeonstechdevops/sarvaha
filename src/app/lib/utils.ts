import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//** merges the classnames */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//** trims the string to a given length */
export const trimChars = (str: string, length: number) => {
  return str.length > length ? str.slice(0, length) + "..." : str;
};
