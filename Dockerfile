# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm ci --production

# Copy the source code to the working directory
COPY . .

# Run the tests
RUN npm test

# Run the build command
RUN npm run build

# Expose a port (if necessary)
EXPOSE 3000

# Set the command to run the application
CMD ["npm", "start"]
