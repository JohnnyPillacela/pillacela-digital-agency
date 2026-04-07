// /utils/text-slicer.ts


/**
 * 
 * @param text - The text to split
 * @returns { slicedText: string; last: string } - The sliced text and the last word
 */
export function splitOnLastSpace(text: string): { slicedText: string; last: string } {
  const i = text.lastIndexOf(' ');
  if (i === -1) {
    return { slicedText: text, last: '' };
  }
  return {
    slicedText: text.slice(0, i),
    last: text.slice(i + 1),
  };
}


/**
 * Returns the last word of the given text
 * @param text - The text to get the last word from
 * @returns The last word of the given text
 */
export function lastWord(text: string): string {
  return splitOnLastSpace(text).last;
}
