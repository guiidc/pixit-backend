# Desafio Pixit Back-End

## Sobre o projeto
Este projeto é uma entrevista técnica para a empresa Pixit, onde há a intenção de testar os conhecimentos através de um CRUD básico.

O projeto está dividido em dois repositórios (BackEnd e FrontEnd).

O backend é uma API feita em NodeJS utilizando a arquitetura MSC seguindo o padrão Restful trabalhando com o banco de dados relacional MySQL, utilizando o sequelize como ORM.

O frontend é uma aplicação em ReactJS, onde são feitas as requisições para a API para que possa trabalhar com os dados.

<img src="./screenshots/login.jpg" width="350px">

## Tecnologias utilizadas
### Back-End
- NodeJs
- Express
- BcryptJs
- Validator 
- MySQL
- Sequelize
- JSON Web Token
- NoideMailer
- DotEnv
- Cors

### Front-End
- ReactJS
- React Router Dom
- Axios


### Instruções Back-End
1. Após clonar o repositório rode o comando `npm install` para instalar as dependências necessárias.
2. Crie uma arquivo .env na raiz do projeto para setar as variaveis de ambiente a seguir
+ DB_USER=usuário do seu banco de dados MySQL geralmente é "root"
+ DB_PASSWORD=senha do banco de dados do seu MySQL
+ DB_HOST=endereço do banco de dados do seu MySQL caso esteja rodando localmente basta atribuir o valor localhost
* JWT_SECRET=string secreta para gerar os tokens JEWT
* EMAIL_USER=usuário do e-mail que irá enviar o link de recuperação de senha para os usuários
* EMAIL_PASSWORD=senha do e-mail que irá enviar o link de recuperação de senha para os usuários
3. Após a instalação do sequelize rode os seguintes comandos para criar as tabelas e o DB necessário 
```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

4. Caso não exista nenhuma porta setada no arquivo .env a porta padrão para a aplicação rodar será na porta 3001, certifique-se de que a porta em questão não está sendo utilizada no momento por outra aplicação. Para iniciar o servidor basta digitar o comando `$ npm start` no terminal

### Instruções Front-End
1. Após clonar o repositório execute o comando `npm install` para instalar as dependências necessárias.
2. Verifique se o servidor Back-End está online e execute o comando `npm start` para iniciar a aplicação
3. Obs.: A aplicação front roda na porta 3000 e faz a requisção para o back-end que está na porta 3001. Ao executar verifique se alguma dessas portas não estão sendo usadadas por outros serviços.
