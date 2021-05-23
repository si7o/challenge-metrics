import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'Content-type': 'application/json'
  }
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.isAxiosError) {
      console.error(error.message)
    } else {
      console.error(error.response)
    }
    throw error
  }
)

export default apiClient
