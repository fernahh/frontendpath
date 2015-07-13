---
title: O CSS
introduction: 
    <p>CSS <i>(Cascading Style Sheets)</i> é uma linguagem de marcação de estilo. Através dela é possível personalizar páginas web usando seletores disponíveis no HTML da aplicação.</p>
    <p>Pelo fato de ela nunca lançar exceções, acabamos subestimando sua complexidade. Porém, hoje há diversas aplicações grandes que precisam de arquiteturas de CSS para desenvolver um projeto escalável, principalmente para o trabalho em equipe.</p>
---

## CSS é fácil, mas desenvolver projetos escaláveis é difícil!

CSS é uma das partes mais importantes e complexas de uma interface web. É através dele que podemos chegar a um design de projeto, muitas vezes com muito pouco esforço. Você deve estar se perguntando: *"porque o CSS é uma parte complexa?"* Eu explico.

Como já dito, CSS não lança exceções. Você pode escrever ele de diversas formas e o resultado final será o mesmo. Por exemplo, o código abaixo terá o mesmo resultado na renderização do navegador.

```css
/*
 * Nossa, que código horrível!
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
 * Agora sim, melhorou!
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

Agora pare e pense. Já pensou ter um arquivo de CSS com 30, 40 ou 50 mil linhas de código desorganizado? A manutenção será terrível. Se esse arquivo for desenvolvido com mais de uma pessoa, multiple seus problemas por mil.

Enfim.

Existem outras dezenas de problemas com essa linguage. Exageiros a parte, podemos perceber que temos um longo caminho para frente.

## Regras básicas

### Seletores

Como dito no [conteúdo sobre semântica](/guia/a-semantica.html), não existe web sem HTML, logo, de nada seria o CSS sem HTML. Seguindo essa lógica, já podemos chegar a conclusão de que as tags HTML são "estilizáveis" com CSS. Por exemplo:

```html
<a href="#">A maioria dos links na web deveriam ser vermelhos! Brincadeira...</a>
```

```css
a {
  color: red;
}
```

O código acima irá aplicar a cor vermelha para todas as tags `<a>` de um documento. Mas não são só tags HTML que são estilizáveis. Existem diversos tipos de seletores:

**Type selector**

As tags do HTML são type selectors, ou seja, seletores simples. O seletor de uma tag `<p>` é o `p`, assim como o de uma tag `<div>` é `div`.</dd>

**Class selector**

Esse será o tipo que você mais usará no desenvolvimento de folhas de estilo. Usamos o atributo `class` associado a uma tag no HTML e o estilo aplicado a esse seletor poderá ser setado através de seu nome precedido de ponto. Ficou difícil de entender? Então vamos desenhar, quer dizer... codar.

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

O seletor de ID funciona de forma parecida com o class selector. É através de um atributo "id" em uma tag HTML que podemos criá-lo. Você deve estar se perguntando: *qual a diferença de `id` para `class`?* 

A diferença entre `id` e `class` é que o primeiro é menos flexível e mais específico. Ou seja, na dúvida, (quase) sempre vá de `class`!

**Atribute selector**

Existem inúmeros tipos de atributes selectors. Eles são referentes a todos os elementos que podem ter um atributo e até um valor. Por exemplo, se quisermos adicionar estilo aos links que abrem em uma nova janela, podemos fazer o seguinte:

```css
a[target="_blank"] {
  color: green;
}
```

**Pseudo-class selector**

Geralmente usamos pseudo-class selectors para referenciar o estado ou posição de um elemento em uma coleção. Sem dúvidas, os mais usados são `:focus`, `:hover`, `:checked`, `:first-child` e `:last-child`. 

Usá-los é muito simples:

```css
/*
 * O código abaixo irá fazer com que a
 * cor do link fique verde ao passar o
 * cursor.
 */

a:hover {
  color: green;
}

```

Exitem inúmeros pseudo-class selectores, você pode ver uma [lista no MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

**Pseudo-element selector**

Com funcionamento parecido dos pseudo-class selectores, os pseudo-elements selectors inserem um novo nodo no DOM, "simulando" um elemento.

Temos os seguintes seletores desse tipo:

- `::after`
- `::before`
- `::first-letter`
- `::first-line`
- `::selection`
- `::backdrop`

**Combinators**

Como o nome já sugere, combinators são seletores que possuem a combinação de dois elementos. São eles:

- Adjacent sibling selectors `el + el`
- General sibling selectors `el ~ el`
- Child selectors `el > p`
- Descendant selectors `el p`

**Universal selector**

Funciona como um seletor global, ou seja, aplica a regra recebida por ele para todos os outros elementos da página.

```css
/*
 * Essa regra diz que todos os
 * elementos da página terão
 * `display: block`.
 */

* {
  display: block
}
```

### Propriedades e valores

Se você é programador, podemos fazer uma analogia simples. Pense que os seletores são variáveis, propriedades são seus atributos e esses possuem valores. Certo?

Cada seletor pode possui no mínimo uma propriedade e seu respectivo valor. Aqui iremos dividir as propriedades em três seções, posicionamento, box-model e fontes.

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

Respectivavemente, as propriedades da lista acima definem peso, estilo, família, tamanho e o tamanho da linha.

## CSS3

Em poucas palavras, **CSS3 revolucionou** o desenvolvimento de interfaces web, principalmente tratando-se de performance e produtividade.

O CSS3 permite que o desenvolvedor use cada vez menos ferramentas de design para exportar imagens que serão usadas em um documento. Sombras, gradientes, diferentes tipos de bordas e fontes hoje funcionam de forma nativa dos browser, sem precisarmos de imagens. Com isso, menos requisições, menos assets, logo, mais performance.

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

Esse paradigma preza que as classes devam receber nomes baseado em seu padrão visiual e não no conteúdo. Além disso, ele diz que precisamos criar objetos estruturais sem propriedades de cores, como `background`, `color`. Devemos externar o padrão de estilo para outras classes. Por exemplo:

```css
alert {
  font-weight: bold;
}

alert-danger {
  color: red;
}
```

### SMACSS

SMACSS, *Scaleble and Modular Architeture for CSS* foi criado por John Snook para resolver problemas de arquitetura do app de e-mail do Yahoo. Ele é baseado em cinco grandes categorias: *base*, *layout*, *module*, *state* e o opcional *theme*.

As folhas de estilo do *base* devem receber apenas regras atreladas a seletores globais, isso é: `body`, `p`, `a`, etc.

Na categoria *layout*, o SMACSS recomenda que sejam usadas elementos agregadores que não repetem na aplicação, como `header` e `footer`. É importante lembrar que o autor recomenda utilizar o prefixo `.l-` para as classes de layout.

Já em *module*, serão elementos que representam componentes de uma aplicação. Se tivermos seletores filhos desse módulo, o SMACSS recomenda que sejam criados uma classe para esse seletor. É preferível usar `.box-title` ao invés de `.box h2`.

A categoria *state* agregam classes que indicam o estado de um componente, por exemplo `.is-active`.

Por último temos a categoria `theme`, que funciona como um `skin`. Essa categoria não é obrigatória no SMACSS.

### BEM

BEM, *Block, element, modifier*, foi criado por desenvolvedores da empresa [Yandex](https://company.yandex.com/).

*block*, segundo o BEM, é o nível mais alto de um componente. Por exemplo, `header` e `footer`.

*element* é um filho de um *block* que posssui uma função. Para escrever um *element*, devemos usar `__` como separador. Por exemplo, se tiver uma classe `menu`, vamos ter seu filho que é `menu__item`.

*state* também usa `_` para definição. A diferença para o SMACSS, é que nesse caso precisamos atrelar ao seletor pai. Por exemplo, se temos `menu__item`, teremos `menu__item_active`.
