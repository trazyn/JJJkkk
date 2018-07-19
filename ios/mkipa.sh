#!/bin/bash

APP_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

APP_PRODUCT_NAME='JJJkkk'
APP_BUNDLE_ID='gh.trazyn.jjjkkk'
IPA_NAME='${APP_PRODUCT_NAME}_${APP_VERSION}'

fastlane ios enterprise bundle_identifier:$APP_BUNDLE_ID output_name:$IPA_NAME
