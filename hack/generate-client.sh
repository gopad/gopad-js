#!/usr/bin/env bash
set -eo pipefail

if [ -L "${0}" ]
then
    ROOT=$(realpath -e "$(dirname "$(readlink -e "${0}")")/..")
else
    ROOT=$(realpath -e "$(dirname "${0}")/..")
fi

SPEC_VERSION="1.0.0-alpha1"
SPEC_DOWNLOAD=${SPEC:-https://dl.gopad.eu/openapi/${SPEC_VERSION}.yml}

pushd "${ROOT}" >/dev/null
    echo "> install requirements"
    npm install --ci
popd >/dev/null

echo "> deleteing apis and models"
rm -rf api model

if hash openapi-generator-cli 2>/dev/null; then
    export TS_POST_PROCESS_FILE="./node_modules/.bin/prettier -w"

    openapi-generator-cli \
        generate \
        -c openapi.yml \
        -g typescript-axios \
        --git-repo-id gopad-js \
        --git-user-id gopad \
        --http-user-agent "gopad-js/${SPEC_VERSION}" \
        -i "${SPEC_DOWNLOAD}" \
        -o . \
        -t hack/openapi/templates \
        --strict-spec true
else
    if hash docker 2>/dev/null; then
        COMMAND="docker"
    elif hash podman 2>/dev/null; then
        COMMAND="postman"
    else
        echo "missing container runtime"
        exit 1
    fi

    "${COMMAND}" run --rm \
        -v "${ROOT}:/generate:Z" \
        -w /generate \
        docker.io/openapitools/openapi-generator-cli:v7.6.0 \
        generate \
        -c /generate/openapi.yml \
        -g typescript-axios \
        --git-repo-id gopad-js \
        --git-user-id gopad \
        --http-user-agent "gopad-js/${SPEC_VERSION}" \
        -i "${SPEC_DOWNLOAD}" \
        -o /generate \
        -t /generate/hack/openapi/templates \
        --strict-spec true

    pushd "${ROOT}" >/dev/null
        echo "> fix code formatting"
        npm run format
    popd >/dev/null
fi
