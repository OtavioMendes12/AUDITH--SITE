Projeto
Audith - Projeto para surdos e mudos

Curso
Engenharia de software

Participantes
> Os membros do grupo são: 

Arthur Jansen
Eduardo Augusto Brito
Isabelle Cristine 
Otavio Julio
Rodrigo Diniz


Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
- [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
- [Problema](#problema)
- [Objetivos](#objetivos)
- [Justificativa](#justificativa)
- [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
- [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
- [Histórias de Usuários](#histórias-de-usuários)
- [Requisitos](#requisitos)
 - [Requisitos Funcionais](#requisitos-funcionais)
 - [Requisitos não Funcionais](#requisitos-não-funcionais)
 - [Restrições](#restrições)
 - [Projeto de Interface](#projeto-de-interface)
 - [User Flow](#user-flow)
 - [Wireframes](#wireframes)
 - [Metodologia](#metodologia)
 - [Divisão de Papéis](#divisão-de-papéis)
 - [Ferramentas](#ferramentas)
 - [Controle de Versão](#controle-de-versão)
 - [Projeto da Solução](#projeto-da-solução)
 - [Tecnologias Utilizadas](#tecnologias-utilizadas)
 - [Arquitetura da solução](#arquitetura-da-solução)
 - [Avaliação da Aplicação](#avaliação-da-aplicação)
 - [Plano de Testes](#plano-de-testes)
 - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
 - [Registros de Testes](#registros-de-testes)
 - [Referências](#referências)


Introdução do Problema
Nosso problema teve seu início focado com a dificuldade dos mudos e dos surdos, mas quando começamos a levantar os requisitos e estar lá na linha de frente conversando com os principais afetados, descobrimos que as pessoas que convivem e estão com esse público tem a maior dificuldade 
	Com isso nossa forma de ajudar esse público nessa dor foi tentar entender suas maiores dificuldade, uma dessas dificuldades que foram encontradas foi na parte do diálogo, com isso percebemos que nem todo mundo tem acesso fácil e rápido a algum curso de libras, podendo assim dificultar a aprendizagem dessa língua tornando uma grande dor para nosso público, também achamos uma grande dor em encontrar essas pessoas que possam estar disponibilizando uma parte do seu tempo para ajudar o próximo ou passar um pouco do seu conhecimento.
Também há uma grande dificuldade em encontrar ONGs na sua localização, criando assim um certo desconforto, já que muitas pessoas não possuem muito tempo para ficar procurando fontes de dados para encontrar a melhor ONG ou as ONGs que possui na sua cidade.   

Objetivos do trabalho		
Um dos nossos objetivos foi tentar ajudar ao máximo nosso público alvo que seria as pessoas que convivem com surdos ou mudos, por que são elas as pessoas que mais necessitam dessa ajuda elas possuem a maior dor que seria o diálogo.
Após descobrir realmente o que seria a real necessidade/dor do usuário, desenvolvemos um sistema web aberto para todos que desejam participar, esse sistema tem como principal objetivo o diálogo, com esse objetivo foi desenvolvido uma uma área de tradução em libras podendo traduzir qualquer palavra ou frase que desejar, após escolher a frase que deseja traduzir aparecerá um avatar 3D para auxiliar você nessa tradução, podendo aprender como dialogar com a pessoa também podendo tirar sua dúvida se esse gesto está correto ou incorreto.
Nosso segundo objetivo foi tentar ajudar aquelas pessoas que buscam algumas aulas de libras, para isso foi criado uma área no nosso sistema que auxiliam as pessoas a arrumar alguém para disponibilizar um tempo para te auxiliar no seu aprendizado, assim tornando mais fácil o jeito de se encontrar alguém.
Também foi criado uma área para encontrar as ONGs que possuem na sua cidade, contendo um meio de contato, nome, e localização tornando mais fácil ser encontrada ajudando as pessoas que não possuem muito tempo para disponibilizar para uma pesquisa mais cansativa.

Importância e motivação para desenvolver esta aplicação
	Nossa principal motivação foi querer ajudar essas pessoas a conseguir se comunicar com seu cliente também podendo ser com aquelas pessoas que você ama e tem dificuldade de dialogar, também tem a importância de querer disponibilizar ajuda para todas pessoas sem exceção.
	Também vimos a escassez de sistemas que facilitam a vida dessas pessoas, podendo também não ser uma dificuldade e sim falta de tempo de para obter essas pesquisar, com isso ficamos motivados em desenvolver algo para essas pessoas.

Público-Alvo
1- Empresas e estabelecimentos: O site possibilita a ajuda e na comunicação com deficientes auditivos nas empresas, assim oferecendo uma inclusão á todos.
2- Funcionários e trabalhadores: O site tem como função ajudar eles a se comunicarem facilmente no dia-a-dia com esses deficientes.
 3- Usuários que possuem dificuldade em se comunicar: O site também tem como objetivo ajudar aqueles que desejam aprender libras para ter uma convivência melhor com todos ao seu redor. 
 
Especificações do Projeto

Miro
Git & GitHub
VSCode
HTML, CSS e JavaScript
Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Recepcionista de hotel  | Mostrar por imagem traduzido para libras o que digito  | Para que eu possa alugar os quartos e dar informações com velocidade |
| Vendedor de loja      | Aprender libras  | Para que eu possa vender meus produtos para eles |
| Estagiário na clínica médica       | Achar ongs  | Conseguir ajudar pessoas com deficiências auditivas a achar rapidamente ongs especializadas. |


Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre ongs | BAIXA |
|RF-002| Permitir que o usuário cadastre sua conta | ALTA | 
|RF-003| Consiga traduzir textos   | MÉDIA |




Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições na tela de tradução em no máximo 12s |  BAIXA |
|RNF-003| Deve levar cerca de 1s para abrir as telas do software |  BAIXA |
|RNF-004| Deve ser capaz bloquear senhas erradas colocadas no login 12s |  BAIXA | 


Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Deve funcionar em mobile ou web  |
|04| Não pode ser lento ou muito pesado para dispositivos fracos   |

# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).
## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......


## Wireframes

Wireframe:https://www.canva.com/design/DAFFl4lf8Bg/xSX_7uy7Jf1yn0taV9iRQQ/view?utm_content=DAFFl4lf8Bg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink


Os Wireframes foram elaborados tendo em vista a necessidade de se desenvolver uma interface objetiva e intuitiva a fim de atender às necessidades de nossas personas. Para tanto, utilizamos padrões e símbolos já conhecidos popularmente na Web como forma de facilitar o entendimento do usuário. Buscamos também elaborá-los de tal forma que a interface pudesse ser construída de forma simples a partir de HTML, CSS e JavaScript.









# Metodologia

. Ao longo do processo de desenvolvimento do site foi utilizado o método de Design Thinking para definição das principais ideias iniciais, delimitação do escopo e os levantamentos de requisitos.

Durante o processo de execução e andamento, foi utilizado o método ágil SCRUM para todas as fases de desenvolvimento.

 O andamento do site foi utilizado ferramentas internas do GitHub.


## Divisão de Papéis



| Membro |Descrição do artefato |
|--------|-----------------------|
| Arthur jansen | Templates, tela de introdução |
| Eduardo brito | Tela de login, api de traduzir |
| Isabelle cristine | Tela de cadastro de aulas |
| Otavio mendes| Tela de user e sobre|
| Rodrigo diniz |Tela de show de aulas e cadastro de empresas |



## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVOA2G8TE=/| 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti1-7946100-audith| 
|Pesquisa  | Google forms| https://docs.google.com/forms/d/e/1FAIpQLSenycsSBtt9E1XK2xYCv-rQK-gLzFyc_SwYC0ncRFqHmOMsUA/viewform | 


## Controle de Versão

A ferramenta de controle de versão adotada no desenvolvimento do site  foi o Git, sendo que o Github foi utilizado para hospedagem do repositório upstream.
O projeto segue a seguinte convenção para o nome de branchs:
master: versão estável já testada do software
unstable: versão já testada do software, porém instável
testing: versão em testes do software
dev: versão de desenvolvimento do software
Em relação aos commits, o projeto adota a seguinte convenção para etiquetas:
docs: atualização de documentação
style: atualizações que não afetam a funcionalidade da aplicação
refactor: refatoração de alguma funcionalidade do código
perf: melhoria de performance
test: criação de testes
reverts: reverção de um commit anterior

Tecnologias Utilizadas

Foi usadas as seguintes tecnologias , html, css e js para a parte do sistema web 
Para versionamento foi usado o github, também para obter um desenvolvimento mais rápido e objetivo foi usado a metodologia scrum, também utilizado o kanban e como editor de texto foi usado o visual studio code pois ele é um editor gratuito e muito bom. 



Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......



# Avaliação da Aplicação

> CENÁRIOS UTILIZADOS NOS TESTE:
  >Cadastro
  >Login
  >Links na página principal
  >Formulário Aula de Libras
  >Formulário ONGs
  >Tradutor Libras
  >Links para outras páginas
.
## Plano de Testes

PLANO DE TESTES DE USABILIDADE:

Público envolvido nos testes:
Familiares dos criadores do projeto;
Amigos dos criadores do projeto;
#	Objetivos a serem validados	Tarefas a serem desempenhadas
1	Cadastro	  Se cadastrar no site
2	Login	  Fazer login no site
3	Links na página principal	  Clicar nos links na página inicial
4	Formulário Aula de Libras	   Preencher o formulário na página “Cadastro aulas”

#	Objetivos a serem validados	Tarefas a serem desempenhadas
5	Formulário ONGs	     Preencher o formulário na página “Cadastro ONGs”
6	Tradutor Libras	  Digitar palavras no tradutor de libras	
7	Opções de cliques na página	  Clicar em todos as opções de cliques no site
8	Cliques na página	  Clicar nas abas para navegar no site
9	Login	Tentar logar sem ter se cadastrado
10	Links na página “sobre”	Testar os nomes na página “sobre”

PLANO DE TESTES DE SOFTWARE: 8 FUNCIONAIS E 2 NÃO FUNCIONAIS
Cenários de teste e passos a serem realizados para avaliar a entrega. 

#	Cenário	Pré-Condições	Ações	Resultados Esperados
1	Acesso página	Teste Funcional	Clicar “cadastro aulas”	Após acessar a aba “cadastro aulas”, ira para outra pagina falando sobre se cadastrar nas aulas de libras 
2	Acesso página	Teste Funcional	Clicar em Cadastro ONGs	Após acessar a aba “Cadastro ONGs”, ira para outra pagina falando sobre se cadastrar e fazer parte da equipe AUDITH
3	Acesso página	Teste Funcional	Cadastrar na página inicial	Aparecer “Usuário salvo com sucesso” e retornar a tela de login
4	Acesso página	Teste Funcional	Clicar em Traduzir, clicar no botão de sinais, e utilizar o tradutor de sinais	Irá aparecer um personagem, quando digitado alguma coisa, ele irá traduzir o que foi escrito e representará em Libras

#	Cenário	Pré-Condições	Ações	Resultados Esperados
5	Acesso página	Teste Funcional	Acessar a aba “sobre”	Após acessar a aba “sobre”, ira para outra pagina falando sobre o projeto 
6	Acesso página	Teste Funcional	Clica em qualquer aba do site e logo depois clicar em “início”	É esperado que o site retorne para a página inicial e principal do site	
7	Acesso página	Teste Funcional	Ir em “Cadastro ONGs”, preencher o formulário e clicar em “Limpar Form”	É esperado que tudo que foi digitado no formulário será apagado
8	Acesso página	Teste Funcional	Clicar em ícones de link na página “Inicio”	É esperado que abra um link em nova guia
1.1	Segurança	Teste não funcional	Tentar logar sem ter se cadastrado	É esperado que apareça uma mensagem de “Usuário e senha não registrados”
1.2	Segurança	Teste não funcional	Escrever a senha sem aparecer as letras digitadas	É esperado que o site não mostra a senha e substituindo os caracteres digitados por um “*”(Asterisco)
				
## Registros de Testes
REGISTRO DE TESTES DE SOFTWARE:  RELATÓRIO
TESTE 1:
AÇÃO: Clicar “Cadastro aulas”
RESULTADO ESPERADO:  Após acessar a aba “cadastro aulas”, ira para outra pagina falando sobre se cadastrar nas aulas de libras
RESULTADO: PÁGINA MOSTRANDO O CADASTRO DAS AULAS DE LIBRAS

TESTE 2:
AÇÃO:  Clicar em “Cadastro ONGs”
RESULTADO ESPERADO:  Após acessar a aba “Cadastro ONGs”, ira para outra página cadastro e fazer parte da equipe AUDITH
RESULTADO: PÁGINA MOSTRANDO O CADASTRO PARA FAZER PARTE DA EQUIPE AUDITH

TESTE 3:
AÇÃO:  Cadastrar na página inicial
RESULTADO ESPERADO:  Aparecer “Usuário salvo com sucesso” e retornar a tela de login
RESULTADO: “Usuário salvo com sucesso. Proceda com o login para

TESTE 4:
AÇÃO:  Clicar em Traduzir, clicar no botão de sinais, e utilizar o tradutor de sinais
RESULTADO ESPERADO: Irá aparecer um personagem, quando digitado alguma coisa, ele irá traduzir o que foi escrito e representará em Libras
RESULTADO: Apareceu personagem, quando digitado alguma coisa, ele irá traduzir o que foi escrito e representará em Libras

TESTE 5:
AÇÃO:  Acessar a aba “sobre”.
RESULTADO ESPERADO:  Após acessar a aba “sobre”, ira para outra pagina falando sobre o projeto.
RESULTADO: Tela “sobre” apresentando informações do projeto.

TESTE 6:
AÇÃO:  Clica em qualquer aba do site e logo depois clicar em “início”
RESULTADO ESPERADO:  É esperado que o site retorne para a página inicial e principal do site
RESULTADO: Tela de início

TESTE 7:
AÇÃO:  Ir em “Cadastro ONGs”, preencher o formulário e clicar em “Limpar Form”
RESULTADO ESPERADO: É esperado que tudo que foi digitado no formulário será apagado
RESULTADO: Tudo escrito é apagado

TESTE 8:
AÇÃO:  Clicar em ícones de link na página “Inicio”
RESULTADO ESPERADO: É esperado que abra um link em nova guia
RESULTADO: Link aberto em uma nova guia
Link Aberto: https://rodrigomagnorm.jusbrasil.com.br/artigos/1176514129/as-dificuldades-da-pessoa-surda-na-sociedade-brasileira#:~:text=A%20principal%20dificuldade%20dos%20surdos,acesso%20%C3%A0%20uma%20boa%20educa%C3%A7%C3%A3o

REGISTRO DE TESTES DE USABILIDADE: Problemas e erros

PROBLEMA/ERRO 1:
“Quando Clico no ponto de exclamação na parte de cima da página, ele não leva para nenhuma página”
Proposta: 
“Não sei bem como funciona, mas deve alterar alguma informação no código”

PROBLEMA/ERRO 2:
“Quando vou na parte de Cadastro ONGs, não consigo escrever na parte ID”
Proposta: 
“Deve ser algum erro no código do site e deve alterar as funções e colocar igual as outras partes de escrever no formulário”

REGISTRO DE TESTES: DIN MICA COM JAVASCRIPT  

#	Cenário	Pré-Condições	Ações	Resultados Esperados
1	Login	Teste Funcional JavaScript	Declarar conjunto inicial de contatos no login já cadastrados	Mensagem na tela “Logado com sucesso, Bem-vindo ao sistema ${username}”
2	Cadastro	Teste Funcional JavaScript	Alterar contato	Mensagem na tela” Contato alterado com sucesso”
3	Tradutor para Libras	Teste Funcional
JavaScript	Ir na aba” Traduzir”, clicar no botão de sinais.	Aparecer um software liberado pelo governo mostrando um personagem traduzindo tudo que o usuário escrever no campo de texto.





# Referências

......  COLOQUE AQUI O SEU TEXTO ......

https://tecnoblog.net/
https://www.handtalk.me/br/aplicativo/
https://culturasurda.net/
https://olhardigital.com.br/2021/02/15/tira-duvidas/icom-promove-inclusao-atraves-de-traducao-simultanea-em-libras/

 BRADDOCK, David; PARISH, Susan. An institutional history of disability. In: ALBRECHT, Gary; SEELMAN, Katherine; BURY, Michael (Eds.). Handbook of disability studies. California: Sage Publications, 2001. p. 11-68.

