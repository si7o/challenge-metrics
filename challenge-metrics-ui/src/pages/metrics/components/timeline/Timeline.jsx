import React from 'react'
import './styles.scss'

const Timeline = (props) => {
  const { children } = props

  return (
    <div className='timeline'>
      {children}
    </div>
  )
}

export default Timeline
