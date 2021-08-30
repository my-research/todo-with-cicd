FROM openjdk:17-ea-11-jdk-slim

WORKDIR /server

COPY ./build/libs/jenkins-cicd-todo-0.0.1-SNAPSHOT.jar todo-server.jar

ENTRYPOINT ["java", "-jar", "todo-server.jar"]
