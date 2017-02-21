#!/usr/bin/env bash

set -o pipefail

docker build -t homepage docker
docker run -v $(pwd):/src --user $(id -u):$(id -g) -ti homepage $@
