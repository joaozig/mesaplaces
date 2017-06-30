# `Mesa Places` — Projeto Teste

Projeto desenvolvido em AngularJS para teste de Full-Stack dev na Mesa Inc.

## Demo
Para efeitos de demonstração, a aplicação está no Heroku e pode ser acessada pelo link [https://mesaplaces.herokuapp.com/][app-url].

### API
A aplicação utiliza o projeto `Mesa Places API` desenvolvido em Rails como API. Você pode saber mais informações sobre a API [clicando aqui][mesaplacesapi]

## Passos para rodar a aplicação

Para rodar a aplicação você precisa clonar o repositório `mesaplaces` e instalar as dependências:

### Pré-requisitos

Você precisa do git para clonar o repositório do `mesaplaces`. Você pode baixar o git [clicando aqui][git].

Você precisa ter instalado também o Node.js e o npm, pois a aplicação utiliza essas ferramentas para inicializar e rodar o projeto. Você pode baixá-los [clicando aqui][node].

### Clonando o `mesaplaces`

Clone o repositório `mesaplaces` usando git:

```
git clone https://github.com/joaozig/mesaplaces.git
cd mesaplaces
```

### Instalando as dependências

Existem dois tipos de dependências no projeto: Ferramentas e o código do Angular.

* `mesaplaces` baixa as ferramentas que precisa via `npm`, o [Node package manager][npm].
* `mesaplaces` baixa o Angular, Angular UI Router e ngGeolocation code via `bower`, um [client-side package manager][bower].

A aplicação está pré-configurada para que o `npm` automaticamente rode o `bower`, então basta executar o seguinte comando:

```
npm install
```

Por trás dos panos isso também chama o `bower install`. Depois disso, você deverá perceber que irão existir dois novos diretórios no projeto.

* `node_modules` - contêm os pacotes npm para as ferramentas que são necessárias
* `app/bower_components` - contêm os arquivos do Angular, Angular UI Router e ngGeolocation

*Note que o diretório `bower_components` normalmente é instalado no diretório raiz do projeto, mas `mesaplaces` altera essa localização para dentro do diretório `app` através do arquivo `.bowerrc` para que seja mais fácil servir esses arquivos em um web server.*

### Rodando a aplicação

A maneira mais simples de startar o servidor é:

```
npm start
```

agora abra o navegador e acesse [`localhost:8000`][local-app-url].


## Estrutura de diretórios

```
app/                    --> código-fonte da aplicação
  app.css               --> css padrão
  pagina1/                --> representa um componente/pagina do app, com seu template html e lógica javascript
    pagina1.html            --> o template da página
    pagina1.js              --> declaração do módulo, configuração da rota e controller dessa página
  pagina2/                --> representa um componente/pagina do app, com seu template html e lógica javascript
    pagina2.html            --> o template da página
    pagina2.js              --> declaração do módulo, configuração da rota e controller dessa página
  app.js                --> módulo principal
  index.html            --> Single-page App Layout (Arquivo principal)
  application.html      --> Partial Layout (Layout da aplicação com menu e conteúdo; não é usado pelo Login, Signup e Resetpassword)
```

a estrutura acima é um exemplo e demonstra o padrão de organização seguido no projeto.

[app-url]: https://mesaplaces.herokuapp.com/
[mesaplacesapi]: https://github.com/joaozig/mesaplaces
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[local-app-url]: http://localhost:8000
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
