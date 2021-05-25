import apiClient from './apiClient'

/**
 * Creates a metric and returns created item
 *
 * @param {String} name
 * @param {String} value
 * @returns metric
 */
export const createMetric = async (name, value) => {
  const requestData = { name, value }

  const response = await apiClient.post('metrics', requestData)

  return response.data
}

/**
 * Get last metrics
 *
 * @returns array of metrics
 */
export const getMetrics = async () => {
  const response = await apiClient.get('metrics')

  return response.data
}

/**
 * Get metrics older than a date
 *
 * @param {string} dateTo
 * @returns array of metrics
 */
export const getOlderMetrics = async (dateTo) => {
  const response = await apiClient.get(`metrics/?dateTo=${dateTo}`)

  return response.data
}

/**
 * Get metrics newer than a date
 *
 * @param {string} dateFrom
 * @returns array of metrics
 */
export const getNewerMetrics = async (dateFrom) => {
  let url
  if (dateFrom) {
    url = `metrics/?dateFrom=${dateFrom}`
  }
  else {
    url = 'metrics'
  }
  const response = await apiClient.get(url)

  return response.data
}
