
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function pluralize(count: number, word: string) {
  return count === 1 ? word : word + 's';
}

