#!/bin/bash

set -e

./docker.sh npm install
./update-version-info.sh
./docker.sh grunt

pushd www

git add *
git commit -m "deployed at $(date)"
git push origin HEAD:master

popd

git push