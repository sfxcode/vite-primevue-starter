FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./

RUN curl -sL https://unpkg.com/@pnpm/self-installer | node

RUN pnpm install
COPY ./ .
RUN pnpm build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
