

FROM node:14.15 AS nodebuilder
WORKDIR /
COPY / .
RUN npm install &&\
    npm rebuild node-sass &&\
    npm run build

FROM nginx
COPY --from=nodebuilder /build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80