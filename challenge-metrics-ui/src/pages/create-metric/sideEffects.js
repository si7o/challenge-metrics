import { useState } from 'react'
import { useMetricsContext } from '../../context/metrics'
import { createMetric } from '../../services/metricsService'

export const useCreateMetricSubmit = () => {
  const { addMetric } = useMetricsContext()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isErrorMessage, setIsErrorMessage] = useState('')

  const submitMetric = (name, value) => {
    // TODO: validate/sanitize name & value

    setIsErrorMessage(false)
    setMessage('')
    setIsSubmitting(true)

    createMetric(name, value)
      .then((metric) => {
        addMetric(metric)
        setMessage('Metric created!')
      })
      .catch((e) => {
        setMessage('Oops! Something went wrong')
        setIsErrorMessage(true)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return { isSubmitting, submitMetric, message, isErrorMessage }
}
