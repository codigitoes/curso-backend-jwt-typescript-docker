#!/bin/bash

docker exec -it `docker ps | grep mongodb | head -n1 | awk '{print $1;}'` bash
