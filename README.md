## [ConectaTerapia](#ConectaTerapia)

![ConectaTerapia](https://github.com/Karina-Carvalho/ConectaTerapia/assets/109826751/3a62c6fe-fc7b-44ba-8dd4-bbdcc2b696d1 )

<p>


⚡ *API desenvolvida como Projeto Final todas em Tech do Bootcamp da  [{REPROGRAMA}](https://reprograma.com.br/) turma Back End ON22*

<br>

<!--ts-->
**SUMÁRIO**<BR>
[⚙️ OBJETIVO DO PROJETO](#OBJETIVO_DO_PROJETO)<BR>
[🚨 INTRODUÇÃO](#INTRODUÇÃO)<BR>
[📁 ARQUITETURA MVC](#ARQUITETURA_MVC)<BR>
[📝 DOCUMENTAÇÃO DISPONÍVEL](#DOCUMENTAÇÃO_DISPONÍVEL)<BR>
[📌 ROTAS](#ROTAS)<BR>
[🔗 FUNCIONALIDADES](#FUNCIONALIDADES)<BR>
[📚 APRENDIZAGEM](#APRENDIZAGEM)<BR>
[💻 INSTALAÇÃO](#INSTALAÇÃO)<BR>
[👩🏾‍💻 TECNOLOGIAS E DEPENDÊNCIAS](#TECNOLOGIAS_E_DEPENDÊNCIAS)<BR>
[💡 IMPLEMENTAÇÕES FUTURAS](#IMPLEMENTAÇÕES_FUTURAS)<BR>
[🛠️ CONTRIBUIÇÕES PARA PROJETO](#CONTRIBUIÇÕES_PARA_PROJETO)<BR>
[🙋🏾‍♀️ AUTORA](#AUTORA_)<BR>
[💓AGRADECIMENTOS](*AGRADECIMENTOS)<BR>

<BR>


⚙️ **OBJETIVO DO PROJETO**

 <i>O objetivo da [**ConectaTerapia**](#ConectaTerapia) é conectar pessoas ao atendimento terapêutico de forma online e gratuita. Muitas vezes até mesmo um valor social cobrado no atendimento é financeiramente inviavél para algumas pessoas.

<br>


🚨 **INTRODUÇÃO**
 >Segunda OMS (Organização Mundial de Saúde) anualmente 700 mil pessoas cometem suicídio o que representa uma a cada 100 mortes registradas. 
O suicídio é influenciado por fatores psicológicos, sociais e culturais. <br>
 Nas últimas décadas, observa-se o crescimento ininterrupto dos casos de suicídio no Brasil.
 
 <br>
 
 
 📁 **ARQUITETURA MVC**
<br>

``````

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


``````
  <br>


📝 **DOCUMENTAÇÃO DISPONÍVEL**

![Swagger](https://github.com/Karina-Carvalho/ConectaTerapia/assets/109826751/b69bcf0a-4376-408f-81e0-2bd29f5ff16b)

<br>

📌 **ROTAS**

| Verbo |        EndPoint         | Descrição da Rota        | Status |
| ----- | ----------------------  | ------------------------ |--------|
|  GET  | '/terapia'              | Lista todas as clínicas disponíveis que oferecem terapia  gratuita       |  200   |  
|  POST | ' /terapia/cadastrar'   | Cadastra clínicas credenciados para atendimento        |  200   |
|  PUT  | '/terapia/editar/:id '  | Edita por ID um propriedade   |  200   |
| PACTH | '/terapia/atualizar/:id'| Atualizar por ID |  200   |
| DELETE| '/terapia/deletar/:id ' | Exclui por ID clínicas descredenciados   |  200   |

<br>


🔗 **FUNCIONALIDADES**

 [x] Cadastra clínicas  que fazem atendimento online gratuito

 [x] Lista todas as clínicas cadastradas

 [x] Edita as informações de cadastro das clínicas por ID

 [x] Atualiza as informações de cadastro das clínicas por ID

 [x] Remove cadastro das clínicas por ID do banco de dados

<br>

📚 **APRENDIZAGEM**

Desenvolver uma API que realize um CRUD: Create, Read, Update e Delete, esteja conectada ao banco de dados MongoDB Atlas.

<br>


💻 **INSTALAÇÃO** 

#### --> Clonar o repositório
</sub> ✅$ git clone https://github.com/Karina-Carvalho/ConectaTerapia

#### --> Entrar na pasta do repositório
</sub> ✅$ cd conectaterapia

#### --> Instalar as dependências
</sub> ✅$ npm install

#### --> Executar o servidor
</sub> ✅$ npm start

<br>

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

<br>


💡 **IMPLEMENTAÇÕES FUTURAS** 

[x] Testes

[x] Autenticação

[x] View

[x] Alimentar banco de dados com mais clínicas gratuitas

[x] Cadastrar psiquiatras que realiazam atendimento de forma gratuitas

<br>


🛠️  **CONTRIBUIÇÕES PARA O PROJETO**
1. Faça o fork do projeto;
2. Crie uma branh para realizar suas alterações:  git checkout -b feature/nome-da-nova-branch 
3. Instale as dependências necessárias à execução da API através do comando **npm install**;
4. Para executar a API, utilize o comando **npm start** no seu terminal;
5. Após suas contribuições no projeto, realize o commit -m "sua mensagem";
6. Abra um pull request;

<BR>


🙋🏾‍♀️ **AUTORA** <BR>
Feito com muito amor por KARINA CARVALHO<BR>

💜 *Esteja sempre Conecta a sua essência!*💜

<BR>


💓**AGRADECIMENTOS**<BR>
Agradeço a equipe técnica e pedagógica da [{REPROGRAMA}](https://reprograma.com.br/) as mulheres incrivéis da turma on22, em especial colega de turma Nazaré que trilhamos um caminho juntas💓










 
   






