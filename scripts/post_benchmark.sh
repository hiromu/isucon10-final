#!/bin/bash

sudo chmod 644 /var/log/mysql/slow.log

DATE=`date "+%Y%m%d_%H%M%S"`
# if [ -f /var/log/apache2/access_log ]; then
#   cat /var/log/apache2/access_log | kataribe > /tmp/kataribe.apache2.log.$DATE
# fi
if [ -f /var/log/nginx/access.log ]; then
  cat /var/log/nginx/access.log | kataribe > /tmp/kataribe.nginx.log.$DATE
fi
# if [ -f /var/log/envoy/access.log ]; then
#   cat /var/log/envoy/access.log | kataribe > /tmp/kataribe.envoy.log.$DATE
# fi
if [ -f /var/log/mysql/slow.log ]; then
  mysqldumpslow -s t /var/log/mysql/slow.log > /tmp/mysql-slow.time.log.$DATE
  mysqldumpslow -s c /var/log/mysql/slow.log > /tmp/mysql-slow.count.log.$DATE
fi

echo "Running the aggregation on $(hostname)" | notify_slack
for file in /tmp/*.log.$DATE; do
  cat $file | notify_slack -snippet
done
