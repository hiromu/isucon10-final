#!/bin/bash
set -ex

DATE=`date "+%Y%m%d_%H%M%S"`
if [ -f /var/log/apache2/access_log ]; then
    sudo mv /var/log/apache2/access_log /var/log/apache2/access_log.$DATE
fi
if [ -f /var/log/nginx/access.log ]; then
    sudo mv /var/log/nginx/access.log /var/log/nginx/access.log.$DATE
fi
if [ -f /var/log/envoy/access.log ]; then
    sudo mv /var/log/envoy/access.log /var/log/envoy/access.log.$DATE
fi
if [ -f /var/log/mysql/slow.log ]; then
    sudo mv /var/log/mysql/slow.log /var/log/mysql/mysqld-slow.log.$DATE
fi

sudo systemctl restart envoy
sudo systemctl restart mysql
sudo systemctl restart xsuportal-web-golang
sudo systemctl restart xsuportal-api-golang

echo "Ready to run the benchmark on $(hostname)" | notify_slack


