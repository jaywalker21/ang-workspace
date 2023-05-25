#!/bin/bash

npm list -g | grep purgecss || npm install -g purgecss --no-shrinkwrap


BUILD_FOLDER_NAME="dist"
APP_FOLDER_NAME="pv-app-demo"

cd "$(pwd)/$BUILD_FOLDER_NAME/$APP_FOLDER_NAME"



STYLES_FILE_NAME=$(find . -type f -name "styles.*.css")

mkdir -p tempcss

purgecss -css $STYLES_FILE_NAME --content ./index.html ./*.js --output ./tempcss

printf '\nSize before purging: %s\n' "$(du -sh $STYLES_FILE_NAME)"
printf '\nSize after purging: %s\n\n' "$(du -sh tempcss/$STYLES_FILE_NAME)"

mv tempcss/$STYLES_FILE_NAME .

rm -r tempcss

echo "Purging is Done"