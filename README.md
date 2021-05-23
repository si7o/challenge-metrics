# The chllenge

**The challenge is to build a Frontend + Backend application that allows you to post and visualize metrics.** Each metric will have a timestamp, name, and value. The metrics will be shown in a timeline and must show averages per minute/hour/day and persisted in the database.

The maximum time for the challenge is 12 hours. If possible backend and frontend code in the same repo.

## Start Applications

### Requirements

- Docker
- A modern browser

This has been testes using Git Bash for Windows

Navigate to repo folder (`./challenge-metrics`) and run the following command:

```bash
. pipeline.local.sh
```

To shutdown UI & API just run 

```bash
. pipeline.local.shutdown.sh
```

_If the pipeline fails, you can try "deploying" the API & UI manually_

### Run Manually

You can run the API(.NET Core 3.1) and UI(React) separately.

#### Run API

Assuming you dont have .net SDK, we will use docker to build & run the API.
Open your terminal, navigate to the root folder of the application (`./challenge-metrics`) and run the following commands:

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

#### Run UI

Fastest way is to start the application using npm (or yarn).
Navigate to `./challenge-metrics/challenge-metrics-ui` and run the following commands:

```bash
npm i
npm run start
```

The UI should be accessible in http://localhost:9001
