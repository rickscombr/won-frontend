<img src="/public/img/logo-b.svg" alt="Logo do Projeto" width="250" />

# Ricks - Bolierplate

Este é um projeto de Boilerplate para desenvolvimento de aplicações com as seguintes tecnologias:

* [ReacJS](https://pt-br.reactjs.org/)
* [NextJS](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Styled Components](https://styled-components.com/)

Neste projeto estamos usando as seguintes ferramentas:

* [Git](https://git-scm.com/)
* [Jest](https://jestjs.io/)
* [Storybook](https://storybook.js.org/)
* [Babel](https://babeljs.io/)
* [Eslint](https://eslint.org/)
* [Husky](https://www.npmjs.com/package/husky)
* [Prettier](https://prettier.io/)
* [Plop](https://plopjs.com/)


## Pré-requisitos

* [Git](https://git-scm.com/)
* [Node](http://nodejs.org/)
* [Yarn](https://yarnpkg.com/)

## Respositório na núvem

* [GitHub](https://github.com/rickscombr/boilerplate.git)

## Criando projeto com base no Boilerplate - Instalação

```sh
$ yarn create next-app -e https://github.com/rickscombr/boilerplate

Será solicitado o nome do projeto, é só informá-lo <PROJETO>

$ cd <PROJETO>
$ yarn
```

## Executando Local (DEV)

```sh
$ yarn dev
```

## Deploy para produção

```sh
$ yarn build
$ yarn start
```

## Executando Testes (DEV)

```sh
$ yarn test
or
$ yarn test:watch
```

## Executando Storybook (DEV)

```sh
$ yarn storybook
```

## Criando um novo componente automatizado (PLOP)

Para agilizar a criação da estrutura de um novo componente no projeto, utilizado a ferramente PLOP, que gera os arquivos do componente em estrutura padão, já cria o arquivo de styles, stories e test.

```sh
$ yarn generate <NOME COMPONENTE>
```

Será criado na pasta /src/components os arquivos deste novo componente.