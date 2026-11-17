import { formatMoney } from '../utils'

function Summary({ transactions }) {
  let income = 0
  let expense = 0

  transactions.forEach((t) => {
    if (t.type === 'income') {
      income += t.amount
    } else {
      expense += t.amount
    }
  })

  const balance = income - expense

  return (
    <div className="summary">
      <div className="summary-box">
        <p>Balance</p>
        <h3 className={balance < 0 ? 'negative' : ''}>{formatMoney(balance)}</h3>
      </div>
      <div className="summary-box income">
        <p>Income</p>
        <h3>{formatMoney(income)}</h3>
      </div>
      <div className="summary-box expense">
        <p>Expenses</p>
        <h3>{formatMoney(expense)}</h3>
      </div>
    </div>
  )
}

export default Summary
