<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Using Mongodb](https://kinsta.com/knowledgebase/nestjs/) Simple CRUD with MongoDB

## Step

### 1.  Setting up Nest.js

```bash
npm i -g @nestjs/cli
```

create new project

```bash
nest new nestjs-api-tutorial
cd nestjs-api-tutorial
npm run start:dev
```

### 2. Setting up MongoDB
- Sebelum melakukan setup, jalankan command berikut utk membuat API
```bash
nest generate module todos
nest generate controller todos
nest generate service todos
```
- Selanjutnya install mongoose library
```bash
npm install --save @nestjs/mongoose mongoose
```

### 3. Buat Skema
  define skema data di file `todos.schema.ts`

### 4. Define interfaces nya
  define pada file `interfaces/todo.interface.ts`

### 5. Buat DTO (Data Transfer Object)
  - define how the data will be sent atau passed from object to object over the network
  define pada file `dto/create-todo.ts`

### 6. Setting Up Model/Service
  - service file bertanggung jawab untuk berinteraksi dan berkomunikasi dg database MongoDB. Digunakan untuk creating, retrieving, updating, dan deleting records dari skema `todos`

### 7. Setting Up Controllers
ada beberapa anotasi nya digunakan. contohnya, untuk handle routing system yang berkaitan dg setiap route :
- `@Put()` : PUT
- `@Get()` : GET
- `@Delete()` : DELETE
- `@Post()` : POST




