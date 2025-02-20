echo "-----> Running Motsomi Api Docs project script <-----"

# echo "-----> First install Firebase Tools <-----"
# npm install -g firebase-tools

docker-compose -f motsomi-api-docs-container/docker-compose.yml up -d --build --remove-orphans

echo "-----> ✨ Done <-----"
echo "-----> To continue configuring the project, go to this directory: 📁 ./motsomi-api-docs-container/README.md  <-----"