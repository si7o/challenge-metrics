import React from 'react'
import { Timeline, TimelineItem } from './components'
import { useMetricsContext } from '../../context/metrics'
import { Button } from '../../components'
import PageLoader from '../../components/page-loader/PageLoader'

const Metrics = (props) => {
  const { metrics, isLoading, fetchNewMetrics, fetchOlderMetrics } = useMetricsContext()

  const handleRefreshClick = () => fetchNewMetrics()
  const handleLoadMoreClick = () => fetchOlderMetrics()

  const timelineItems = metrics.map((metric) =>
    <TimelineItem
      key={metric.id}
      name={metric.name}
      value={metric.value}
      date={metric.createdAt}
      id={metric.id}
    />)

  return (
    <div>
      <PageLoader show={isLoading}>
        Loading metrics...
      </PageLoader>
      <h3>Metrics</h3>

      <Button onClick={handleRefreshClick}>Refresh</Button>
      <Timeline>
        {timelineItems}
      </Timeline>
      <Button onClick={handleLoadMoreClick}>Load More</Button>
    </div>
  )
}

export default Metrics
