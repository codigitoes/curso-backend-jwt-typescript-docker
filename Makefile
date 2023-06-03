start:
	bash docker/bin/start.sh &
stop:
	bash docker/bin/stop.sh
restart:
	bash docker/bin/stop.sh ; bash docker/bin/start.sh &
apish:
	bash docker/bin/apish.sh
mongosh:
	bash docker/bin/mongosh.sh	