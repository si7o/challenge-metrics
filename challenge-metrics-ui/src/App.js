import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CreateMetric, Metrics } from './pages'
import { Header } from './components'
import { MetricsContextProvider } from './context/metrics'

function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <MetricsContextProvider>
            <Route exact path='/' render={() => <Metrics />} />
            <Route exact path='/create' render={() => <CreateMetric />} />
          </MetricsContextProvider>
        </Switch>
      </Router>
    </div>
  )
}

export default App
