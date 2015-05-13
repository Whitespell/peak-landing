#!/bin/sh
echo "Starting deployment";
ssh website-internal.whitespell.com "sudo mkdir -p /var/www/peakapp.me && sudo chmod -R 777 /var/www/peakapp.me";
scp -r www/* website-internal.whitespell.com:/var/www/peakapp.me;
ssh website-internal.whitespell.com "sudo chmod -R 755 /var/www/peakapp.me";
echo "Deployment Successful";


