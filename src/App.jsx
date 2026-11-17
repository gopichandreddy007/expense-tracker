import { useState, useEffect } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary'
import MonthFilter from './components/MonthFilter'
import { todayString } from './utils'

const STORAGE_KEY = 'expense-tracker-transactions'

// read saved transactions once when the app starts
function loadTransactions() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function currentMonth() {
  return todayString().slice(0, 7) // "2026-11"
}

function App() {
  const [transactions, setTransactions] = useState(loadTransactions)
  const [month, setMonth] = useState(currentMonth())

  // save every time the list changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])

  function addTransaction(transaction) {
    setTransactions([transaction, ...transactions])
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter((t) => t.id !== id))
  }

  // every month that has a transaction, plus the current month, newest first
  const months = [...new Set([currentMonth(), ...transactions.map((t) => t.date.slice(0, 7))])]
    .sort()
    .reverse()

  // only the selected month, newest date first
  const visible = transactions
    .filter((t) => month === 'all' || t.date.startsWith(month))
    .sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id)

  return (
    <div className="app">
      <header className="header">
        <h1>💰 Expense Tracker</h1>
        <p>Keep track of where your money goes</p>
      </header>

      <MonthFilter months={months} selected={month} onChange={setMonth} />

      <Summary transactions={visible} />

      <main className="layout">
        <section className="card">
          <h2>Add transaction</h2>
          <TransactionForm onAdd={addTransaction} />
        </section>

        <section className="card">
          <h2>History</h2>
          <TransactionList transactions={visible} onDelete={deleteTransaction} />
        </section>
      </main>
    </div>
  )
}

export default App
