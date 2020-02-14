DOCKER_URL ?= localhost

default: build

.PHONY: build
build:
	docker build -t "$(DOCKER_URL)/lingua-card-api:latest" .