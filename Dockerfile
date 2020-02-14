FROM mhart/alpine-node:latest
WORKDIR /srv/api
COPY ./ ./
RUN yarn && yarn build
RUN	rm -r src dist/tsconfig.build.tsbuildinfo node_modules
RUN NODE_ENV=production yarn
RUN yarn cache clean
CMD yarn start:prod