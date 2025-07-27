FROM eclipse-temurin:21-jdk

COPY target/*-SNAPSHOT.jar /opt/application.jar

WORKDIR /opt

ENTRYPOINT ["java"]

CMD ["-Duser.timezone=UTC","-jar","application.jar","--spring.config.location=classpath:application.yaml"]