import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import logo from './logo.svg'
import clsx from 'clsx'

const Logo = (props) => {
  const { spin, size } = props

  const classname = clsx('logo', spin, size)

  return (
    <img src={logo} className={classname} alt='logo' />
  )
}

Logo.propTypes = {
  spin: PropTypes.oneOf(['default', 'fast']),
  size: PropTypes.oneOf(['normal', 'large'])
}

Logo.defaultProps = {
  spin: 'default',
  size: 'normal'
}

export default Logo
