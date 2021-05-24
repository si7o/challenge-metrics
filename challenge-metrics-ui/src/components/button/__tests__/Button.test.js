import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from '../Button'
import userEvent from '@testing-library/user-event'

describe('<Button>', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders default', () => {
    const { container } = render(<Button>test button</Button>)

    expect(container).toMatchSnapshot()
  })

  test('when clicks, triggers onClick', () => {
    const mockedOnClick = jest.fn()

    render(
      <Button onClick={mockedOnClick}>test button</Button>
    )

    userEvent.click(screen.getByRole('button'))

    expect(mockedOnClick).toHaveBeenCalled()
  })

  test('renders disabled', () => {
    render(<Button disabled>test button</Button>)

    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  })
})
