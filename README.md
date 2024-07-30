### to run in docker
### the below command spins up a selenium grid as configured in the docker-compose yml file
docker-compose up

### once the grid and nodes are created, use the below script to run the scripts. It runs based on the browsers mentioned in the docker.wdio.conf.ts file
npm install
npm run wdioDockerCompose

### use the below command to turn down the docker containers once the test is completed
docker-compose down

### to run the tests locally, run the below command
npm install
npm run wdio

### to run in any specific browser locally; refer the scripts defined in package.json
npm run chrome
npm run edge