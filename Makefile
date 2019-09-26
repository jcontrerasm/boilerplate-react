## CONSTANTS ##

APP_WORKDIR	 = app/
PRODUCT			 = boilerplate
ENVIRONMENT	?= dev
SERVICE_NAME = spa-react
PROJECT_NAME = $(PRODUCT)-$(SERVICE_NAME)
IMAGE_NAME	 = $(PROJECT_NAME):$(ENVIRONMENT)

## TASKS ##

build-client: ## Construcción de imagen del cliente
	cp docker/client/Dockerfile .           && \
	docker build -t $(IMAGE_NAME) .         && \
	rm Dockerfile

start-client: ## Inicia contenedor del cliente
	docker run -v ${PWD}/app:/app --name $(PROJECT_NAME) -p 3000:3000 $(IMAGE_NAME)

down-client:
	docker rm -fv $(PROJECT_NAME)

install: ## Instalación de dependencias
	cd $(APP_WORKDIR)                       && \
	rm -rf node_modules                     && \
	rm -rf yarn.lock                        && \
	yarn install

client-start: ## Inicia la aplicación en local
	cd $(APP_WORKDIR)                       && \
	yarn client:start

client-build: ## Construye compilado de la aplicación
	cd $(APP_WORKDIR)                       && \
	rm -rf dist                             && \
	rm -rf stats.json                       && \
	yarn lint                               && \
	yarn test                               && \
	yarn client:build
