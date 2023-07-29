## ConectaTerapia

![ConectaTerapia](https://github.com/Karina-Carvalho/ConectaTerapia/assets/109826751/3a62c6fe-fc7b-44ba-8dd4-bbdcc2b696d1)





⚡ *Projeto Final todas em Tech do Bootcamp da  [{reprograma}] turma Back End ON22*


⚙️ **DESCRIÇÃO DO PROJETO**

Desenvolver uma API que realize um CRUD: Create, Read, Update e Delete, esteja conectada ao banco de dados MongoDB Atlas e que trate sobre um tema de impacto social.


🚨 **INTRODUÇÃO**

 >Segunda OMS (Organização Mundial de Saúde) anualmente 700 mil pessoas cometem suicídio o que representa uma a cada 100 mortes registradas. 
 
  O suicídio é influenciado por fatores psicológicos, sociais e culturais.
 <i> ***O ConectaTerapia surgiu para conectar pessoas ao atendimento terapêutico online e gratuito.***


📁 **ARQUITETURA MVC**

 📁CONECTATERAPIA
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 terapiaController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 dbConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 terapiaModel.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 terapiaRoutes.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

  
📝 **DOCUMENTAÇÃO**

![Swagger](https://github.com/Karina-Carvalho/ConectaTerapia/assets/109826751/b69bcf0a-4376-408f-81e0-2bd29f5ff16b)



📌 **ROTAS**

| Verbo |        EndPoint         | Descrição da Rota        | Status |
| ----- | ----------------------  | ------------------------ |--------|
|  GET  | '/terapia'              | Listar          |  200   |  
|  POST | ' /terapia/cadastrar'   | Cadastras        |  200   |
|  PUT  | '/terapia/editar/:id '  | Editar por ID    |  200   |
| PACTH | '/terapia/atualizar/:id'| Atualizar por ID |  200   |
| DELETE| '/terapia/deletar/:id ' | Excluir por ID   |  200   |


🔗 **FUNCIONALIDADES**

 [x] Cadastra clínicas que fazem atendimento online gratuito 

 [x] Lista todas as clínicas cadastradas

 [x] Edita as informações de cadastro das clínicas por ID

 [x] Atualiza as informações de cadastro das clínicas por ID

 [x] Remove cadastro das clínicas por ID do banco de dados




💻 **INSTALAÇÃO** 

#### --> Clonar o repositório
</sub> $ git clone 

#### --> Entrar na pasta do repositório
</sub> $ cd conectaterapia

#### --> Instalar as dependências
</sub> $ npm install

#### --> Executar o servidor
</sub> $ npm start


👩🏾‍💻  **TECNOLOGIAS E DEPENDÊNCIAS**


FERRAMENTAS | DESCRIÇÃO                                                                  
------------|---------------------------------------------------------------------------------------------------
JavaScrip   | Linguagem de programação                                                                        
Node.js     | Ambiente de execução do javascript       
Express     | FrameworkNodeJS                                                                                
Mongoose    | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections
Nodemon     | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor   automaticamente                                                                                                 
NPM         | Gerenciador de pacotes
MongoDb     | Banco de dados não relacional orietado a documentos
Mongo Atlas | Interface gráfica para verificar se os dados foram persistidos
Postman     | Interface gráfica para realizar os testes
CORS        | É um pacote node.js para fornecer um middleware Connect/Express que pode ser usado para ativar o   CORS com várias opções
dotenv      | Dependência para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral
Swagger     | Gera a documentação
Render      | Hospeda a documentação



💡 **IMPLEMENTAÇÃO FUTURAS** 

[x] Testes

[x] Autenticação

[x] View




🛠️  **CONTRIBUIÇÕES NO PROJETO**
1. Faça o fork do projeto;
2. Crie uma branh para realizar suas alterações:  git checkout -b feature/nome-da-nova-branch 
3. Instale as dependências necessárias à execução da API através do comando npm install;
4. Para executar a API, utilize o comando npm start no seu terminal;
5. Após suas contribuições no projeto, realize o commit -m "sua mensagem";
6. Abra um pull request;


## 🙋🏾‍♀️ Autora
Feito com muito amor 💜 por Karina Carvalho
