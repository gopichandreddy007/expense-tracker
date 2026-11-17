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
