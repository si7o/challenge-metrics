import React from 'react'
import { render, screen } from '@testing-library/react'

import Logo from '../Logo'

describe('<Logo>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders default', () => {
    const { container } = render(<Logo />)

    expect(container).toMatchSnapshot()
  })

  test('size large sets "large" classname', () => {
    render(<Logo size='large' />)

    expect(screen.getByRole('img')).toHaveClass('large')
  })

  test('spin fast sets "fast" classname', () => {
    render(<Logo spin='fast' />)

    expect(screen.getByRole('img')).toHaveClass('fast')
  })
})
