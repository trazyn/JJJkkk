#!/bin/bash

app_product_name='JJJkkk'
app_version=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
app_bundle_id='gh.trazyn.jjjkkk'
ipa_name="${app_product_name}_${app_version}"

fastlane ios enterprise bundle_identifier:$app_bundle_id output_name:$ipa_name
