# Stage 1: Build the React app
FROM node:18 AS client-builder

WORKDIR /app

ARG REACT_APP_API_URL=http://localhost

# ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Copy package.json and package-lock.json to the container
# COPY package*.json ./

# Copy the client application code to the container
COPY . .

RUN echo "REACT_APP_API_URL=${REACT_APP_API_URL}" > .env

# Install client dependencies
RUN npm install

# Build the React app for production
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the built client application from the builder stage to the Nginx web root
COPY --from=client-builder /app/build /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose the default Nginx port (80)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
