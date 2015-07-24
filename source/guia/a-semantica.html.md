---
title: A Semântica
description: Semântica é uma das principais vantagens da plataforma web em relação às outras. Aprenda como desenvolver sites semânticos e assim criar aplicações competitivas.
---

## Sim, a semântica é importante!

Semântica é uma das principais vantagens da plataforma web em relação às outras. É através da semântica que terceiros, mecanismos de busca e ferramentas de leitura de telas podem fazer uso do conteúdo disponibilizado em páginas web.

Alguns desenvolvedores não dão importância para semântica porque o resultado final renderizado usando uma tag `<header>` ou `<div>` é o mesmo. Porém um bom trabalho nessa parte pode render bons resultados para a aplicação.

Ter um site escrito de forma semântica também é um passo importante para que seu site seja encontrado pelos principais buscadores, como Google e Bing.

Vamos aprender aqui os principais elementos do HTML. Usando uma marcação correta, teremos um site mais acessível e competitivo.

Ah, lembre-se: **sem CSS e JavaScript a web existe, sem HTML não.**

## Elementos básicos

Uma página é formada de elementos básicos necessários para seu funcionamento. Exemplo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Documento</title>
</head>
<body>
  <p>Olá, mundo!</p>
</body>
</html>
```

### DOCTYPE
O *Document Type Definition* (DTD ou Doctype) é quem informa ao navegador a versão do HTML que está sendo utilizada, ele vem antes de qualquer outro elemento do documento, até mesmo antes do `<html>`. Antes da especificação HTML 5 existiram várias notações para o `<doctype>`. Por exemplo:

```html
<!DOCTYPE html
          PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

Nesse tempo a notação era muito importante porque só assim os navegadores conseguiram resolver problemas de compatibilidade de diferentes versões do HTML.

Na quinta versão, o `<doctype>` ficou menor e melhor.

```html
<!DOCTYPE html>
```

#### O elemento `<html>`

Uma analogia constante em relação ao HTML é que ele é composto por uma série de elementos estruturados como uma árvore. Levando isso em conta, o elemento `<html>` é a raiz de nossa árvore. Todos os elementos estarão dentro dele.

O principal atributo desse elemento é o `lang`, que especifica a língua da página HTML.

```html
<html lang="pt-br">
```

Especificar um valor para o atributo `lang` é muito importante. É através deles que leitores de telas definem em qual idioma que irão ler o conteúdo para o usuário.

### O elemento `<head>`
O elemento `<head> ` não mudou nada desde sua primeira versão. Ele contém uma coleção de informações (metadados) sobre a página HTML. Dentro dele é que especificamos manifestos e arquivos que mudarão a forma com que a página será renderizada.

#### Metadados
O elemento `<meta>` tem a missão de representar dados que não são expressíveis com outros elementos, como `<link>` e `<title>`.

Existem inúmeros atributos disponíveis para `<meta>` , entre eles o `charset` é indispensável, pois é ele quem recebe a definição da codificação de caracteres *(character encoding)* utilizada pela página.

```html
<meta charset="utf-8" />
```

#### Elemento `<link>`
O elemento `<link>` (não confunda com o `<a>`!) pode ser usado para referenciar outro recurso.
Usando o atributo `rel`, temos *link relations*, que é uma maneira de explicar a referência que o mesmo contém. Por exemplo, se o atributo `rel` conter o valor `stylesheet`, significa que o *link* possui uma referência para uma folha de estilo.

```html
<link rel="stylesheet" type="text/css" href="style.css">
```

O atributo `type` indica, obviamente, o tipo de arquivo referenciado, e `href` referencia o caminho do *link*. No HTML 5 o atributo `type` é opcional.

#### Scripts
O elemento `<script>` funciona para referenciar e permitir escrita de códigos *JavaScript* no documento HTML. Ele pode aparecer dentro do `<head>` ou do `<body>`.

