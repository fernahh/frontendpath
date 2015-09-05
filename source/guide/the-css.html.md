---
title: The CSS
---

## CSS is easy, but develop scalable projects is something hard!

CSS, *Cascading Style Sheets* is one of the most complex and important parts of an web interface. Is through CSS that we can reach a project design, usually with not to much effort. You may wonder: *"Why CSS is a complex thing?"* and I will explain.

Since CSS never come up with exceptions, we usually underestimate it's complexity. In this days there are lots of large applications that need a complex CSS architecture to provide scalability, mainly when large teams are involved.

CSS is a flexible language and because of that you can write it in several ways and the final rendering will be the same. For example, the code bellow will have the same rendering by the browser.

```css
/*
 * Wow, what a horrible code!
 */
table.hl {
margin: 2em 0; }

    table.hl td.ln {
    text-align: right;
}

li { font-family: serif;
font-weight: bold;
    font-size: 1.2em;
}

/*
 * No things are getting better.
 */
table.hl {
  margin: 2em 0;
}

table.hl td.ln {
  text-align: right;
}

li {
  font-family: serif;
  font-weight: bold;
  font-size: 1.2em;
}
```

Now stop what you're doing and think. Do you even realize that sometimes you can have a CSS file with thousands and thousands of line that doesn't follow any standart?

There are a bunch of other issues with this language. Based on that you already realized that we have a long way to go.

## Basic Rules

### Selectors

As we said in [semantics page](/guide/the-semantic.html), without HTML there's no web and CSS is fully related to HTML tags. The main purpose of CSS is provide "styles" to our webpage and it uses the page elements to do that. For example:

```html
<a href="#">Links on the web should be red! Just kidding...</a>
```

```css
a {
  color: red;
}
```

The code bellow will apply a red color to all `<a>` tags in the document but not only HTML tags can be customized using CSS. Here there are some other selectors that can be used:

**Type selector**

HTML tags are type selectors, this means that, when in CSS, the selector of an tag `<p>` is simply `p` as well as the selector of a tag `<div>` is `div`.

**Class selector**

This will be the type of selectors that you will use more times during your development of stylesheets. In the HTML code the `class` attribute is associated to a tag so we can identify it. To set styles to this selector, in your css file, you will use the value of the `class` attribute preceded by a dot. Hard to understand? Let me draw it. I mean, code it to you...

```html
<div class="banner"></div>
```

```css
.banner {
  background: white;
  color: black;
}
```

**ID selector**

The `id` selector works the same way that `class` selector. It is created through the `id` attribute in a HTML tag. Right now you're probably asking yourself: *What is the difference between `id` and `class`?*

The difference between `id` and `class` selectors is that the first is more specific and less flexible. Based on it you should (almost always) use `class` when writing your code.

**Attribute selector**

There are a lot of attributes selectors. They are related to all elements that are able to have an attribute that may or may not have a value. For example, if you want to add a custom style to links that will open in a new window, do the follow:

```css
a[target="_blank"] {
  color: green;
}
```

**Pseudo-class selector**

Usually pseudo-classes selectors are used to refer to an element that is in a specific state, or in a position of a collection. The most common used are `:focus`, `:hover`, `:checked`, `:first-child` and `:last-child`.

It's easy to use them:

```css
/*
The code below will turn the link
color to green when the user hover
the cursor on it
*/

a:hover {
  color: green;
}
```

