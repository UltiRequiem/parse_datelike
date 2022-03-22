
export type DateLike = Date | number | string;

export function parseDateLike(date: DateLike) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  if (!(date instanceof Date) && typeof date !== "number") {
    throw new TypeError(
      `Expected "year" type to be "Date" | "number" | "string" and got ${typeof date}.`,
    );
  }

  return date instanceof Date ? date.getUTCFullYear() : date;
}
