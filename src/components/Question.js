import React, { Fragment, useState } from 'react'

function Question(props) {
  const { setBudget } = props

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
  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? (
        <p className='alert alert-danger error'>El presupuesto es incorrecto</p>
      ) : null}
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
