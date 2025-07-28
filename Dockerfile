# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install ; npm install vite @vitejs/plugin-react react@^18.2.0 react-dom@^18.2.0 react-router-dom express nedb cors
COPY . .
WORKDIR moz-todo-react
RUN npm run build && npm cache clean --force
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/moz-todo-react/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
