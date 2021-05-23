docker build -f "challenge-metrics-api\Dockerfile" --force-rm -t challengemetricsapi:dev "challenge-metrics-api"
docker run -d -p 8091:80 --name challenge-metrics-api challengemetricsapi:dev

echo "The API will be running in http://localhost:8081/"
echo "You can access http://localhost:8081/swagger/index.html to check API definition/documentation"