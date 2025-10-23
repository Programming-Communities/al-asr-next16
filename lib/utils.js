import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function for merging Tailwind CSS classes
 * Features:
 * - Combines clsx and tailwind-merge
 * - Handles conditional classes
 * - Prevents class conflicts
 */

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}