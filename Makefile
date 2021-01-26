.DEFAULT_GOAL := help
.PHONY: update

###################################################################################################
## SCRIPTS
###################################################################################################

define PRINT_HELP_PYSCRIPT
import re, sys

for line in sys.stdin:
	match = re.match(r'^([\w-]+):.*?## (.*)$$', line)
	if match:
		target, help = match.groups()
		line = '{: <20} {}'.format(target, help)
		line = re.sub(r'^({})'.format(target), '\033[96m\\1\033[m', line)
		print(line)
endef

###################################################################################################
## VARIABLES
###################################################################################################

export PYTHON=python3
export PRINT_HELP_PYSCRIPT
export TEST_ROOT=../javascript-ar-sdk
export TEST_DESTINATION=$(TEST_ROOT)/node_modules/@r2u/react-ar-components
export VERSION=$(shell jq -r ".version" package.json)

###################################################################################################
## GENERAL COMMANDS
###################################################################################################

help: ## show this message
	@$(PYTHON) -c "$$PRINT_HELP_PYSCRIPT" < $(MAKEFILE_LIST)


clean: ## clean the documentation sample project
	rm -R $(TEST_DESTINATION) || true
	mkdir -p $(TEST_DESTINATION)
	mkdir -p $(TEST_DESTINATION)/dist


build: ## build the SDK
	yarn build


local: ## allow testing of the SDK on the sample project
	cp ./package.json $(TEST_DESTINATION)
	cp -R ./dist $(TEST_DESTINATION)


deploy-rollup: ## deploy dist to github version branch
	git config user.email "bot@r2u.io"
	git config user.name "R2U Bot"
	git checkout -b $(VERSION)
	git add -f ./dist/
	git commit -m $(VERSION)
	git push origin $(VERSION)


deploy-build: ## deploy build folder to S3 and invalidate CloudFront
	aws s3 sync build/ s3://customizer.r2u.io --delete --acl public-read
	aws cloudfront create-invalidation --distribution-id=ERHV4ER9FUZKI --paths /\*


deploy: deploy-rollup deploy-build

full: clean build local 
