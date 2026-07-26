/** Tiny className combiner (keeps falsy values out of the output). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
