import React, { Fragment, useState } from 'react'
import Error from './Error'

function Question(props) {
  const { setBudget, setQuestionBudget } = props

  // Definir el state
  const [quantity, setQuantity] = useState(0)
  const [error, setError] = useState(false)

  // Validar el presupuesto
  const addBudget = e => {
    e.preventDefault()

    // Validad
    if (quantity < 1 || isNaN(quantity)) {
      setError(true)
      return
    }

    // Si se pasa la validación
    setError(false)
    setBudget(quantity)
    setQuestionBudget(false)
  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error message='El presupuesto es incorrecto' /> : null}
      <form onSubmit={addBudget}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Agrega tu presupuesto'
          onChange={e => setQuantity(parseInt(e.target.value, 10))}
        />
        <input
          type='submit'
          value='Definir presupuesto'
          className='button-primary u-full-width'
        />
      </form>
    </Fragment>
  )
}

export default Question
