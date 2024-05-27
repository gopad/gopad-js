#!/usr/bin/env bash
set -eo pipefail

if [ -L "${0}" ]
then
    ROOT=$(realpath -e "$(dirname "$(readlink -e "${0}")")/..")
else
    ROOT=$(realpath -e "$(dirname "${0}")/..")
fi

if ! hash openapi-generator-cli 2>/dev/null; then
    echo "missing openapi-generator-cli executable"
    exit 1
fi

SPEC_VERSION="1.0.0-alpha1"
SPEC_DOWNLOAD=${SPEC:-https://dl.gopad.eu/openapi/${SPEC_VERSION}.yml}

pushd "${ROOT}" >/dev/null
    echo "> deleting apis and models"
    rm -rf api model

    export TS_POST_PROCESS_FILE=" npx prettier -w"

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
popd >/dev/null
