export default function truncateText(text: string, length: number): string {
  let truncated = text.slice(0, length).trim()
  if (text[145] !== ' ') {
    truncated = truncated.slice(0, truncated.lastIndexOf(' '))
  }
  return truncated
}
