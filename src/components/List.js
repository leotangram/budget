import React from 'react'
import Expenditure from './Expenditure'

function List({ expenses }) {
  return (
    <div className='expenses-incurred'>
      <h2>Listado</h2>
      {expenses.map(expenditure => (
        <Expenditure key={expenditure.id} expenditure={expenditure} />
      ))}
    </div>
  )
}

export default List
