FROM node

LABEL maintainer="redwolf89@gmail.com"

RUN apt-get update -yqq
RUN apt-get install -yqq --no-install-recommends build-essential apt-transport-https vim

# create-react-app
RUN npm i -g create-react-app

# Nodemon
RUN npm i -g nodemon

# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -\
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn

# Define an environment variable we will use in the COPY command - this is passed in via the args from docker-compose
#ARG project_dir

WORKDIR /home/node/app

EXPOSE 8888
EXPOSE 9009
EXPOSE 3000

# Start server (Exec form)
#ENTRYPOINT ["./docker-entrypoint.sh"]
#CMD ["npm", "start"]

# Launch a shell
ENTRYPOINT ["/bin/bash"]
