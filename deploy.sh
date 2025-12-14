#!/bin/bash

# auth gitlab run once
# echo gitlab username ?
# read gitlab_username
# echo gitlab password/access token ?
# read gitlab_password
# ssh -i ~/.ssh/citarasa-biznet.pem elawliet@103.127.98.59 "
#     docker login registry.gitlab.com -u $gitlab_username -p $gitlab_password
# "

ssh -i ~/.ssh/citarasa-biznet.pem elawliet@103.127.98.59 "
    mkdir -p urtopup
"
scp -i ~/.ssh/citarasa-biznet.pem docker-compose.prod.yml elawliet@103.127.98.59:urtopup/docker-compose.yml
ssh -i ~/.ssh/citarasa-biznet.pem elawliet@103.127.98.59 "
    cd urtopup
    docker compose down
    docker compose pull
    docker compose up -d --remove-orphans
"
