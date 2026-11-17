import { formatMoney, formatDate } from '../utils'
import { getCategory } from '../categories'

function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return <p className="empty">No transactions yet. Add your first one!</p>
  }

  return (
    <ul className="list">
      {transactions.map((t) => {
        // older entries may not have a category, so fall back to "Other"
        const category = getCategory(t.type, t.category || 'Other')

        return (
          <li key={t.id} className={`item ${t.type}`}>
            <div className="item-left">
              <span className="item-icon" style={{ background: category.color + '22' }}>
                {category.icon}
              </span>
              <div>
                <p className="item-title">{t.title}</p>
                <p className="item-meta">
                  {category.name} · {formatDate(t.date)}
                </p>
              </div>
            </div>
            <div className="item-right">
              <span className="item-amount">
                {t.type === 'expense' ? '-' : '+'}
                {formatMoney(t.amount)}
              </span>
              <button
                className="delete-btn"
                onClick={() => onDelete(t.id)}
                title="Delete"
                aria-label={`Delete ${t.title}`}
              >
                ✕
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TransactionList
