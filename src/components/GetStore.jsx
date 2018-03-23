import React from 'react'
import { connect } from 'react-redux'

const GetStore = ({ store,children  }) => {

    return (
        <div className="container">
            {children}
        </div>
    )
}
 
  


const mapState = (state) => ({
    state: state
  })
export default connect(mapState)(GetStore)