There are tons of pseudo-class selectors and you can take a better look in the [MDN list of selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

**Pseudo-element selector**

With a very similar syntax of pseudo-class selectors, the pseudo-elements selectors insert a new node in the DOM, "simulating" an element.

Here a list of those selectors:

- `::after`
- `::before`
- `::first-letter`
- `::first-line`
- `::selection`
- `::backdrop`

**Combinators**

Like the name says, combinators are selectors that combine two or more elements. Here they are:

- Adjacent sibling selectors `el + el`
- General sibling selectors `el ~ el`
- Child selectors `el > p`
- Descendant selectors `el p`

**Universal selector**

A universal selector works in a global way. It apply the rules defined to it to all elements of the page.

```css
/*
This rule say that all
elements in the page
will be `display: block`.
*/

* {
  display: block
}
```

### Propriedades e valores

Se você é programador, podemos fazer uma analogia simples. Pense que os seletores são variáveis, propriedades são seus atributos e esses possuem valores. Certo?

Cada seletor possui no mínimo uma propriedade e seu respectivo valor. Aqui iremos dividir as propriedades em três seções, posicionamento, box-model e fontes.

#### Posicionamento

Na web temos diversas formas de posicionar um elemento com base em eixos X, Y e Z.

A principal propriedade de posicionamento é `position`. Através dela, podemos escolher como nosso elemento irá se posicionar em seu container.

Todo elemento por padrão possui posicionamento estático, `position: static`, ou seja, ele está posicionado na página de acordo com seu box-model (altura, largura, borda, margem e padding).

O segundo valor mais usado para essa propriedade sem dúvidas é o posicionamento relativo. Ele funciona da mesma forma que o posicionamento estático, porém, é possível usar as propriedades `top`, `bottom`, `right`, `left` e `z-index`. Esses atributos também podem ser usados com a propriedade absoluta, `position: absolute`, porém ela tem uma grande diferença em relação aos posicionamentos até aqui apresentados. Isso deve-se porque elementos absolutos se posicionam relativamente ao seu elemento pai.

Por último, podemos posicionar um elemento de forma fixa em um documento com a propriedade  `position: fixed`. Dessa forma o elemento será posicionado de acordo com o `body`.

#### Box-model

Uma das coisas que você mais vai ouvir é que **todo elemento** em um documento é um "box". Sendo assim, as propriedades que inferem no tamanho de um box-model são:

- `display`
- `height`
- `width`
- `margin`
- `border`
- `padding`
- `content`

Não vamos explicar aqui o que cada uma dessas propriedades faz. Se você entende o mínimo de português, já deve imaginar o comportamento básico de cada uma.

#### Fontes

Exitem poucas propriedades para lidarmos com fontes na web. As principais são:

- `font-weight`
- `font-style`,
- `font-family`
- `font-size`
- `line-height`

Respectivamente, as propriedades da lista acima definem peso, estilo, família, tamanho e o tamanho da linha.

## CSS3

Em poucas palavras, **CSS3 revolucionou** o desenvolvimento de interfaces web, principalmente tratando-se de performance e produtividade.

O CSS3 permite que o desenvolvedor use cada vez menos ferramentas de design para exportar imagens que serão usadas em um documento. Sombras, gradientes, diferentes tipos de bordas e fontes hoje funcionam de forma nativa nos browsers, sem precisarmos de imagens. Com isso, menos requisições, menos assets, logo, mais performance.

Para ver mais sobre as novas propriedades do CSS, [acesse o MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3).

## Pré-processadores

Bons desenvolvedores nunca se contentam com o que tem para trabalhar. Estão sempre reinventando a roda, e isso é ótimo.

Apesar das últimas evoluções do CSS em sua terceira versão, ele ainda continua com algumas limitações. Pensando nisso, surgiram linguagens que são compiladas para CSS.

Hoje em dia as principais são [Sass](http://sass-lang.com/) e [Less](http://lesscss.org/). Vamos ver aqui suas principais características.

**Variáveis**

CSS é extremamente repetitivo. Se você já escreve folhas de estilo deve ter percebido o quanto isso é ruim para a produtividade. Pois bem, Sass e Less resolveram isso nos dando variáveis.

```scss
// Scss (Sass)
$base-color: black;

body { color: $base-color; }
```

```less
// Less
@base-color: black;

body { color: @base-color; }
```

**Nesting**

Aplicar regras a elementos de um mesmo seletor pai também nos faz repetir muito no CSS. Porém, com pré-processadores podemos usar *nesting*. Mas tome cuidado, desenvolvedores não recomendam usar mais de três níveis desse recurso.

Nesse caso, as duas linguagens usam a mesma sintaxe:

```scss
// Scss e Less
#header {
  a { color: blue; }

  p { color: black; }
}
```

**Mixins**

Como o nome sugere, *mixins* "mixam" algo em uma regra. Isso nos ajuda muito na reutilização de código. Se preciso, você pode adicionar parâmetros em um mixin.

```scss
// Scss
@mixin border-radius(value) {
  -webkit-border-radius: value;
     -moz-border-radius: value;
          border-radius: value;
}

// Para usar o mixin acima em uma regra:
div {
  @include border-radius(3px);
}
```

```less
// Less
.border-radius(@value) {
  -webkit-border-radius: @value;
     -moz-border-radius: @value;
          border-radius: @value;
}

// Para usar o mixin acima em uma regra:
div {
  .border-radius(3px);
}
```

Existem outras features nas duas linguagens, principalmente no Sass, que possui estruturas de controle, condicionais e funções.

## Arquitetura de CSS

Com o crescimento de aplicações aplicações web e as novas demandas do mercado, mudamos a forma de escrever CSS. Surgiu então a necessidade de planejarmos a arquitetura de nossas folhas de estilo. Através disso podemos mirar um futuro escalável para nossas aplicações.

Com esse objetivo, surgiram alguns paradigmas muito interessantes. Os principais, OOCSS, SMACSS e BEM é o que vamos ver aqui.

### OOCSS

Criado pela [Nicole Sullivan](http://www.stubbornella.org), OOCSS significa *Object Oriented CSS*.

Esse paradigma preza que as classes devam receber nomes baseados em seu padrão visual e não no conteúdo. Além disso, ele diz que precisamos criar objetos estruturais sem propriedades de cores, como `background`, `color`. Devemos externar o padrão de estilo para outras classes. Por exemplo:

```css
alert {
  font-weight: bold;
}

alert-danger {
  color: red;
}
```

### SMACSS

SMACSS, *Scalable and Modular Architeture for CSS* foi criado por John Snook para resolver problemas de arquitetura do app de e-mail do Yahoo. Ele é baseado em cinco grandes categorias: *base*, *layout*, *module*, *state* e o opcional *theme*.

As folhas de estilo do *base* devem receber apenas regras atreladas a seletores globais, isso é: `body`, `p`, `a`, etc.

Na categoria *layout*, o SMACSS recomenda que sejam usadas elementos agregadores que não repetem na aplicação, como `header` e `footer`. É importante lembrar que o autor recomenda utilizar o prefixo `.l-` para as classes de layout.

Já em *module*, serão elementos que representam componentes de uma aplicação. Se tivermos seletores filhos desse módulo, o SMACSS recomenda que sejam criados uma classe para esse seletor. É preferível usar `.box-title` ao invés de `.box h2`.

A categoria *state* agregam classes que indicam o estado de um componente, por exemplo `.is-active`.

Por último temos a categoria `theme`, que funciona como um `skin`. Essa categoria não é obrigatória no SMACSS.

### BEM

BEM, *Block, Element, Modifier*, foi criado por desenvolvedores da empresa [Yandex](https://company.yandex.com/).

*block*, segundo o BEM, é o nível mais alto de um componente. Por exemplo, `header` e `footer`.

*element* é um filho de um *block* que possui uma função. Para escrever um *element*, devemos usar `__` como separador. Por exemplo, se tiver uma classe `.menu`, vamos ter seu filho que é `.menu__item`.

*state* também usa `_` para definição. A diferença para o SMACSS, é que nesse caso precisamos atrelar ao seletor pai. Por exemplo, se temos `.menu__item`, teremos `.menu__item_active`.

## Nunca subestime o CSS

A última dica sobre CSS é: **nunca o subestime**. Escrever folhas de estilo não é fácil.

Estude arquitetura de CSS e formas de escrita antes de aprender frameworks. Se for usar um pré-compilador, tome cuidado com o que ele está gerando.

Planejar bem seu desenvolvimento de CSS fará você economizar bastante tempo ao longo do projeto.
