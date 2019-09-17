## CONSTANTS ##

APP_WORKDIR	= app/

## TASKS ##

install: ## Instalación de dependencias
	cd $(APP_WORKDIR)                 && \
	rm -rf node_modules               && \
	rm -rf yarn.lock                  && \
	yarn install

client-start: ## Inicia la aplicación en local
	cd $(APP_WORKDIR)                 && \
	yarn client:start

client-build: ## Construye compilado de la aplicación
	cd $(APP_WORKDIR)                 && \
	rm -rf dist                       && \
	rm -rf stats.json                 && \
	yarn lint                         && \
	yarn test                         && \
	yarn client:build
