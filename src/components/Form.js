import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid'

function Form(props) {
  const { setExpenditure, setCreateExpenditure } = props

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

    // Construir objeto de gasto
    const expenditure = {
      expenditureName,
      expenditureQuantity,
      id: shortid.generate()
    }

    // Pasar el gasto al componente principal
    setExpenditure(expenditure)
    setCreateExpenditure(true)

    // Eliminar alerta
    setError(false)

    // Resetear el form
    setExpenditureName('')
    setExpenditureQuantity('')
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
          value={expenditureName}
        />
      </div>
      <div className='field'>
        <label>Cantidad gasto</label>
        <input
          type='text'
          className='u-full-widthh'
          placeholder='Ej. 300'
          onChange={e => setExpenditureQuantity(parseInt(e.target.value, 10))}
          value={expenditureQuantity}
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
