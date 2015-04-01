#!/bin/bash

set -e

npm install
#grunt

rsync  --archive -e ssh --delete-during -vr www www2.wirt.lgohlke.de:/var/www