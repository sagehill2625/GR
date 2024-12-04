   # Use a Node.js base image
   FROM node:16

   # Set the working directory in the container
   WORKDIR /app

   # Copy package.json and package-lock.json to the container
   COPY package*.json ./

   # Install dependencies
   RUN npm install

   # Copy the rest of the application code
   COPY . .

   # Build the production build
   RUN npm run build

   # Expose the port the app runs on
   EXPOSE 3000

   # Start the app
   CMD ["npm", "run", "preview --host"]