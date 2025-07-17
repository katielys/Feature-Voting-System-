
FROM node:18-alpine as build

WORKDIR /app

RUN npm install -g expo-cli


COPY . .

RUN npm install


RUN npx expo export:web


FROM nginx:alpine


RUN rm -rf /usr/share/nginx/html/*


COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
