# Build stage
FROM node:22-alpine AS build-stage

WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
# Build with TypeScript check
RUN npm run build
# Build without TypeScript check
# RUN npx nuxt build 

# Production stage
FROM node:22-alpine AS production-stage
COPY --from=build-stage /app/.output /app
WORKDIR /app
EXPOSE 3000
CMD ["node", "server/index.mjs"]
