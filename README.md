# Design e Programação de Interfaces para Web

[![N|Solid](http://www.fgf.edu.br/wp-content/themes/fgf-28-05-2013_RESPONSIVO/images/fgf-faculdade-integrada-da-grande-fortaleza.png)](http://www.fgf.edu.br/)

Tecnologias utilizadas no projeto para a disciplina do curso de Sistemas para Internet.

![](http://wakeupandcode.com/wp-content/uploads/2013/02/html5_css_javascript.png)

  - Equipe do projeto:
  
| Nome | Função |
| ------ | ------ |
| Cleilson Pereira| Gerente de Projeto |
| Walliton Pires | Programador Front-End |
| Eder Sousa | Web Designer |

[Organograma de funções para o projeto](http://bit.ly/cacoo-diagrams)

<iframe src="https://cacoo.com/diagrams/nDtka48IGx3C1BSB/view?w=400&h=300&si=BE755" width="402" height="330" frameborder="0" scrolling="no"></iframe>

# Tema do Projeto

  -  Desenvolvimento de site de contar histórias infantis
  - Com efeito parallax para animar as figuras e transição da história


Requisitos iniciais:
  - A empresa fictícia “Era uma vez...” deverá apresentar em seu logotipo um símbolo com o seguinte formato: junto a um ícone que englobe um menino e uma menina lendo um livro.
  - O logotipo deve ter cores nos tons de amarelo, azul e branco que serão utilizadas em todos os produtos da empresa (produtos, site, sistema, documentos e slides de apresentação.
  - Apresentar transição da história por meio do scroll do mouse, usando o efeito scroll parallax

# Direitos Autorais

No Brasil, os direitos sobre uma obra duram a até 70 anos depois da morte do autor, mas em personagens que são controlados por empresas americanas a contagem é feita a partir de sua criação, sendo assim, alguns personagens de desenhos animados já caíram em domínio público e podem ser utilizados normalmente.

É o caso do Popeye, por exemplo, por ser um dos primeiros desenhos famosos do século 20 os quadrinhos e animações antigas do desenho já entraram em domínio público.

Conheça outros personagens que já entraram em domínio público:

- Aladin

- Merlin – O mago supremo

- Frankstein – O Gueirreiro Desmorto

- Ali Baba (em os 40 ladrões)

- Alice (no País das Maravilhas antigo)

- Claude (O Corcunda de Notre Dame)

- Cinderela

- Peter Pan

- Jane (Tarzan)

- Pinocchio

- Sherlock Holmes

Esses são apenas alguns dos personagens que você pode utilizar sem preocupação.
Verifficado no seguinte artigo [Direitos autorais: Quais personagens eu posso usar em meus produtos](https://blog.olist.com/direitos-autorais-o-que-eu-posso-e-nao-posso-usar-em-meus-produtos/)

# Fases do Projeto
- Diagrama de Gantt contruido no site [Smartsheet](https://app.smartsheet.com/b/publish?EQBCT=21b34074de584a158c1ffd1034b86595)

![](https://i.imgur.com/nGQgm84.png)

- Estrutura de desenvolvimento e distribuição de competências no grafico abaixo:
![Imgur](https://i.imgur.com/uYtuv3O.png)
- 

# Logo Design
![](https://i.imgur.com/r53AViK.png)

---
![](https://i.imgur.com/xBDLGWP.png)


Ferramentas utilizadas para modelagem do prototipo da logo:

![](https://www.pabloarias.eu/images/blog/Tools/gimp-inkscape.png)

Imagens inseridas no [Behance](https://www.behance.net/cleilsonpereira) 

* As cores determinadas pelo cliente foram verificadas para utilização da aplicação web atraves de uma paleta de cores especifica, se valendo da ferramenta [Adobe Color CC](http://bit.ly/adobe-color) , tema escolhido Childs-Play-color-theme: amarelo, vemelho, azul e branco, dente as cores somente a cor vermelha não estava nos requisitos iniciais.

![]()

# Wireframes

Ferramentas utilizadas [Cacoo](https://cacoo.com) e [Figma](https://www.figma.com), modelos abaixo :

[![N|Solid](https://i.imgur.com/H4XbljX.png)](https://cacoo.com/diagrams/2SU0Q5Rqsggu4Asv)


---


[![N|Solid](https://i.imgur.com/OGaX1rs.jpg)](https://www.figma.com/file/BPst5Hy8FmuUxqQSErvZEbVs/Untitled)

# Mockups
Utilizado o [Smarthmockup](https://smartmockups.com/) - ferramenta gratuita para teste na elaboração dos mockups.

![Imgur](https://i.imgur.com/bZ2L6Cz.jpg)
![Imgur](https://i.imgur.com/nho0C9p.jpg)


# GitHub:Pages no Registro.br #

Este é um pequeno e simples tutorial para a utilização de domínios personalizados  registrados no **registro.br** com **github:pages** para seu projeto ou página pessoal.


## O que é o GitHub:Pages ##

GitHub Pages é um sistema de hospedagem grátis e de fácil uso para algum projeto ou página pessoal com um repositório no GitHub.

É possível criar páginas personalizadas para seus projetos ou utilizar temas oferecidos pelo próprio GitHub. Você pode criar sites estáticos com apenas a força de seus conhecimentos em **HTML** e **CSS** ou até blogs com conteúdos dinâmicos utilizando o **Jekyll**. 

Não vou abordar aqui como criar passo a passo cada tipo de site mas você pode encontrar como [nessa página](https://help.github.com/categories/20/articles).

## Criando o site para o seu projeto ##

Para criar um site para o seu projeto, faça um `clone` dele para sua máquina:   
`$ git clone https://github.com/voce/seu_projeto.git`

Após isso, crie um *branch* orfão com o nome de **gh-pages** e remova todos os arquivos do seu projeto nesse *branch*, utilizando os seguintes comandos:

`$ git checkout --orphan gh-pages`  
`$ git rm -rf .` 

Construa o site do seu projeto nesse *branch*. Um comentário útil é que este *branch* só aparecerá no comando `git branch` após o seu primeiro `commit`.

Dê um `push` desse novo *branch* para o repositório do projeto:   
`$ git push origin gh-pages`

Caso você queira saber como criar seu próprio site ou um site utilizando *Jekyll*, confira a documentação fornecida pelo GitHub.

## Configurando um domínio próprio para o seu projeto no GitHub##

Caso você não queira um domínio personalizado para o site do seu projeto, já é possível acessá-lo pelo link: `https://voce.github.com/site_do_projeto`.

No nosso caso vamos utilizar um domínio próprio para o projeto, registrado no **registro.br**.

Para isso crie um arquivo chamado `CNAME` nesse mesmo branch e coloque dentro dele o nome do domínio personalizado que você desejar. Faça o `commit` e dê outro `push` no repositório:
`$ echo "seuprojeto.com.br" > CNAME`

Ok. Pela parte do GitHub já está tudo pronto. Agora falta apenas as configurações de DNS no **registro.br**.

# No registro.br #

Faça o login no site do [registro.br](http://www.registro.br) e clique no domínio registrado para seu projeto.

1. Marque a opção **Utilizar os servidores do Registro.br**
2. Clique em **Salvar & Editar DNS**
3. Clique em **Modo Avançado**
4. Agora clique em **+Record** para *setar* o DNS do seu projeto no github.

#### Edição de Zona ####

O Github agora disponibiliza dois endereços para seus servidores DNS. É preciso cadastrar os dois para o mesmo domínio.
1. Deixe o campo de **subdomínios** vazio.  
2. No campo **Tipo** selecione **A**.  
3. No campo **Dados** coloque o seguinte endereço: **192.30.252.153**  
4. Clique em **+Record** para abrir um novo cadastro.

Repita a operação cadastrando o segundo ip **192.30.252.154**.

Agora precisamos colocar o subdomínio `www` para funcionar também.

1. No campo subdomínio coloque **www**.    
2. No campo **Tipo** escolha **CNAME**  
3. No campo **Dados** coloque o endereço utilizado no arquivo `CNAME` de seu projeto: **seuprojeto.com.br**.  
4. Clique em **Salvar**.

**Pronto!**

## Observações ##

**O tempo para que as alterações de DNS sejam visíveis para toda a internet é de até 24 horas, segundo o próprio registro.br**

**As alterações feitas no branch gh-pages do GitHub podem demorar até 10 minutos para que tenham efeito, segundo o próprio GitHub.**


## Atenção ##
Acesse a [página de ajuda do GitHubPages](https://help.github.com/categories/20/articles) para mais informações sobre a criação de sites diferenciados para seu projeto, com templates, páginas de erro, redirecionamento, entre outras coisas.








  
