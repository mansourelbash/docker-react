# Use the official Node.js image as the base image
FROM node:18-alpine3.17 
# Set the working directory inside the container
WORKDIR /app
# Copy the package.json file to the working directory
COPY package.json .

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Command to start the application
CMD ["npm", "run", "dev"]
