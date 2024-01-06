# Stage 1: Build the Next.js application
# Use an official Node.js image as the base image
FROM node:18 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock files into the working directory
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Stage 2: Run the application
# Use an official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the necessary files from the builder stage
COPY --from=builder /app ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["yarn", "start"]
