#!/usr/bin/env bash

set -o pipefail

function www {
   sleep 1
   x-www-browser http://localhost:9000/index.html
}

docker build -t homepage docker
www &
docker run -v $(pwd):/src -ti -p 9000:9000 homepage grunt serve
