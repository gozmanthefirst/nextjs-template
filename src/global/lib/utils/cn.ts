import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges multiple class name values into a single string using Tailwind's merge functionality.
 * Utilizes both `clsx` for conditional class names and `twMerge` for Tailwind-specific class merging.
 *
 * @param inputs - An array of class values that can include strings, objects, arrays or falsy values
 * @returns A merged string of class names optimized for Tailwind CSS
 *
 * @example
 * ```ts
 * // Basic usage with string inputs
 * const className = cn("bg-red-500", "text-white");
 *
 * // Usage with conditional classes
 * const className = cn("bg-red-500", isActive && "text-white");
 *
 * // Usage with objects
 * const className = cn("bg-red-500", { "text-white": isActive });
 * ```
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
