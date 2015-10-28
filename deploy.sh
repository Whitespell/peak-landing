#!/bin/sh
DEPLOY_PATH="/var/www/upfit.co"

echo "Starting deployment";
ssh website-internal.whitespell.com "sudo mkdir -p $DEPLOY_PATH && sudo chmod -R 777 $DEPLOY_PATH";
rsync -av www/ website-internal.whitespell.com:$DEPLOY_PATH;
ssh website-internal.whitespell.com "sudo chmod -R 755 $DEPLOY_PATH";
echo "Deployment Successful";