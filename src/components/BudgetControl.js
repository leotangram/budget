import React, { Fragment } from 'react'

const BudgetControl = ({ budget, remaining }) => (
  <Fragment>
    <div className='alert alert-primary'>Presupuesto: $ {budget}</div>
    <div className=''>Restate: $ {remaining}</div>
  </Fragment>
)

export default BudgetControl
