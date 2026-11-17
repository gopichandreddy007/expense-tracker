import { useState } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary'

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
