import React from 'react'

const DatosUser = ({ user, dispatch }) => (
  <div className="container-fluid">
    <h2>Ingesta diaria de calorías</h2>
    <div>
    <label > { user !==undefined && user.calorias!==undefined ? user.calorias : null}</label>
    </div>
    <h2>Recomendadas para ti</h2>    
    <button onClick={()=>window.location = window.location.protocol + '//' + window.location.host + '/#/'}>Atras</button>    
  </div>  
)

export default DatosUser;