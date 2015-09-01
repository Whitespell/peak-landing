DEPLOY_PATH="/var/www/html/staging.peakapp.me"

echo "Deploying to $DEPLOY_PATH..."

rsync -av --exclude '.git' --exclude 'node_modules' --exclude '.sass-cache' ./www/ root@37.128.149.176:$DEPLOY_PATH

