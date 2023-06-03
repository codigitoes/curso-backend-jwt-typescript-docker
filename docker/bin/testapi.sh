#!/bin/bash

docker exec -it `docker ps | grep curso-backend-jwt-typescript.api | head -n1 | awk '{print $1;}'` npm run wtest
