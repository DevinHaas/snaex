FROM oven/bun:1.3.9-alpine AS build

WORKDIR /app
COPY snäx/package.json snäx/bun.lock ./
RUN bun install --frozen-lockfile
COPY snäx/ ./
RUN bun run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
