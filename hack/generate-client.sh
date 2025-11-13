#!/usr/bin/env bash
set -eo pipefail

if [ -L "${0}" ]
then
    ROOT=$(realpath -e "$(dirname "$(readlink -e "${0}")")/..")
else
    ROOT=$(realpath -e "$(dirname "${0}")/..")
fi

SPEC_VERSION="1.0.0-alpha1"
SPEC_DOWNLOAD=${SPEC:-https://dl.gopad.eu/openapi/${SPEC_VERSION}.yaml}

curl -sSLo "${ROOT}/hack/wrapped-client.sh" \
    https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/bin/utils/openapi-generator-cli.sh && \
    chmod +x "${ROOT}/hack/wrapped-client.sh"

pushd "${ROOT}" >/dev/null
    echo "> deleting apis and models"
    rm -rf api model openapitools.json

    export TS_POST_PROCESS_FILE="npx prettier -w"

    OPENAPI_GENERATOR_VERSION=7.17.0 "${ROOT}/hack/wrapped-client.sh" \
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
