# Documentação do Projeto Vibex

O Vibex é uma aplicação que permite o gerenciamento de produtos e vendas. Ele possui as seguintes funcionalidades:

- CRUD de Produtos (Create/Read/Update/Delete)
- Adição de vários produtos ao carrinho
- Remoção/alteração de produtos do carrinho
- Exibição do somatório do valor de todos os produtos no carrinho na tela de vendas

> Versão do node: v16.16.0

# Dependências do Projeto

O projeto é dividido em duas partes: o frontend e o backend. Abaixo estão listadas as principais dependências de cada uma das partes.

# Frontend

> Frameworks e Bibliotecas:

`ReactJS`: Biblioteca Javascript para criação de interfaces de usuário.
`Material-UI`: conjunto de componentes React pré-construídos que seguem as diretrizes de design do Google Material Design.
`Redux`: Biblioteca de gerenciamento de estado.
`Redux Toolkit`: Conjunto de utilitários para simplificar a configuração e o uso do Redux.
`React Router`: Biblioteca para navegação em aplicativos React.
`react-router-rom`: pacote para gerenciamento de rotas em aplicações React
`RTK-Query`: pacote para gerenciamento de requisições assíncronas em aplicações Redux
`Styled Components`: Biblioteca para estilização de componentes React.
`Prettier`: Formatador de código.

# Backend

> Frameworks e Bibliotecas:

`Express`: framework de aplicativo web para Node.js
`Sequelize: ORM (Object-Relational Mapping)`: para banco de dados SQL
`Sequelize-Typescript`: extensão do Sequelize para suporte a TypeScript
`body-parser`: pacote para analisar dados do corpo das requisições HTTP
`cors`: pacote para habilitar o CORS (Cross-Origin Resource Sharing) em aplicações Express
`mysql2`: pacote para conexão com banco de dados MySQL

# Para executar este projeto, siga os seguintes passos:

- Clone este repositório para sua máquina.
- Abra o terminal na pasta raiz do projeto.
- Execute o comando `yarn` para instalar todas as dependências.
- Execute o comando `yarn start` para iniciar a aplicação.

- Considerações Finais
  Este projeto possui diversas funcionalidades importantes para o gerenciamento de produtos e vendas em uma loja virtual. A escolha das tecnologias foi realizada com o objetivo de garantir um desenvolvimento ágil, escalável e de fácil manutenção.
