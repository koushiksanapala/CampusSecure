#!/bin/bash
# 🚀 CampusSecure auto launcher

echo "Starting CampusSecure Project..."

# Open backend in a new terminal tab
osascript <<END
tell application "Terminal"
    do script "cd ~/Desktop/project1/backend && node server.js"
end tell
END

# Wait 3 seconds for backend to start
sleep 3

# Open frontend in a new terminal tab
osascript <<END
tell application "Terminal"
    do script "cd ~/Desktop/project1/frontend && python3 -m http.server 5500"
end tell
END

echo "✅ Backend running at http://localhost:5501"
echo "✅ Frontend running at http://localhost:5500"
echo "----------------------------------------------------"
echo "Now open http://localhost:5500/index.html in browser!"
