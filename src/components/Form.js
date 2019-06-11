import React, { useState } from 'react'
import Error from './Error'

function Form(props) {
  // State
  const [expenditureName, setExpenditureName] = useState('')
  const [expenditureQuantity, setExpenditureQuantity] = useState(0)
  const [error, setError] = useState(false)

  // Cuando se agrega el gasto
  const addExpenditure = e => {
    e.preventDefault()

    // Validar
    if (
      expenditureQuantity < 1 ||
      isNaN(expenditureQuantity) ||
      expenditureName === ''
    ) {
      setError(true)
      return
    }

    // Pasar el gasto al componente principal
  }

  return (
    <form onSubmit={addExpenditure}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error message='Ambos campos son obligatorios o presupuesto incorrecto' />
      ) : null}
      <div className='field'>
        <label>Nombre gasto</label>
        <input
          type='text'
          className='u-full-widthh'
          placeholder='Ej. transporte'
          onChange={e => setExpenditureName(e.target.value)}
        />
      </div>
      <div className='field'>
        <label>Cantidad gasto</label>
        <input
          type='text'
          className='u-full-widthh'
          placeholder='Ej. 300'
          onChange={e => setExpenditureQuantity(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type='submit'
        value='Agregar gasto'
        className='button-primary u-full-width'
      />
    </form>
  )
}

export default Form
