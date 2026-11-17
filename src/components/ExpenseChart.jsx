import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { getCategory } from '../categories'
import { formatMoney } from '../utils'

function ExpenseChart({ transactions }) {
  // add up expenses for each category
  const totals = {}
  transactions
    .filter((t) => t.type === 'expense')
    .forEach((t) => {
      const name = t.category || 'Other'
      totals[name] = (totals[name] || 0) + t.amount
    })

  const data = Object.keys(totals)
    .map((name) => ({ name, value: totals[name], ...getCategory('expense', name) }))
    .sort((a, b) => b.value - a.value)

  const total = data.reduce((sum, d) => sum + d.value, 0)

  if (data.length === 0) {
    return <p className="empty">No expenses to show for this period.</p>
  }

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={2}>
            {data.map((d) => (
              <Cell key={d.name} fill={d.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatMoney(value)} />
        </PieChart>
      </ResponsiveContainer>

      <ul className="legend">
        {data.map((d) => (
          <li key={d.name}>
            <span className="dot" style={{ background: d.color }}></span>
            <span className="legend-name">
              {d.icon} {d.name}
            </span>
            <span className="legend-value">
              {formatMoney(d.value)} <small>({Math.round((d.value / total) * 100)}%)</small>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseChart
