# Yumemi Coding Test

URL: 
Storybook: 
## 🔑 Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## 🛠️ Build and Setup
```sh
  # build
    docker compose build
    docker compose up
  # docker コンテナに入る (nodeを起動した状態で別のターミナルから)
    docker compose exec node sh
  # envファイル作成
    cp .env.example .env.development
  # exit docker container
    exit
  # vscodeでエラーが出る場合は、下記コマンドを打ってください
    docker cp yumemi-coding-test:/home/app/node_modules/ ./app/
```
以下の URL にブラウザからアクセスできるか確認してください。
- http://localhost:3000

envファイルを下記のようにすることで、本番用のAPIを叩きに行きます。
```
NEXT_PUBLIC_RESAS_API_KEY=発行されたAPI KEY
NEXT_PUBLIC_API_BASE_URL=https://opendata.resas-portal.go.jp/api/v1
```

## 💫 Start Node
```sh
  # 起動
    docker compose up
  # 落とす
    docker compose down
```

## 📕 Start Storybook
```sh
  # 起動
  docker compose exec node yarn storybook
```
以下の URL にブラウザからアクセスできるか確認してください。
- http://localhost:6006

## 🧸 Other Commands
全て、yumemi-coding-testを起動した状態で打ってください。  
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