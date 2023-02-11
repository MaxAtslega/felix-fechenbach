FROM node:lts-alpine

ENV NODE_ENV production

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json package.json
COPY yarn.lock yarn.lock

USER node

RUN yarn install

COPY --chown=node:node .next .next
COPY --chown=node:node public public

EXPOSE 3000

CMD yarn start
