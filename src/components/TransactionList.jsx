import { formatMoney, formatDate } from '../utils'

function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return <p className="empty">No transactions yet. Add your first one!</p>
  }

  return (
    <ul className="list">
      {transactions.map((t) => (
        <li key={t.id} className={`item ${t.type}`}>
          <div>
            <p className="item-title">{t.title}</p>
            <p className="item-meta">{formatDate(t.date)}</p>
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
      ))}
    </ul>
  )
}

export default TransactionList
