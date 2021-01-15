module.exports = function formatMonthDay(d) {
  const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

  return `${month[d.getMonth()]}/${d.getDay()}`
}