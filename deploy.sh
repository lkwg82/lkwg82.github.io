#!/bin/bash

set -e

npm install
grunt

rsync  --archive -e ssh --delete -vr www www2.wirt.lgohlke.de:/var/www
