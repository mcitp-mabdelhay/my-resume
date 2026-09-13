# ---- Stage 1: Install dependencies & build ----
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy dependency manifests first for better layer caching
COPY package.json bun.lock ./

# Install all dependencies (including devDependencies needed for build)
RUN bun install --frozen-lockfile

# Copy source files
COPY . .

# Build frontend (Vite) and backend (esbuild)
RUN bun run build

# ---- Stage 2: Production image ----
FROM node:22-alpine AS production

WORKDIR /app

# Copy built artifacts from builder
COPY --from=builder /app/dist ./dist

# Copy public assets (served statically)
COPY public ./public

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Health check against the Express server
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ || exit 1

# Run the production server
CMD ["node", "dist/server.cjs"]
