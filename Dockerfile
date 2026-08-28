# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage. Launchpad drops all Linux capabilities, so use the
# rootless Nginx image instead of the standard root-oriented entrypoint.
FROM nginxinc/nginx-unprivileged:1.29-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
