#!/bin/bash

app_product_name='JJJkkk'
app_version='1'
app_version_string='1.0.0'
app_bundle_id='gh.trazyn.jjjkkk'

ipa_path="ipas/"
ipa_name="${app_product_name}_${app_version_string}_${app_version}"

fastlane ios enterprise bundle_identifier:$app_bundle_id output_name:$ipa_name
