// format a number as Indian rupees, e.g. 1500 -> ₹1,500.00
export function formatMoney(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount)
}

// "2026-11-17" -> "17 Nov 2026"
export function formatDate(dateString) {
  return new Date(dateString + 'T00:00').toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

// today's date in the user's own timezone as "YYYY-MM-DD"
// (toISOString() uses UTC, which gives yesterday's date early in the morning in India)
export function todayString() {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}
