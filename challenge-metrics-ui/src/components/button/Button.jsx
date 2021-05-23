import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import './styles.scss'

const Button = (props) => {
  const { title, className, onClick, children, primary, disabled, type } = props

  const handleClick = (e) => {
    onClick(e)
  }

  const classname = clsx('button', className, { primary })

  return (
    <button type={type} title={title} onClick={handleClick} className={classname} disabled={disabled}>
      {children}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.any,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

Button.defaultProps = {
  onClick: () => { },
  type: 'button'
}

export default Button
