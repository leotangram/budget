import React, { useState, useEffect } from 'react'
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BudgetControl'

function App() {
  // state
  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [questionBudget, setQuestionBudget] = useState(true)
  const [createExpenditure, setCreateExpenditure] = useState(false)
  const [expenditure, setExpenditure] = useState({})
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    if (createExpenditure) {
      const expensesList = [...expenses, expenditure]
      setExpenses(expensesList)

      // Restar el presupuesto
      const remainingBudget = remaining - expenditure.expenditureQuantity
      setRemaining(remainingBudget)

      // Una vez que se agrega, lo ponemos como false
      setCreateExpenditure(false)
    }
  }, [createExpenditure, expenses, expenditure, remaining])

  return (
    <div className='App container'>
      <header>
        <h1>Gasto semanal</h1>
        <div className='principal-content content'>
          {questionBudget ? (
            <Question
              setBudget={setBudget}
              setQuestionBudget={setQuestionBudget}
              setRemaining={setRemaining}
            />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Form
                  setExpenditure={setExpenditure}
                  setCreateExpenditure={setCreateExpenditure}
                />
              </div>
              <div className='one-half column'>
                <List expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
