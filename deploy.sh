#!/bin/bash

set -e

rsync  --archive -e ssh --delete-excluded \
	--exclude .git \
	--exclude *.py \
	--exclude *.sh \
	--exclude .idea \
	--exclude _site \
	--exclude *.js \
	--exclude *.json \
	--exclude node_modules \
	-vr . www2.wirt.lgohlke.de:/var/www/www
