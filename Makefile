## ------------------------------------- CONSTANTS -------------------------------------

APP_WORKDIR	 = app/
PRODUCT			 = boilerplate
ENVIRONMENT	?= dev
SERVICE_NAME = spa-react
PROJECT_NAME = $(PRODUCT)-$(SERVICE_NAME)
IMAGE_NAME	 = $(PROJECT_NAME):$(ENVIRONMENT)

## ------------------------------------- TASK ------------------------------------------

## Construcción de imagen
build:
	cp docker/client/Dockerfile .           && \
	docker build -t $(IMAGE_NAME) .         && \
	rm Dockerfile

## Inicia contenedor
start:
	docker run -d -p 8000:8000 --env-file .env --name $(PROJECT_NAME) $(IMAGE_NAME)   && \
	docker logs --follow $(PROJECT_NAME)

## Detiene y elimina el contenedor
stop:
	docker rm -fv $(PROJECT_NAME)

## ---------------------------------- LOCAL TASK ---------------------------------------

## Instalación de dependencias
install:
	cd $(APP_WORKDIR)                       && \
	rm -rf node_modules                     && \
	rm -rf yarn.lock                        && \
	yarn install

## Inicia la aplicación en local
client-start:
	cd $(APP_WORKDIR)                       && \
	yarn client:start

## Construye compilado de la aplicación
client-build:
	cd $(APP_WORKDIR)                       && \
	rm -rf dist                             && \
	rm -rf stats.json                       && \
	yarn lint                               && \
	yarn test                               && \
	yarn client:build
