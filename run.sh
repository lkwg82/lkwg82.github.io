#!/usr/bin/env bash

# see https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/
set -Eeu

case "${1:-}" in
    "update-version-info")
        file=index.html

        version=$(git log  -n1 --format=format:"%ci %H")
        message="updated version info"

        if [[ "$(git log  -n1 --format=format:"%s")" != "$message" ]] ;then
            sed -e 's#<span class="version">.*</span>#<span class="version">last changed '"$version"'</span>#' ${file} >${file}.tmp
            mv ${file}.tmp ${file}
            git commit --no-verify -m 'updated version info' ${file}
        else
            echo "nothing changed"
        fi
    ;;
    *)
        cat << EndOfMessage
$0 <command> [args..]

    update-version-info
EndOfMessage
    ;;
esac
