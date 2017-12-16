FROM node:9.2.1-alpine

# for aws cli
RUN apk add --no-cache zip curl python-dev
RUN curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "/tmp/awscli-bundle.zip"
RUN cd /tmp && unzip awscli-bundle.zip
RUN /tmp/awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
RUN rm -rf /tmp/awscli*

RUN npm install -g serverless

#dependncies of IoT scripts
RUN apk update && apk add --no-cache bash ncurses jq

ENV APP_HOME /usr/src/app/
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

# WORKDIR /tmp
COPY package.json package-lock.json /tmp/
RUN cd /tmp && npm install

#COPY . $APP_HOME

#copy from tmp so that we don't have to re-install ALL the modules every time
RUN ln -s /tmp/node_modules $APP_HOME/node_modules

EXPOSE 3000
CMD npm install && npm start

