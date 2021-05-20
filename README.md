
# Start Applications

You will need to run the API(.NET Core 3.1) and UI(React) separately.

## Run API

### Requirements

- Docker

Open your terminal (tesdted using bash), navigate to the root folder of the application (`./challenge-metrics`) and run the following commands:

Build .net API container
```bash
docker build -f "challenge-metrics-api\Dockerfile" --force-rm -t challengemetricsapi:dev "challenge-metrics-api" 
```

Run Container
```bash
docker run -d -p 8080:80 --name challenge-metrics-api challengemetricsapi:dev
```

The API will be running in http://localhost:8080/
You can access http://localhost:8080/swagger/index.html to check API definition/documentation

## Run UI

Fastest way is to start the application using npm (or yarn).
Navigate to `./challenge-metrics/challenge-metrics-ui` and run the following commands:


```bash
npm i
npm run start
```

The UI should be accessible in http://localhost:9001
