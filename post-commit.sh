#!/bin/bash

set -e
set +x

baseDir=$(git rev-parse --show-toplevel)
file=$baseDir/index.html

version =$(git log  -n1 --format=format:"%H %ci")

sed -e 's#<span class="version">.*</span>#<span class="version">'"$version"'</span>#' -i $file
git --no-verify commit -m 'updated version info' $file
