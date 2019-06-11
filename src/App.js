import React, { useState, useEffect } from 'react'
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'

function App() {
  // state
  const [budget, setBudget] = useState(0)
  const [questionBudget, setQuestionBudget] = useState(true)
  const [expenditure, setExpenditure] = useState({})
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const expensesList = [...expenses, expenditure]
    setExpenses(expensesList)
  }, [])

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
                <Form setExpenditure={setExpenditure} />
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
