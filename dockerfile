FROM ubuntu:latest
LABEL author="Arsen"
RUN apt-get update
RUN apt-get install nginx -y
CMD [ "nginx", "-g", "daumon off;" ]