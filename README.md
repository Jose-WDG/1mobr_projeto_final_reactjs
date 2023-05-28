# Projeto Final em ReactJS - Site de Contratação de Freelancers

Este é um projeto final desenvolvido em ReactJS, utilizando o Vite para a criação do projeto. O objetivo é construir um site de contratação de freelancers, onde os usuários podem visualizar uma lista de freelancers disponíveis, com suas informações principais e últimos trabalhos.

## Tecnologias utilizadas

- ReactJS
- Vite
- Styled-components

## Instalação

1. Clone este repositório
2. Navegue até o diretório do projeto
3. Instale as dependências: `npm install` ou `yarn install`

## Execução

Para executar o projeto, utilize o seguinte comando: `npm run dev` ou `yarn dev`
Isso iniciará o servidor de desenvolvimento e você poderá acessar o site em `http://localhost:3000`.

## Funcionalidades

- Lista de freelancers disponíveis:

  - Nome
  - Foto
  - Principais tecnologias
  - Últimos trabalhos

- Página de detalhes de um freelancer:
  - Bio (descrição individual de cada freelancer)
  - Opções de contato

## Arquitetura

A arquitetura do projeto segue a abordagem MVC (Model-View-Controller), com a utilização do Styled-components para estilização dos componentes.

A estrutura de diretórios do projeto é a seguinte:

src/
├── components/
│ ├── common/
│ │ ├── Button.js
│ │ └── Input.js
│ ├── freelancer/
│ │ ├── FreelancerCard.js
│ │ └── FreelancerDetails.js
│ └── ...
│
├── controllers/
│ ├── FreelancerController.js
│ └── ...
│
├── models/
│ ├── FreelancerModel.js
│ └── ...
│
├── pages/
│ ├── HomePage.js
│ ├── FreelancerListPage.js
│ └── ...
│
├── styles/
│ ├── GlobalStyle.js
│ └── ...
│
└── utils/
├── api.js

## Personalidade e UI/UX

...

## Responsividade

O projeto foi desenvolvido com foco na responsividade, garantindo que o site seja ajustado corretamente em diferentes tamanhos de tela e dispositivos.
