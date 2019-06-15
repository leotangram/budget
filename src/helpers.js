export const reviewBudget = (budget, remaining) => {
  let className
  // Comprobar el 25%
  if (budget / 4 > remaining) {
    className = 'alert alert-danger'
  } else if (budget / 2 > remaining) {
    className = 'alert alert-warning'
  } else {
    className = 'alert alert alert-success'
  }
  return className
}
