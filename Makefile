.PHONY: deploy deploy-remote deploy-host

deploy: deploy-remote deploy-host

deploy-remote:
	@cd remote && yarn deploy &

deploy-host:
	@cd host && yarn deploy &

wait:
	@wait