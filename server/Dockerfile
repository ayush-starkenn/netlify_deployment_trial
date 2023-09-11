# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the custom port to allow incoming traffic
EXPOSE 3001

# Start the Node.js server to serve the React app
CMD ["npm", "start"]
