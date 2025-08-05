# IggyTheBlog

a blog site with travel and recipes

#### Docker build

You can build the application using the following command:

```bash
mvn clean package -DskipTests
```

You can build the Docker image using the following command:

```bash
docker build -t iggytheblog:latest .
```
#### Run the backend application

You can run the application using docker-compose.
The `docker-compose.yml` file is already configured to run the application with a PostgreSQL database.

To run the application using docker-compose, you can use the following command:

```bash
docker-compose up
```

