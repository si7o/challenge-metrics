import { compareDesc, parseISO } from 'date-fns'
import { ADD_METRICS, METRICS_FETCH_START, METRICS_FETCH_END, SET_METRICS, SET_ERROR_LOADING } from './types'

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_METRICS:
      return {
        ...state,
        metrics: payload
      }

    case ADD_METRICS: {
      const currentMetricIds = state.metrics.map((m) => m.id)
      const newMetrics = payload.filter((m) => !currentMetricIds.includes(m.id))

      const metrics = [...state.metrics, ...newMetrics]

      metrics.sort((a, b) =>
        compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)))

      return {
        ...state,
        metrics: metrics
      }
    }
    case METRICS_FETCH_START:
      return {
        ...state,
        isLoading: true
      }

    case METRICS_FETCH_END:
      return {
        ...state,
        isLoading: false
      }

    case SET_ERROR_LOADING:
      return {
        ...state,
        error: payload,
        hasError: true
      }

    default:
      return state
  }
}

export default reducer
