#!/usr/bin/env bash

# see https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/
set -Eeuo pipefail
#set -x
arg=

function runTests {
    function _assertEqual {
        local actual=$1
        local expected=$2

        if [ ${actual} -eq ${expected} ]; then
            echo " ... ok"
        else
            echo " but got ${actual}"
            exit 1
        fi
    }

    function _assertExists {
        local actual=$1
        local expected=$2

        if [ ${actual} -eq ${expected} ]; then
            echo " ... ok"
        else
            echo " but got ${actual}"
            exit 1
        fi
    }

    function _number_of_files {
        local path=$1
        local expected=$2
        local maxDepth=${3:-100}

        echo -n "  checking path '${path}' expect ${expected} files (maxdepth ${maxDepth})"
        local actual=$(find ${path} -maxdepth ${maxDepth} | wc -l)

        _assertEqual ${actual} ${expected}
    }

    function _size {
        local path=$1
        local expected=$2

        echo -n "  checking size '${path}' expect ${expected} bytes"
        local actual=$(stat -c%s ${path})

        _assertEqual ${actual} ${expected}


    }

    _number_of_files www/download 15
    _number_of_files www/img/basic_social 1198
    _number_of_files www/img 1210
    _number_of_files www/img 13 1
    _number_of_files www 1232
    _number_of_files www 9 1

    _size www/index.html 29957
    _size www/favicon.ico 318
}

set +u
case "$1" in
    "clean")
        rm -rf node_modules www
    ;;
    "compile")
        $0 docker grunt
    ;;
    "d"|"docker")
        docker build -t homepage docker
        # remove first argument from $@
        # https://stackoverflow.com/questions/2701400/remove-first-element-from-in-bash
        shift
        docker run -v ${PWD}:/src --user $(id -u):$(id -g) -ti homepage $@
    ;;
    "full-test")
        $0 clean
        $0 init
        $0 compile
        runTests
    ;;
    "init")
        $0 docker npm --progress false install
    ;;
    "test")
       echo "running tests"
       runTests
    ;;
    *)
        echo $0 "clean|compile|docker|full-test|init|test"
    ;;
esac
