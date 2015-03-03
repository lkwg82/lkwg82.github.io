#!/bin/bash

set -e

rsync  --archive -e ssh --delete -vr www www2.wirt.lgohlke.de:/var/www
