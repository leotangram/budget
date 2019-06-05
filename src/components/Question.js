import React, { Fragment } from 'react'

function Question() {
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      <form action=''>
        <input
          type='number'
          className='u-full-width'
          placeholder='Agrega tu presupuesto'
          // onChange={}
        />
        <input type="submit" value="Definir presupuesto" className="button-primary u-full-width"/>
      </form>
    </Fragment>
  )
}

export default Question
