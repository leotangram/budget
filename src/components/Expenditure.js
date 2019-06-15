import React from 'react'

const Expenditure = ({ expenditure }) => (
  <li className='expenses'>
    <p>
      {expenditure.expenditureName}{' '}
      <span className='expenditure'>${expenditure.expenditureQuantity}</span>{' '}
    </p>
  </li>
)

export default Expenditure
