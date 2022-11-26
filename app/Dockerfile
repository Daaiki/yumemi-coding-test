FROM node:18.12-slim
ENV APP_ROOT /home/app

WORKDIR $APP_ROOT

RUN apt update && apt install -y git

COPY ./package.json $APP_ROOT
COPY ./yarn.lock $APP_ROOT

RUN yarn install 

COPY . $APP_ROOT

EXPOSE 3000
CMD ["yarn", "dev"]
