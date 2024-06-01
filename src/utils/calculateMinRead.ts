const AVERAGE_WPM = 225

export default function calculateMinRead(text: string) {
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / AVERAGE_WPM)
}
