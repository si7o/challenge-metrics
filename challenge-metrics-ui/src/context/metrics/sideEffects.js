import { useContext } from 'react'
import { getNewerMetrics, getOlderMetrics } from '../../services/metricsService'
import { MetricsContext } from './context'
import { ADD_METRICS, METRICS_FETCH_END, METRICS_FETCH_START, SET_ERROR_LOADING } from './types'

/**
 * Lets you access stored permissions directly
 */
export const useMetricsContext = () => {
  const {
    state: { metrics, isLoading, error, hasError },
    dispatch
  } = useContext(MetricsContext)

  /**
   * Fetches new metrics and adds them to the context state
   */
  const fetchNewMetrics = () => {
    const lastMetric = metrics[0]

    dispatch({ type: METRICS_FETCH_START })

    getNewerMetrics(lastMetric?.createdAt)
      .then((metrics) => {
        dispatch({ type: ADD_METRICS, payload: metrics })
      })
      .catch((e) => {
        dispatch({ type: ADD_METRICS, payload: [] })
        dispatch({ type: SET_ERROR_LOADING, payload: e })
      })
      .finally(() => {
        dispatch({ type: METRICS_FETCH_END })
      })
  }

  /**
   * Fetches older metrics and adds them to the context state
   */
  const fetchOlderMetrics = () => {
    const oldestMetric = metrics[metrics.length - 1]

    dispatch({ type: METRICS_FETCH_START })
    getOlderMetrics(oldestMetric?.createdAt)
      .then((metrics) => {
        dispatch({ type: ADD_METRICS, payload: metrics })
      })
      .catch((e) => {
        dispatch({ type: ADD_METRICS, payload: [] })
        dispatch({ type: SET_ERROR_LOADING, payload: e })
      })
      .finally(() => {
        dispatch({ type: METRICS_FETCH_END })
      })
  }

  /**
   * Adds metric to the context
   *
   * @param {Object} metric metric object
   */
  const addMetric = (metric) => {
    dispatch({ type: ADD_METRICS, payload: [metric] })
  }

  return { metrics, isLoading, fetchNewMetrics, fetchOlderMetrics, addMetric, error, hasError }
}
