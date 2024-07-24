# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Define build arguments
ARG KINDE_CLIENT_ID
ARG KINDE_CLIENT_SECRET
ARG KINDE_ISSUER_URL
ARG KINDE_SITE_URL
ARG KINDE_POST_LOGOUT_REDIRECT_URL
ARG KINDE_POST_LOGIN_REDIRECT_URL
ARG UPLOADTHING_SECRET
ARG UPLOADTHING_APP_ID
ARG DATABASE_URL
ARG REDIS_URL
ARG REDIS_TOKEN
ARG STRIPE_API_KEY
ARG STRIPE_SECRET_WEBHOOK

# Print the build arguments to verify they are passed correctly
RUN echo "KINDE_CLIENT_ID=$KINDE_CLIENT_ID" && \
    echo "KINDE_CLIENT_SECRET=$KINDE_CLIENT_SECRET" && \
    echo "KINDE_ISSUER_URL=$KINDE_ISSUER_URL" && \
    echo "KINDE_SITE_URL=$KINDE_SITE_URL" && \
    echo "KINDE_POST_LOGOUT_REDIRECT_URL=$KINDE_POST_LOGOUT_REDIRECT_URL" && \
    echo "KINDE_POST_LOGIN_REDIRECT_URL=$KINDE_POST_LOGIN_REDIRECT_URL" && \
    echo "UPLOADTHING_SECRET=$UPLOADTHING_SECRET" && \
    echo "UPLOADTHING_APP_ID=$UPLOADTHING_APP_ID" && \
    echo "DATABASE_URL=$DATABASE_URL" && \
    echo "REDIS_URL=$REDIS_URL" && \
    echo "REDIS_TOKEN=$REDIS_TOKEN" && \
    echo "STRIPE_API_KEY=$STRIPE_API_KEY" && \
    echo "STRIPE_SECRET_WEBHOOK=$STRIPE_SECRET_WEBHOOK"

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