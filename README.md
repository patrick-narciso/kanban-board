## 💻 Sobre o projeto

Kanban Board - é uma aplicação simples que consome uma api interna que persiste em memória e o usuário consegue ter um quadro kanban, movimentando seus cards e editando em markdown.

---

## ⚙️ Funcionalidades

- [x] Os usuários tem acesso à aplicação, onde podem:
  - [x] Visualizar as listas do board.
  - [x] Criar novos Cards na lista To Do.
  - [x] Excluir um Card de qualquer lista.
  - [x] Movimentar entre as listas disponíveis.
  - [x] Editar o título, assim como seu conteúdo podendo ser em markdown.

---


### Estrutura

Ao acessar alguma página da aplicação, o **router** identifica essa **página** e monta seus elementos para o usuário. 

Toda **página** é composta de um conjunto de **features** que permitirão a interação do usuário por meio dos seus layouts. Quando o usuário interage com algum **layout**, deve ser disparada uma action. 

**Actions** podem executar 2 tipos de tarefas: realizar alguma integração com backend e alterações de estado. 

Toda integração com backend deve ser realizada por um ********service********. Um service pode ser exclusivo de alguma feature, como também pode ser compartilhado entre varias.

```
src/
├── pages/
│   ├── kanban-board.tsx
│   └── ...
├── features/
│   ├── board/
│   │   ├── components
│   │   ├── hooks (quando houver)
│   │   ├── contexts
│   │   ├── adapters (conexão com backend utilizando service escolhido)
│   │   ├── layouts
│   │   └── index.ts
│   └── ...
├── entities/
│   ├── Card.ts
|   └── ...
├── components/
│   ├── component-name/
│   │   ├── component-name.tsx
│   │   ├── component-name.styles.ts
│   │   ├── component-name.types.ts
│   │   └── index.ts
│   └── ...
├── utils/
│   ├── parse-markdown.ts
│   └── ...
├── services/
│   ├── api.ts
│   └── ...
└── ...
```

<img width="1118" alt="image" src="https://github.com/patrick-narciso/kanban-board/assets/21373134/656c5d25-22b5-47d5-a033-0618df87d3d9">


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

#### 🎲 Rodando a aplicação

A aplicação possui regras do `EsLint` e `prettier`. A cada commit é checkado se não possui erros de lint. Isso tudo é feito utilizando Husky e as regras de conventional commits também estão configuradas.


```bash

# Clone este repositório
$ git clone git@github.com:patrick-narciso/kanban-board.git

# Acesse a pasta do projeto no terminal/cmd
$ cd kanban-board

# Acesse a pasta do backend
$ cd ./BACK

# Instale as dependências
$ npm run install

# execute em modo de desenvolvimento
$ npm run server

# Após isso, volte ao diretório do projeto front e instale as dependências e execute o servidor
$ npm run install
$ nom run dev

```

ou também pode executar com docker

`docker-compose -f docker-compose.yml up`

O front-end estará disponível na porta 5173 e o backend estará na porta 5000.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[TypeScript](https://www.typescriptlang.org/)**
- **[React](https://react.dev/)**
- **[Axios](https://github.com/axios/axios)**
- **[Styled Components](https://styled-components.com/)**
- **[Vite](https://vitejs.dev/)**
- **[Docker](https://www.docker.com/)**

## 🦸 Autor

[![Linkedin Badge](https://img.shields.io/badge/-Patrick-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/patricknarciso/)](https://www.linkedin.com/in/patricknarciso/)
[![Gmail Badge](https://img.shields.io/badge/-patrick.ncsilva@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:patrick.ncsilva@gmail.com)](mailto:tgmarinho@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
