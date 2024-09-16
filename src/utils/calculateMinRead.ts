export default function calculateMinRead(text: string): number {
  const AVERAGE_WPM = 225
  const words: number = text.trim().split(/\s+/).length
  return Math.ceil(words / AVERAGE_WPM)
}
