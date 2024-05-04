.PHONY: install update clean build help

install: ## Install dependencies
	bun install

update: ## Update dependencies
	bun update

clean: ## Cleam up the project
	rm -rf node_modules dist

build: ## Build project
	rm -rf dist
	bun run esbuild src/main.js --bundle > build.js
	mkdir dist
	mv -f build.js dist/.

dev: build ## Run project in development mode
	bun run dev

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-10s\033[0m %s\n", $$1, $$2}'
