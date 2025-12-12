# auth-api-nestjs

[aula - 24:38/1:08:12](https://www.youtube.com/watch?v=K_3b6SlssMc)

### passos desenvolvimento projeto:

- criar projeto nestjs (+ comando para gerar sdk vscode para reconhecimento typescript)

```bash
npm i -g @nestjs/cli
nest new auth-api-nestjs
cd ./auth-api-nestjs
yarn dlx @yarnpkg/sdks vscode
```

- Add prisma

```bash
yarn add -D prisma
npx prisma init
```

- comandos cli utilizados

```bash
nest g module <nome_modulo>
nest g controller <nome_modulo>
nest g service <nome_modulo>
```
