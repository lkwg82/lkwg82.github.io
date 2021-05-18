#!/usr/bin/env bash

# see https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/
set -Eeu
set -x

function runTests {
    function _assertEqual {
        local actual=$1
        local expected=$2

        if [[ ${actual} -eq ${expected} ]]; then
            echo " ... ok"
        else
            echo " but got ${actual}"
            exit 1
        fi
    }

    function _assertExists {
        local actual=$1
        local expected=$2

        if [[ ${actual} -eq ${expected} ]]; then
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

    function _size_range {
        local path=$1
        local expectedLower=$2
        local expectedUpper=$3

        echo -n "  checking size '${path}' expect in range [${expectedLower},${expectedUpper}] bytes"
        local actual=$(stat -c%s ${path})

        if [[ ${actual} -ge ${expectedLower} && ${actual} -le ${expectedUpper} ]]; then
            echo " ... ok"
        else
            echo " but got ${actual}"
            exit 1
        fi
    }

    _number_of_files www/download 15
    _number_of_files www/img/basic_social 1198
    _number_of_files www/img 1210
    _number_of_files www/img 13 1
    _number_of_files www 1235
    _number_of_files www 12 1

    _size_range www/index.html 29900 31000
    _size www/favicon.ico 318
}

# allows $1 to unset
set +u

case "$1" in
    "clean")
        rm -rf node_modules www
        git submodule update
        pushd www
        git checkout master
        git pull
        popd
    ;;
    "compile")
        $0 init || echo "with warnings"
        echo "result $?"
        $0 docker npm run build
        rm -rf www/*
        cp -Rv dist/* www
    ;;
    "deploy")
        $0 clean
        $0 compile
        $0 update-version-info
        $0 docker npm build

        pushd www

        git add *
        git commit -m "deployed at $(date)"
        git push origin HEAD:master

        popd

        git push
    ;;
    "docker")
        docker build -t homepage docker
        # remove first argument from $@
        # https://stackoverflow.com/questions/2701400/remove-first-element-from-in-bash
        shift
        docker run -v "${PWD}":/src -ti --user $(id -u):$(id -g) -ti homepage $@
    ;;
    "full-test")
        $0 clean
        $0 init
        $0 compile
        runTests
    ;;
    "serve")
        function www {
           sleep 1
           x-www-browser http://localhost:1234/www/index.html
        }

        docker build -t homepage docker
        www &
        docker run -v "${PWD}":/src -ti --user $(id -u):$(id -g) -p 1234:1234 homepage npm run start
    ;;
    "init")
        $0 docker npm install
    ;;
    "test")
       echo "running tests"
       runTests
    ;;
    "update-version-info")
        file=index.html

        version=$(git log  -n1 --format=format:"%ci %H")
        message="updated version info"

        if [[ "$(git log  -n1 --format=format:"%s")" != "$message" ]] ;then

            sed -e 's#<span class="version">.*</span>#<span class="version">last changed '"$version"'</span>#' -i ${file}
            git commit --no-verify -m 'updated version info' ${file}
        else
            echo "nothing changed"
        fi
    ;;
    *)
        cat << EndOfMessage
$0 <command> [args..]

    clean
    compile
    deploy
    docker
    full-test
    grunt_serve
    init
    test
    update-version-info
EndOfMessage
    ;;
esac
