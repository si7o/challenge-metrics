import React from 'react'
import { render, screen, act } from '@testing-library/react'

import CreateMetric from '../CreateMetric'
import { createMetric, getMetrics } from '../../../services/metricsService'
import userEvent from '@testing-library/user-event'
import { MetricsContextProvider } from '../../../context/metrics'

jest.mock('../../../services/metricsService')

describe('CreateMetric', () => {
  test('Submits data ok', async () => {
    createMetric.mockResolvedValue({})
    getMetrics.mockResolvedValue([])

    act(() => {
      render(
        <MetricsContextProvider>
          <CreateMetric />
        </MetricsContextProvider>
      )
    })

    const nameText = 'test name'
    userEvent.type(screen.getByLabelText('Name*'), nameText)

    const valueText = 'test value'
    userEvent.type(screen.getByLabelText('Value*'), valueText)

    act(() => {
      userEvent.click(screen.getByRole('button', { name: 'Create' }))
    })

    expect(createMetric).toHaveBeenCalledWith(nameText, valueText)
  })
})
