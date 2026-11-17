import { useState } from 'react'
import TransactionForm from './components/TransactionForm'

function App() {
  const [transactions, setTransactions] = useState([])

  function addTransaction(transaction) {
    setTransactions([transaction, ...transactions])
  }

  return (
    <div className="app">
      <header className="header">
        <h1>💰 Expense Tracker</h1>
        <p>Keep track of where your money goes</p>
      </header>

      <main className="layout">
        <section className="card">
          <h2>Add transaction</h2>
          <TransactionForm onAdd={addTransaction} />
        </section>

        <section className="card">
          <h2>History</h2>
          <p>{transactions.length} transactions</p>
        </section>
      </main>
    </div>
  )
}

export default App
