import React, { createContext, useEffect, useReducer } from 'react'
import reducer from './reducer'
import { getMetrics } from '../../services/metricsService'
import { ADD_METRICS, METRICS_FETCH_END, METRICS_FETCH_START, SET_ERROR_LOADING } from './types'

const initialState = {
  metrics: [],
  isLoading: false,
  error: null,
  hasError: false
}

/**
 * Define Metrics Context and Provider
 */
const Context = createContext()
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    // load initial metrics
    dispatch({ type: METRICS_FETCH_START })
    getMetrics()
      .then((metrics) => {
        dispatch({ type: ADD_METRICS, payload: metrics })
      })
      .catch((e) => {
        dispatch({ type: ADD_METRICS, payload: [] })
        dispatch({ type: SET_ERROR_LOADING })
      })
      .finally(() => {
        dispatch({ type: METRICS_FETCH_END })
      })
  }, [])

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

/**
 * Permissions module exports
 */
export {
  Context as MetricsContext,
  ContextProvider as MetricsContextProvider
}
