build:
	docker build -t node_gitlab_actions_poc:latest .

run:
	docker run -p 3000:3000 -d node_gitlab_actions_poc	

run-verbose:
	docker run -p 3000:3000 node_gitlab_actions_poc		