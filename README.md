# Yumemi Coding Test
URL: https://yumemi-coding-test-daaiki.vercel.app/ <br>
Storybook: https://daaiki.github.io/yumemi-coding-test/storybook/

## ð Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## ð ï¸ Build and Setup
```sh
  # build
    docker compose build
    docker compose up
  # docker ã³ã³ããã«å¥ã (nodeãèµ·åããç¶æã§å¥ã®ã¿ã¼ããã«ãã)
    docker compose exec node sh
  # envãã¡ã¤ã«ä½æ
    cp .env.example .env.development
  # exit docker container
    exit
  # vscodeã§ã¨ã©ã¼ãåºãå ´åã¯ãä¸è¨ã³ãã³ããæã£ã¦ãã ãã
    docker cp yumemi-coding-test:/home/app/node_modules/ ./app/
```
ä»¥ä¸ã® URL ã«ãã©ã¦ã¶ããã¢ã¯ã»ã¹ã§ãããç¢ºèªãã¦ãã ããã
- http://localhost:3000

envãã¡ã¤ã«ãä¸è¨ã®ããã«ãããã¨ã§ãæ¬çªç¨ã®APIãå©ãã«è¡ãã¾ãã
```
NEXT_PUBLIC_RESAS_API_KEY=çºè¡ãããAPI KEY
NEXT_PUBLIC_API_BASE_URL=https://opendata.resas-portal.go.jp/api/v1
```

## ð« Start Node
```sh
  # èµ·å
    docker compose up
  # è½ã¨ã
    docker compose down
```

## ð Start Storybook
```sh
  # èµ·å
  docker compose exec node yarn storybook
```
ä»¥ä¸ã® URL ã«ãã©ã¦ã¶ããã¢ã¯ã»ã¹ã§ãããç¢ºèªãã¦ãã ããã
- http://localhost:6006

## ð§¸ Other Commands
å¨ã¦ãyumemi-coding-testãèµ·åããç¶æã§æã£ã¦ãã ããã  
```sh
  # enter in a docker container
    docker compose exec node sh
  # install packages
    docker compose exec node yarn install
    docker cp yumemi-coding-test:/home/app/node_modules/ ./app/
  # formatting
    docker compose exec node yarn format
  # test
    docker compose exec node yarn test
```
