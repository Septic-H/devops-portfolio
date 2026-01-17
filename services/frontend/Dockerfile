FROM nginx:alpine

# 1. Clean the default folder
RUN rm -rf /usr/share/nginx/html/*

# 2. Copy frontend files to the specific folder Nginx watches
COPY . /usr/share/nginx/html

# 3. Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf