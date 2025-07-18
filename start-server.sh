#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVER_DIR="$SCRIPT_DIR"

echo "Starting Moonstone Server with ngrok..."
echo "Server directory: $SERVER_DIR"

# Change to server directory
cd "$SERVER_DIR"

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "ERROR: .env file not found!"
    echo "Please create a .env file with your API keys"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Set environment variables for better performance
export NODE_OPTIONS="--max-old-space-size=1024"
export NODE_ENV=production

# Function to cleanup on exit
cleanup() {
    echo "Shutting down server and ngrok..."
    kill $SERVER_PID 2>/dev/null
    kill $NGROK_PID 2>/dev/null
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Start the server in background
echo "Starting server on port 3001..."
npm start &
SERVER_PID=$!

# Wait a bit for server to start
sleep 5

# Check if server is running
if kill -0 $SERVER_PID 2>/dev/null; then
    echo "Server started successfully!"
    
    # Start ngrok
    echo "Starting ngrok tunnel..."
    ngrok http 3001 &
    NGROK_PID=$!
    
    echo "================================================"
    echo "Server is running!"
    echo "Local access: http://localhost:3001"
    echo "ngrok web interface: http://localhost:4040"
    echo "Press Ctrl+C to stop both server and ngrok"
    echo "================================================"
    
    # Wait for processes
    wait $SERVER_PID
else
    echo "Failed to start server!"
    exit 1
fi
