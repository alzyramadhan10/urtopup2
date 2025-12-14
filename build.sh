#!/bin/bash  

docker login registry.gitlab.com
docker build -t registry.gitlab.com/ruangmenu/urtopup:ui --platform linux/amd64 .
docker push registry.gitlab.com/ruangmenu/urtopup:ui
