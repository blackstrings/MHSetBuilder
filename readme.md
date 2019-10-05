# Start Project

## requires installed global packages
- install node
- npm i -g typescript
- npm i -g browserify
- npm i -g ts-node

# Note
- if running using ts-node, limit the data to only 5 sets to not run out of memory
- if running in browser, it can handle more memory

## to build
- npm run build
    - convert typescript into javascript
- npm run build-dev
    - will browserify but not uglify
- npm run build-prod
    - will browserify but will uglify for prod

## multiple ways to run

### run with just ts-node command
- ts-node src/index.ts

## run with web browser
- open index.html afer command lne "npm build-dev"
