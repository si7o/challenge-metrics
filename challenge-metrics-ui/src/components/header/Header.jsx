import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Logo from '../logo/Logo'
import './styles.scss'

const Header = (props) => {
  const { children, id, title } = props

  return (
    <header id={id} className='header'>
      <Logo />
      <h1>{title}</h1>
      <ul id='menu'>
        <li>
          <NavLink exact to='/'>Metrics</NavLink>
        </li>
        <li>
          <NavLink exact to='/create'>Create Metric</NavLink>
        </li>
      </ul>
      {children}
    </header>
  )
}

Header.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
}

Header.defaultProps = {
  id: 'header',
  title: 'Metrics Challenge'
}

export default Header
