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

# Private Launchpad checkouts use a restrictive umask. Normalize only the
# built, public assets so the unprivileged Nginx worker can serve them.
RUN chmod -R a=rX /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
