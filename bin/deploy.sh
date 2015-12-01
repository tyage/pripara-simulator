#!/bin/bash

# Exit on error
set -ev

if [ "$TRAVIS_BRANCH" != "master" ]; then
	exit 0
fi

# Convert clone to the full clone
git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
git fetch origin gh-pages
git fetch --unshallow || true

# Set identification
git config user.name "Travis CI"
git config user.email "namatyage@gmail.com"

# Discard any changes in build
git checkout -- .

# Checkout and merge
git checkout gh-pages
git merge -X theirs "$TRAVIS_COMMIT" --no-edit

# Update version - build is automatically done by npm
npm version patch

# Push it all
git push "https://${GH_TOKEN}@github.com/tyage/pripara-simulator.git" gh-pages:gh-pages --follow-tags > /dev/null 2>&1