```html
<script type="text/javascript" src="/script.js"></script>
<script>
  // código javascript...
</script>
```

Uma regra básica para decidir onde carregar uma *tag script*: se influi na renderização do documento (como *shiv* do HTML 5), carregue no `<head>`, senão, carregue no `<body>`. Carregar scripts que influenciam na renderização do documento no `<head>` evita o <abbr title="Flash of unstyled content">FOUC</abbr>, que faz com que o conteúdo sem estilo apareça por um momento, antes do estilo final ser aplicado.

### O elemento `<body>`

O elemento `<body>` possui o conteúdo do documento HTML. Nele é que estão os elementos que são diretamente renderizados ao usuário.

```html
<body>
  <p>Hello, World!</p>
</body>
```

É sempre importante todo e qualquer conteúdo dentro do `<body>` sempre estar dentro de outra tag, ou seja, um conteúdo nunca deve estar diretamente escrito no `<body>`,

#### Principais elementos

##### `<a>`
Usamos a tag `<a>` para demarcar um *link*. Ela possui o atributo obrigatório `href`, que recebe o endereço que você deseja referenciar.

##### `<abbr>`
Representa uma abreviação. Uma boa prática é usar o atributo `title`, que receberá o significado da abreviação.

##### `<blockquote>`
Esse elemento pode ser usado representação uma citação. Se essa citação tiver um endereço na web, pode-se referenciar através da tag `<cite>`. Exemplo:

```html
<blockquote>
  <p>Nós amamos a web!</p>
  <footer>- <cite>Luiz Fernando Rodrigues</cite></footer>
</blockquote>
```

##### `<code>`
A tag `<code>` serve para representarmos alguma informação que pode ser interpretada por um computador. Se você usar o inspector de código, pode ver que cada vez que citamos alguma tag ou snippet, usamos esse elemento.

##### `<div>` e `<span>`
Tentamos representar a maioria dos elementos semânticamente, mas obviamente não é possível representar tudo. Para isso, temos duas tags estruturais: `<div>` e `<span>`. Semânticamente elas não representam nada. Mesmo assim, a tag `<div>` é um dos elementos que mais usamos no desenvolvimento de uma aplicação.

##### `<em>`, `<small>` e `<strong>`
Podemos expressar diferentes ênfases em um texto usando essas tags. Com a tag `<em>` indicamos um conteúdo acentuado. Com `<strong>` deixamos o texto mais "forte". Já com a tag `<small>` podemos diminuir a ênfase para um conteúdo não tão importante em um texto.

É importante lembrar que os navegadores adicionam estilos diferentes para essas tags.

##### `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` e `<h6>`
As tags *headings* são usadas para representar os títulos de uma página. O `<h1>` representa o maior valor, sendo `<h6>` o título de menor importância. Em um exemplo prático, o título de uma página é seria escrito com `<h1>` e um subtítulo com `<h2>`.

##### `<img>`
Para inserir imagem em um documento HTML, usamos a tag `<img>`. Porém, ela necessita de dois atributos: `src` e `alt`. O primeiro é quem recebe o endereço para a imagem, o segundo recebe uma frase que será apresentada caso a imagem não seja carregada. Um exemplo:

```html
<img src="/logo.jpg" alt="Logo da empresa">
```

##### `<ol>`, `<ul>`, `<li>`, `<dl>`, `<dt>`, `<dd>`
Possuímos três tipos de listas para trabalharmos. `<ol>` e `<ul>` possuem apenas uma diferença. A primeira representa uma lista ordenada, e a segunda não.

Para representar um item de uma lista, usamos a tag `<li>`.

Diferentemente das duas primeiras tags que mostramos, temos um tipo de lista para definir itens semânticamente. Podemos declarar respectivamente termo e definição. Por exemplo:

```html
<dl>
  <dt>Dog</dt>
  <dd>Palavra cachorro em inglês.</dd>

  <dt>Cat</dt>
  <dd>Palavra gato em inglês.</dd>
</dl>
```

