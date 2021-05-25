import { renderHook, act } from '@testing-library/react-hooks'
import { getNewerMetrics, getOlderMetrics } from '../../../services/metricsService'

import { useMetricsContext } from '../sideEffects'
import { ADD_METRICS } from '../types'

jest.mock('../../../services/metricsService')

const mockedDispatch = jest.fn()
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    state: {
      metrics: [{ createdAt: '2021-05-25T18:30:01', id: 2, name: 'name 2' }],
      isLoading: false,
      error: null,
      hasError: false
    },
    dispatch: mockedDispatch
  })
}))

describe('<MetricsContext> hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Fetches new metrics', () => {
    getNewerMetrics.mockResolvedValueOnce([])

    const { result } = renderHook(() =>
      useMetricsContext()
    )

    act(() => {
      result.current.fetchNewMetrics()
    })

    expect(getNewerMetrics).toHaveBeenCalled()
  })

  test('Fetches older metrics', () => {
    getOlderMetrics.mockResolvedValueOnce([])

    const { result } = renderHook(() =>
      useMetricsContext()
    )

    act(() => {
      result.current.fetchOlderMetrics()
    })

    expect(getOlderMetrics).toHaveBeenCalled()
  })

  test('Adds metric', () => {
    const { result } = renderHook(() =>
      useMetricsContext()
    )

    const metricStub = { name: 'test name', value: 'test value' }
    act(() => {
      result.current.addMetric(metricStub)
    })

    expect(mockedDispatch).toHaveBeenCalledWith({ type: ADD_METRICS, payload: [metricStub] })
  })
})
