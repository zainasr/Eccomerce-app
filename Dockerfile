# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json prisma ./
RUN npm ci

# Copy source files
COPY . .

# Generate Prisma client and build the app
RUN npx prisma generate && \
    npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Create a non-root user and group


# Copy necessary files from the build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Change ownership to non-root user


# Switch to the non-root user


# Expose the port the app runs on
EXPOSE 3000

# Run the Next.js application
CMD ["npm", "start"]