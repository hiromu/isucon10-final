#!/bin/sh
DIR='/home/isucon/webapp/conf'

ln -sf $DIR/sysctl.conf /etc/sysctl.conf
ln -sf $DIR/envoy/config.yaml /etc/envoy/config.yaml
ln -sf $DIR/systemd/xsuportal-api-golang.service /etc/systemd/system/xsuportal-api-golang.service
ln -sf $DIR/systemd/xsuportal-api-nodejs.service /etc/systemd/system/xsuportal-api-nodejs.service
ln -sf $DIR/systemd/xsuportal-api-ruby.service /etc/systemd/system/xsuportal-api-ruby.service
ln -sf $DIR/systemd/xsuportal-api-rust.service /etc/systemd/system/xsuportal-api-rust.service
ln -sf $DIR/systemd/xsuportal-web-golang.service /etc/systemd/system/xsuportal-web-golang.service
ln -sf $DIR/systemd/xsuportal-web-nodejs.service /etc/systemd/system/xsuportal-web-nodejs.service
ln -sf $DIR/systemd/xsuportal-web-ruby.service /etc/systemd/system/xsuportal-web-ruby.service
ln -sf $DIR/systemd/xsuportal-web-rust.service /etc/systemd/system/xsuportal-web-rust.service
ln -sf $DIR/mysql/mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf
ln -sf $DIR/env /home/isucon/env
