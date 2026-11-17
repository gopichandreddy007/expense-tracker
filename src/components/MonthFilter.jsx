// "2026-11" -> "November 2026"
function monthLabel(month) {
  return new Date(month + '-01T00:00').toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric',
  })
}

function MonthFilter({ months, selected, onChange }) {
  return (
    <div className="month-filter">
      <label htmlFor="month">Showing:</label>
      <select id="month" value={selected} onChange={(e) => onChange(e.target.value)}>
        <option value="all">All time</option>
        {months.map((m) => (
          <option key={m} value={m}>
            {monthLabel(m)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default MonthFilter
