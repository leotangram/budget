import React, { useState, useEffect } from 'react'
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'

function App() {
  // state
  const [budget, setBudget] = useState(0)
  const [questionBudget, setQuestionBudget] = useState(true)
  const [createExpenditure, setCreateExpenditure] = useState(false)
  const [expenditure, setExpenditure] = useState({})
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    if (createExpenditure) {
      const expensesList = [...expenses, expenditure]
      setExpenses(expensesList)

      // Una vez que se agrega, lo ponemos como false
      setCreateExpenditure(false)
    }
  }, [createExpenditure])

  return (
    <div className='App container'>
      <header>
        <h1>Gasto semanal</h1>
        <div className='principal-content content'>
          {questionBudget ? (
            <Question
              setBudget={setBudget}
              setQuestionBudget={setQuestionBudget}
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
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
