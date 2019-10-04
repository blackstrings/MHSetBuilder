# Start Project

## requires installed global packages
- install node
- npm i -g typescript

## to build
- npm run build
    - convert typescript into javascript
- npm run build-dev
    - will browserify but not uglify
- npm run build-prod
    - will browserify but will uglify for prod

## multiple ways to run
- open index.html afer npm build-dev
- install ts-node and run ts-node src/index.ts
