#!/bin/bash

set -e

rsync  --archive -e ssh --delete-excluded \
	--exclude .git \
	--exclude *.py \
	--exclude *.sh \
	-vr . www2.wirt.lgohlke.de:/var/www
