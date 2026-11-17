import { useState } from 'react'
import { CATEGORIES } from '../categories'
import { todayString } from '../utils'

function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('expense')
  const [date, setDate] = useState(todayString())
  const [category, setCategory] = useState(CATEGORIES.expense[0].name)
  const [error, setError] = useState('')

  // income and expense have different categories, so reset it when the type changes
  function changeType(newType) {
    setType(newType)
    setCategory(CATEGORIES[newType][0].name)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!title.trim()) {
      setError('Please enter a title.')
      return
    }
    if (!amount || Number(amount) <= 0) {
      setError('Amount must be more than 0.')
      return
    }
    if (!date) {
      setError('Please pick a date.')
      return
    }
    setError('')

    onAdd({
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      type,
      category,
      date,
    })

    // clear the form but keep the type and date, they are often the same
    setTitle('')
    setAmount('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="type-toggle">
        <button
          type="button"
          className={type === 'expense' ? 'active expense' : ''}
          onClick={() => changeType('expense')}
        >
          Expense
        </button>
        <button
          type="button"
          className={type === 'income' ? 'active income' : ''}
          onClick={() => changeType('income')}
        >
          Income
        </button>
      </div>

      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Groceries"
        />
      </label>

      <label>
        Amount (₹)
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0"
          min="0"
          step="0.01"
        />
      </label>

      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES[type].map((c) => (
            <option key={c.name} value={c.name}>
              {c.icon} {c.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Date
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>

      {error && <p className="error">{error}</p>}

      <button type="submit" className="submit-btn">
        Add {type === 'expense' ? 'Expense' : 'Income'}
      </button>
    </form>
  )
}

export default TransactionForm
