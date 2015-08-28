#!/bin/bash

set -e

npm install
grunt

rsync  --archive -e ssh --delete-during -vr www homepage:/var/www