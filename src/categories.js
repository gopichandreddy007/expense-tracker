export const CATEGORIES = {
  expense: [
    { name: 'Food', icon: '🍔', color: '#f97316' },
    { name: 'Transport', icon: '🚌', color: '#0ea5e9' },
    { name: 'Shopping', icon: '🛍️', color: '#a855f7' },
    { name: 'Bills', icon: '💡', color: '#eab308' },
    { name: 'Rent', icon: '🏠', color: '#ef4444' },
    { name: 'Health', icon: '💊', color: '#14b8a6' },
    { name: 'Entertainment', icon: '🎬', color: '#ec4899' },
    { name: 'Education', icon: '📚', color: '#6366f1' },
    { name: 'Other', icon: '📦', color: '#64748b' },
  ],
  income: [
    { name: 'Salary', icon: '💼', color: '#16a34a' },
    { name: 'Freelance', icon: '💻', color: '#0d9488' },
    { name: 'Gift', icon: '🎁', color: '#db2777' },
    { name: 'Other', icon: '💵', color: '#65a30d' },
  ],
}

export function getCategory(type, name) {
  const list = CATEGORIES[type] || []
  return list.find((c) => c.name === name) || { name, icon: '📦', color: '#64748b' }
}
