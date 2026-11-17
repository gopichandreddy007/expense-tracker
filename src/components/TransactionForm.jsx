import { useState } from 'react'

function today() {
  return new Date().toISOString().slice(0, 10)
}

function TransactionForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('expense')
  const [date, setDate] = useState(today())

  function handleSubmit(e) {
    e.preventDefault()

    onAdd({
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      type,
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
          onClick={() => setType('expense')}
        >
          Expense
        </button>
        <button
          type="button"
          className={type === 'income' ? 'active income' : ''}
          onClick={() => setType('income')}
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
        Date
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>

      <button type="submit" className="submit-btn">
        Add {type === 'expense' ? 'Expense' : 'Income'}
      </button>
    </form>
  )
}

export default TransactionForm
