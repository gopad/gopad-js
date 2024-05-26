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

if hash docker 2>/dev/null; then
    COMMAND="docker"
elif hash podman 2>/dev/null; then
    COMMAND="postman"
else
    echo "missing container runtime"
    exit 1
fi

echo "> deleteing apis and models"
rm -rf api model

echo "> regenerate apis and models"
"${COMMAND}" run --rm \
    -v "${ROOT}:/generate:Z" \
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
  echo "> install requirements"
  npm install --ci

  echo "> fix code formatting"
  npm run format
popd >/dev/null
