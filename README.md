# The challenge

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

**The API will be running in `http://localhost:8091/`**

**Check API definition/documentation `http://localhost:8091/swagger/index.html`**

**UI should be running in `http://localhost:8090/`**


To shutdown UI & API just run 

```bash
. pipeline.local.shutdown.sh
```
