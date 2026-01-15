#!/usr/bin/env bash
# Deploy koray-portfolio Vite app and redirect Nginx to Vite dev server

set -euo pipefail

VITE_PORT=5173
NGINX_CONF="/etc/nginx/sites-available/default"

# Install dependencies if node_modules is missing
if [ ! -d node_modules ]; then
  npm install --no-audit --no-fund
fi

# Update Nginx config to proxy to Vite dev server
sudo cp "$NGINX_CONF" "${NGINX_CONF}.bak"

sudo bash -c "cat > $NGINX_CONF" <<EOF
server {
    listen 80;
    server_name promanage.to;

    location / {
        proxy_pass http://localhost:$VITE_PORT;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF


# Ensure Nginx is running; start if not
if ! pgrep -x nginx > /dev/null; then
  echo "Nginx is not running. Starting Nginx..."
  sudo systemctl start nginx
else
  echo "Nginx is already running."
fi

# Test and reload Nginx
sudo nginx -t && sudo systemctl reload nginx

# Start Vite dev server in the background
echo "Starting Vite dev server in the background..."
nohup npm run dev -- --port $VITE_PORT > vite-dev.log 2>&1 &
echo "Vite dev server started. Logs: vite-dev.log"