##### `<p>`
A tag `<p>` representa um parágrafo qualquer dentro de uma página web. Sem dúvidas é a tag que mais usamos no desenvolvimento de um web site.

#### `<section>`
Uma tag `<section>` pode ser usada para agrupar conteúdos e assim representar algo na web. Em um exemplo prático, essa tag pode agrupar em um site de notícias, as próprias notícias. Exemplo:

```html
<section id="news-section">
  <div class="news">...</div>
  <div class="news">...</div>
</section>
```

#### `<nav>`
O `<nav>` é usado para representar a navegação principal de um documento. Ele pode agrupar links que irão referenciar páginas do mesmo site ou não.

#### `<article>`
A tag `<article>` pode representar um conteúdo independente em um documento. Por exemplo, uma notícia em um portal de informação, um post em um blog ou até mesmo um comentário de usuário.

#### `<aside>`
O `<aside>` representa um conteúdo relacionado ao conteúdo principal da página, mas que pode ser mostrado independentemente do mesmo.

####`<header>`
Como diz seu nome, a tag `<header>` representa o cabeçalho de um documento. Ele receberá os títulos e subtítulos da página.

#### `<footer>`
O `<footer>` receberá um grupo de elementos que representará, geralmente, informações sobre a autoria do conteúdo de um documento.

## Melhorando a semântica com microdata

Já vimos que na última versão do HTML tivemos um grande esforço para melhorar a representação de dados na web. Além das tags, também temos o *microdata*. Eles funcionam como atributos em nosso documento, onde podemos expressar de melhorar forma o conteúdo para robôs (sim, como o Google!).

Para usar, o primeiro passo é pensarmos no escopo do conteúdo. Precisamos de uma tag para representá-lo, que terá o atributo `itemscope` e o seu tipo, representado pelo atributo `itemtype`. Se fossemos representar o álbum de um artista, nosso primeiro passo seria o seguinte:

```html
<div itemscope itemtype="http://schema.org/MusicAlbum"></div>
```

Dentro de nosso escopo usaremos outras tags com os mesmos atributos. Resumindo:

- `itemprop`: representa a propriedade de um elemento (nome, telefone, endereço, etc)
- `itemtype`: recebe o valor de um microdata.

Nosso exemplo de forma completa ficaria assim:

```html
<div itemscope itemtype="http://schema.org/MusicAlbum">
  <h1 itemprop="name">Mondo Bizarro</h1>
  <h2 itemprop="byArtist">Ramones</h2>
  <div itemprop="track" itemscope itemtype="http://schema.org/ItemList">
    <span itemprop="numberOfItems" content=14 />
    <div itemprop="itemListElement itemscope itemtype="http://schema.org/ListItem">
      <span itemprop="position">1</span>
      <div itemprop="item" itemscope itemtype="http://schema.org/MusicRecording">
        <span itemprop="name">Censorshit</span>
      </div>
    </div>
    <div itemprop="itemListElement itemscope itemtype="http://schema.org/ListItem">
      <span itemprop="position">2</span>
      <div itemprop="item" itemscope itemtype="http://schema.org/MusicRecording">
        <span itemprop="name">The Job That Ate My Brain</span>
      </div>
    </div>
  </div>
</div>
```

Existem inúmeras representações, você pode encontrá-las no [Schema.org](http://schema.org/).

## A melhor ferramenta para HTML é você!

Hoje em dia com uma rápida busca na internet você encontra validadores, editores que ajudam a escrever HTML mais rápido (conheça o [Emmet](http://emmet.io/)!), entre outros facilitadores. Mas o ponto principal que você precisa entender: **não há como automatizar um bom trabalho**.

A semântica deve ser feita de humanos para máquinas. Precisamos fazer com que algoritmos entendam nosso código. Dessa forma todo mundo ganha, incluindo seu produto, os buscadores, o mercado e a web.

Tudo pronto. Vamos ser mais semânticos?
