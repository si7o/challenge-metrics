import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../logo/Logo'
import './styles.scss'
import clsx from 'clsx'

const PageLoader = (props) => {
  const { show, children } = props

  const classname = clsx('page-loader', { show })

  return (
    <div id='page-loader' className={classname}>
      <Logo spin='fast' size='large' />
      {children}
    </div>)
}

PageLoader.propTypes = {
  show: PropTypes.bool
}

export default PageLoader
