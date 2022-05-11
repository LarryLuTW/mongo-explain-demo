#!/usr/bin/env sh
set -o xtrace

docker exec -it mongo mongosh store
