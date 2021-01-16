module.exports = function formatDateStringToMonthAndYear(d) {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return `${month[d.getMonth()]} ${d.getFullYear()}`
}
