docker stop challenge-metrics-api
docker stop challenge-metrics-ui

docker rm challenge-metrics-api
docker rm challenge-metrics-ui

echo "containers stopped & removed."