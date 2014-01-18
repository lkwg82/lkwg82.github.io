#!/bin/bash

set -e

rsync  -e ssh --delete-excluded \
	--exclude .git \
	--exclude *.py \
	--exclude *.sh \
	-vr . www.wirt.lgohlke.de:/srv/htdocs3
