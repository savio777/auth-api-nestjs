# auth-api-nestjs

[aula - 35:35/1:08:12](https://www.youtube.com/watch?v=K_3b6SlssMc)

### passos desenvolvimento projeto:

- criar projeto nestjs

```bash
npm i -g @nestjs/cli
nest new auth-api-nestjs
```

- Add prisma

```bash
npm i -D prisma
npx prisma generate
npx prisma init
npx prisma migrate dev --name <nome_migration>
```

- comandos cli utilizados

```bash
nest g module <nome_modulo>
nest g controller <nome_modulo>
nest g service <nome_modulo>
```

- passos para rodar aplicação

```bash
cp .env.example .env
npm i
npx prisma generate
npx prisma migrate dev
npm run start:dev
```
