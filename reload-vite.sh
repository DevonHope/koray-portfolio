#!/usr/bin/env bash
# Reload the Vite dev server (stop if running, then start in background)

VITE_PORT=5173
VITE_LOG=vite-dev.log

# Find and kill any running vite dev server on the port
PID=$(lsof -ti tcp:$VITE_PORT)
if [ -n "$PID" ]; then
  echo "Stopping existing Vite dev server (PID $PID)..."
  kill $PID
  sleep 2
fi

# Start Vite dev server in background
nohup npm run dev -- --port $VITE_PORT > $VITE_LOG 2>&1 &
echo "Vite dev server started in background. Logs: $VITE_LOG"
