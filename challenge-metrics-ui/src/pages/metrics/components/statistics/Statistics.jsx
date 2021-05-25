import React from 'react'
import PropTypes from 'prop-types'

const Statistics = props => {
  const { id } = props

  return (
    <div id={id} className='statistics'>
      ToDo
    </div>
  )
}

Statistics.propTypes = {
  id: PropTypes.string
}

Statistics.defaultProps = {
  id: 'statistics'
}

export default Statistics
