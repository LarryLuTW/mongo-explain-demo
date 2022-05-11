#!/usr/bin/env sh
set -o xtrace

docker run --rm -d -v "${PWD}/data:/data/db" --name mongo mongo:5 mongod
