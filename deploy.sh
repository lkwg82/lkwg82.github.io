#!/bin/bash

set -e

./run.sh docker  npm install
./update-version-info.sh
./run.sh docker  grunt

pushd www

git add *
git commit -m "deployed at $(date)"
git push origin HEAD:master

popd

git push