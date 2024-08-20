# Docker Compose with Auto-Scaling - Node.js and MongoDB

This Docker Compose setup involves:
1. **web**: A Node.js web application that connects to a MongoDB database.
2. **mongo**: A MongoDB database container.

The Node.js service is configured with auto-scaling, allowing multiple replicas for load balancing.

## Services

- **web**: The Node.js web app connects to MongoDB. Auto-scaling is enabled with 3 replicas.
- **mongo**: The MongoDB container stores the application's data.

## Running the Application

```bash
docker-compose up -d
##Scaling the Application
docker-compose up --scale web=5 -d
##Access the Node.js app
http://localhost:3000
##Access MongoDB at port 27017