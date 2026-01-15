#!/usr/bin/env bash
# Stop the Vite dev server running on port 5173

VITE_PORT=5173
PID=$(lsof -ti tcp:$VITE_PORT)
if [ -n "$PID" ]; then
  echo "Stopping Vite dev server (PID $PID)..."
  kill $PID
  echo "Vite dev server stopped."
else
  echo "No Vite dev server running on port $VITE_PORT."
fi
