import React, { useState } from 'react'
import Question from './components/Question'
import Form from './components/Form'

function App() {
  // state
  const [budget, setBudget] = useState(0)
  const [questionBudget, setQuestionBudget] = useState(true)
  const [expendiure, setExpendiure] = useState({})
  const [expenses, setExpenses] = useState([])

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
                <Form setExpendiure={setExpendiure} />
              </div>
              <div className='one-half column' />
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
