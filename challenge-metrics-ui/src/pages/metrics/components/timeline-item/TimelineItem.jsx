import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns/esm'
import './styles.scss'

const TimelineItem = (props) => {
  const { name, value, date, dateFormat, id } = props

  const elementId = `timeline-item-${id}`

  let dateString
  try {
    const parsedDate = new Date(date)
    dateString = format(parsedDate, dateFormat)
  } catch (e) {
    console.warn(`timeline-item-${id}`, date)
  }

  return (
    <div id={elementId} className='timeline-item'>
      <span className='title'>{name}</span>
      <span className='description'>{value}</span>
      <span className='date'>{dateString}</span>
    </div>
  )
}

TimelineItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  dateFormat: PropTypes.string
}

TimelineItem.defaultProps = {
  dateFormat: 'dd MMM yyyy HH:mm:ss'
}

export default TimelineItem
