export const formatStringToDOM = (string: string): string[] => {
  return string.split("\n").map(paragraph => paragraph.trim())
}