import { useState, useEffect } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary'

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

function App() {
  const [transactions, setTransactions] = useState(loadTransactions)

  // save every time the list changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])

  function addTransaction(transaction) {
    setTransactions([transaction, ...transactions])
  }

  return (
    <div className="app">
      <header className="header">
        <h1>💰 Expense Tracker</h1>
        <p>Keep track of where your money goes</p>
      </header>

      <Summary transactions={transactions} />

      <main className="layout">
        <section className="card">
          <h2>Add transaction</h2>
          <TransactionForm onAdd={addTransaction} />
        </section>

        <section className="card">
          <h2>History</h2>
          <TransactionList transactions={transactions} />
        </section>
      </main>
    </div>
  )
}

export default App
