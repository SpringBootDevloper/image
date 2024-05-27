# FROM node:latest as build
# WORKDIR /app
# COPY package*.json .
# RUN npm install -g npm@10.6.0
# COPY . .
# RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/image /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

