docker build -f "challenge-metrics-api\Dockerfile" --force-rm -t challengemetricsapi:dev "challenge-metrics-api"
docker run -d -p 8091:80 --name challenge-metrics-api challengemetricsapi:dev

docker build -f "challenge-metrics-ui\Dockerfile" --force-rm -t challengemetricsui:dev "challenge-metrics-ui"
docker run -d -p 8090:80 --name challenge-metrics-ui challengemetricsui:dev

echo "*******************************************************************************"
echo ""
echo ""
echo "The API will be running in            http://localhost:8091/"
echo "Check API definition/documentation    http://localhost:8091/swagger/index.html"
echo ""
echo ""
echo "UI should be running in               http://localhost:8090/"
echo ""
echo ""
echo "To shutdown run                       '. pipeline.local.shutdown.sh'"
