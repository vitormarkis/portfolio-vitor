export const formatStringToDOM = (string: string): string[] => {
  return string.split("\n").map(paragraph => paragraph.trim())
}

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
