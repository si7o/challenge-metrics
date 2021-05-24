import clsx from 'clsx'
import React, { useState } from 'react'
import { Button } from '../../components'
import PageLoader from '../../components/page-loader/PageLoader'
import { useCreateMetricSubmit } from './sideEffects'
import './styles.scss'

// ToDo: use formik or react hook forms?

const CreateMetric = (props) => {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const { isSubmitting, submitMetric, message, isErrorMessage } = useCreateMetricSubmit()

  const handleSubmit = (e) => {
    e.preventDefault()
    submitMetric(name, value)
    handleReset()
  }

  const handleReset = () => {
    setName('')
    setValue('')
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleValueChange = (e) => {
    setValue(e.target.value)
  }

  const canSubmit = name && value

  return (
    <div id='create-metric-page' className='create-metric-page'>
      <h3>Create Metric</h3>

      <form id='create-metric-form' autoComplete='off' onReset={handleReset} onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='name'>Name*</label>
          <input type='text' name='name' id='name' placeholder='Type a name' value={name} onChange={handleNameChange} />
        </div>
        <div className='form-field'>
          <label htmlFor='value'>Value*</label>
          <input type='text' name='value' id='value' placeholder='Type a value' value={value} onChange={handleValueChange} />
        </div>
        <div className='form-actions'>
          <Button type='reset' disabled={isSubmitting}>Reset</Button>
          <Button type='submit' primary disabled={isSubmitting || !canSubmit}>Create</Button>
        </div>
        {message && (
          <div className={clsx('message', { error: isErrorMessage })}>
            {message}
          </div>
        )}
      </form>

      <PageLoader show={isSubmitting}>Creating metric...</PageLoader>
    </div>
  )
}

export default CreateMetric
