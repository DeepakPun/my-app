# Use node version 23 as our base image
FROM node:23-alpine

# Set working directory as /app
WORKDIR /app

# Copy dependencies list to the working directory
COPY package*.json ./

# optional step, update npm
# RUN npm install -g npm@11.2.0

# Install app dependencies
RUN npm install

# Copy rest of the files and folders to working directory
COPY ./ ./

# Expose container PORT to our computer
EXPOSE 5173

# Run the app
CMD [ "npm", "run", "dev" ]
