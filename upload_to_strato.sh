#! bash

SSH_ADDRESS="nskvprofectus.nl@ssh.strato.de"

branch=$(git symbolic-ref --short HEAD)

echo "building the site files"
npm run build

echo "scp'ing into strato server, if required you need to fill in the master password"
scp -r "_site" "$SSH_ADDRESS:."

