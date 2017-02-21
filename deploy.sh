#!/bin/bash

set -e

./docker.sh npm install
./docker.sh grunt

rsync  --archive -e ssh --delete-during -vr www homepage:/var/www