import React from 'react'
import PropTypes from 'prop-types'
import { viewForm } from '../actions'

const DatosUser = ({ user, dispatch }) => (
  <div className="container-fluid">
    <h2>Ingesta diaria de calorías</h2>
    <div>
    <label > { user !==undefined && user.calorias!==undefined ? user.calorias : null}</label>
    </div>
    <h3>recomendadas para ti</h3>
    <button onClick={()=>dispatch(viewForm(true))}>Atras</button>  
    {/* <button onClick={()=>dispatch(viewForm(true))}>Siguiente</button>  */} 
  </div>
  
)

export default DatosUser;