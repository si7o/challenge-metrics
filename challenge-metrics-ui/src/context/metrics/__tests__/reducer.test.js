import reducer from '../reducer'
import { ADD_METRICS, METRICS_FETCH_END, METRICS_FETCH_START, SET_ERROR_LOADING, SET_METRICS } from '../types'

const initialMetricsListStub = [
  { createdAt: '2021-05-25T18:30:01', id: 2, name: 'name 2' },
  { createdAt: '2021-05-25T18:30:01', id: 1, name: 'name 1' }
]

const metricsListStub = [
  { createdAt: '2021-05-25T18:35:03', id: 4, name: 'name 4' },
  { createdAt: '2021-05-25T18:30:02', id: 3, name: 'name 3' },
  { createdAt: '2021-05-25T18:30:01', id: 2, name: 'name 2' },
  { createdAt: '2021-05-25T18:30:01', id: 1, name: 'name 1' }
]

describe('<MetricsContext> reducer', () => {
  test('Sets Metrics', () => {
    const initialState = { metrics: [] }

    const result = reducer(initialState, { type: SET_METRICS, payload: metricsListStub })

    expect(result.metrics).toEqual(metricsListStub)
  })

  test('Adds metrics', () => {
    const initialState = { metrics: initialMetricsListStub }

    const result = reducer(initialState, { type: ADD_METRICS, payload: metricsListStub })

    expect(result.metrics).toEqual(metricsListStub)
  })

  test('Sets isLoading to true', () => {
    const initialState = { isLoading: false }

    const result = reducer(initialState, { type: METRICS_FETCH_START })

    expect(result.isLoading).toBeTruthy()
  })

  test('Sets isLoading to false', () => {
    const initialState = { isLoading: true }

    const result = reducer(initialState, { type: METRICS_FETCH_END })

    expect(result.isLoading).toBeFalsy()
  })

  test('Sets error', () => {
    const initialState = { error: null, hasError: false }

    const errorStub = 'errorStub'

    const result = reducer(initialState, { type: SET_ERROR_LOADING, payload: errorStub })

    expect(result.error).toEqual(errorStub)
    expect(result.hasError).toBeTruthy()
  })

  test('Unknown Type does nothing', () => {
    const initialState = {
      metrics: [],
      isLoading: false,
      error: null,
      hasError: false
    }

    const result = reducer(initialState, { type: 'WAHTEVER__', payload: 'whatever--' })

    expect(result).toEqual(initialState)
  })
})
