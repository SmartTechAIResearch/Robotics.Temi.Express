# Use the official Node.js v14 LTS image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json tsconfig.json ./

# Install project dependencies
RUN npm ci --only=production

# Copy the entire project directory to the working directory
COPY . .

# Expose the desired port (change it if your application runs on a different port)
EXPOSE 3001

# Start the application
CMD [ "npm", "run", "dev" ]
