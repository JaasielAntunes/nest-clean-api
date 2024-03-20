<h1 align="center">
  Esta é uma aplicação back-end desenvolvida durante o módulo DDD no Node.js e NestJS da formação Node.js da Rocketseat.
</h1>

<p align="center">
  <a href="LICENSE"><img  src="https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge" alt="License"></a>
</p>

---

## 📁 Sobre o projeto

A aplicação desenvolvida consiste em uma API para fórum de perguntas e respostas na qual foi aplicada boas práticas de clean code, injeção de dependência, clean crchitecture, domain-driven design (DDD), docker,
pirâmide de testes. Foi de grande importância o desenvolvimento desta aplicação, pois pude colocar em prática todos os conceitos aprendidos no módulo estudado. A aplicação possui várias funcionalidades e tem
como principal objetivo simplificar a forma de alunos sanarem dúvidas com instrutores e resolver erros que venham a ocorrer durante os estudos.

---

## Requisitos

- Node.js versão 20 ou superior
- Docker
- CloudFlare R2
- AWS S3

---

## 💻 Tecnologias utilizadas

- NestJS
- NestJS JWT
- Passport JWT
- Prisma
- PostgreSQL
- Zod
- Docker
- Typescript
- IOredis
- Rxjs
- Bcryptjs
- Dotenv
- Fakerjs
- Vitest

---

## 💡 Utilização
1. Clone o projeto:

```
$ git clone https://github.com/JaasielAntunes/nestjs-forum-api.git
```

2. Acesse a pasta do projeto:

```
$ cd nestjs-forum-api
```

3. Instale as dependências:

```
$ npm install
```

4. Docker container:

```
$ docker compose up -d
```

5. Prisma migration:
   
```
$ npm run migrate:run
```

6. Inicie o servidor:

```
$ npm run start:dev
```

## 💻 Rotas HTTP - Aplicação acessivel na porta http://localhost:3333/

### POST Authorization - Bearer Token `/sessions`

Autenticação de usuário

#### Corpo da requisição

```json
{
    "email": "johndoe@example.com",
    "password": "1234567"
}
```

### POST `/accounts`

Cadastrar usuário

#### Corpo da requisição

```json
{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "1234567"
}
```

### POST `/answers/:answerId/comments`

Comentar na resposta

#### Corpo da requisição

```json
{
    "authorId": "",
    "answerId": "",
    "content": ""
}
```

### POST `/questions/:questionId/comments`

Comentar na pergunta

#### Corpo da requisição

```json
{
    "authorId": "",
    "questionId": "",
    "content": ""
}
```

### POST `/questions`

Criar pergunta

#### Corpo da requisição

```json
{
    "authorId": "",
    "title": "",
    "attachmentsIds": "",
    "content": ""
}
```

### GET `/answers/:answerId/comments`

Buscar respostas nos comentários

### GET `/questions/:questionId/answers`

Buscar respostas de perguntas

### GET `/questions`

Buscar perguntas recentes

### GET `/questions/:questionId/comments`

Buscar comentários de perguntas

### DELETE `/answers/comments/:id`

Deletar comentário da resposta

### DELETE `/answers/comments/:id`

Deletar comentário da resposta

### DELETE `/questions/comments/:id`

Deletar comentário da pergunta

### DELETE `/answers/:id`

Deletar resposta

### DELETE `/questions/:id`

Deletar pergunta

### PUT `/answers/:id`

Editar resposta

### PUT `/questions/:id`

Editar pergunta

### PATCH `/answers/:answerId/choose-as-best`

Melhor resposta da pergunta

### PATCH `/notifications/:notificationId/read`

Ler notificação

---

## ✅ Sugestão
- Utilize o Postman ou Insomnia para testar as requisições.
---

<h4 align="center">
  Feito com ❤️ por Jaasiel Antunes - <a href="mailto:contato.jaasiel@gmail.com.com">Entre em contato!</a>
</h4>

<p align="center">
  <a href="https://www.linkedin.com/in/jaasiel-antunes-1517b41bb/">
    <img alt="Jaasiel Antunes" src="https://img.shields.io/badge/LinkedIn-Jaasiel-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
</p>
