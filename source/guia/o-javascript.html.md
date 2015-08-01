---
title: O JavaScript
---

## O JavaScript não tem limites!

Sem sombra de dúvidas o JavaScript é uma das linguagens que mais foi odiada por desenvolvedores web. Tipagem fraca, orientação objetos com funcionamento totalmente diferente de linguagens "tradicionais" e inúmeras pegadinhas frustaram desenvolvedores por muito tempo. Mas esse cenário vem mudando.

Hoje em dia, dificilmente uma ferramenta de sucesso terá uma boa experiência sem o uso de JavaScript. Porém, para isso precisamos conhecer suas principais características.

Bora lá?

## Variáveis, tipos e valores

Podemos declarar variáveis de duas formas: com ou sem palavra reservada `var`.

```javascript

// O código abaixo terá o mesmo
// resultado no browser.

var foo = 0; // "0"

foo = 0; // "0"
```

Você deve estar se perguntando qual a diferença das duas declarações. Quando você declara uma variável com `var`, ela será reduzida ao menor escopo possível. Caso você declare sem, a variável fará parte do escopo global, no browser, será do escopo do objeto `window`, o que é péssimo.

Com a última versão do ECMAScript, já temos esse problema resolvido. Podemos declarar uma variável utilizando `let`, o que fará com que ela tenha escopo de bloco.

```javascript
var a = 1;
let b = 2;
console.log(a); // 1
console.log(b); // 2

if (true) {
  var a = 2;
  let b = 3;
  console.log(a); // 2
  console.log(b); // 3
}

console.log(a); // 2
console.log(b); // 2
```

Além de `let`, na nova versão do JavaScript também ganhamos a palavra `const`. Com ela, podemos declarar uma variável *read-only*, ou seja, depois atribuir um valor a ela, não poderá ser mais alterado.

```javascript
const foobar = 1;
var foobar = 2;

console.log(foobar); // 1
```

Como já dito, JavaScript é uma linguagem de tipagem fraca. Sendo assim, podemos definir o tipo de uma variável na atribuição de seu valor. Temos os seguintes tipos para trabalhar: **Int**, **Float**, **String**, **Booleanos**, **Arrays** e **Objetos**.

```javascript
// Int
var foo = 0;

// Float
var bar = 3.14;

// String
var foobar = "foobar";

// Booleanos
var foo = true;

// Array
var arr = [2, 4, 6, 8];

// Objeto
var obj = {
  foo: "foo",
  bar: "bar"
}
```

Falando de valores, JavaScript reconhece 6 tipos primitivos:

- `number` (`1`, `2`, `3.14`, ...)
- `boolean` (`true` ou `false`)
- `string` (`"foobar"`)
- `null` (valor ou objeto que não existe)
- `undefined` (quando uma variável tem valor indefinido)
- `symbol` (`Symbol("foobar")`)

## Operadores

Temos vários operadores para trabalhar em JavaScript:

- Assignment operators
- Comparison operators
- Arithmetic operators
- Bitwise operators
- Logical operators
- String operators
- Conditional (ternary) operator
- Comma operator
- Unary operators
- Relational operator

Não vamos explicar detalhadamente todas suas características. Vamos focar aqui nos principais casos de uso. Você pode ler mais a fundo sobre esse assunto no [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators).

**Comparison operators**

Assim como em outras linguagens, operadores de comparação no JavaScript usam o `==`. Porém, também temos `===`. A diferença é que o primeiro verifica se os operandos são iguais, o segundo além disso, também verifica se o tipo de objeto é o mesmo.

```javascript
3 == "3" // true
3 === "3" // false
3 != "3" // false
3 !== "3" // true
```

## Estruturas de controle

Estruturas de controle são imprescindíveis em qualquer linguagem. Com ela conseguimos manipular os dados de uma aplicação, desenvolver algoritmos entre outras vantagens. Vamos aqui todas as estruturas de controle de JavaScript.

**Condicionais**

Sem dúvidas o condicionais que mais usamos em qualquer linguagem de programação é o `if...else`. Com ele podemos testar se um valor é verdadeiro ou falso:

```javascript
if (condicao) {
  // true
} else {
  // false
}
```

Além disso, também temos `else if`, se quisermos testar mais de uma condição. Aproveitando a deixa, lembramos aqui os valores que retornam `false` no JavaScript:

- `false`
- `undefined`
- `0`
- `NaN`
- string vazia (`""`)

Se tivermos que testar muitos casos, podemos usar o `switch`:

```javascript
switch (condicao) {
  case case_1:
    return 1
    break;
  case case_2:
    return 2
    break;
  default:
    return 3;
    break;
}
```

**Promises**

Promises é uma nova feature que faz parte do ECMAScript 6. Ela nada mais é um objeto que representa uma operação que não foi concluída, mas mesmo assim espera-se um fim. Você usuará muito essa feature para operações assíncronas.

Uma Promise tem seus estados representados em *pending*, *fulfilled* e *rejected*.

*pending* é o estado inicial de uma Promise, mas também diz que ela ainda não foi completada ou rejeitada.
*fulfilled* nos diz que a operação está completa.
*rejected*, como o nome sugere, nos diz que a operação falhou.

Em seu protótipo, temos os métodos `catch()` e `then()`. Podemos usar esses métodos para controlar o fluxo de uma operação Promise. Além desses métodos, no próprio objeto `Promise`, temos os métodos `all()`, `race()`, `reject()` e `resolve()`.

Para ficar mais simples de visualizar, vamos ver um simples exemplo de Promise:

```javascript
/*
 * Exemplo do site da MDN:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */
var p = Promise.resolve().then(function() {
  console.log('Promise resolve callback');
}, function() {
  console.log('Promise reject callback');
});

var p = Promise.reject().then(function() {
  console.log('Promise resolve callback');
}, function() {
  console.log('Promise reject callback');
});
```

Leia mais sobre Promises no site da [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Laços e iteradores

Laços e iteradores são imprescindível quando trabalhamos com coleções, objetos ou arrays. Vamos ver aqui todas as formas de laços que temos no JavaScript.

**for**

Funciona como em toda linguagem C like. Recebe o valor inicial do lado, a condição para continuar e o incremento:

```javascript
var x = 0;

for (let i = 0; i <= 5; i++) {
  x += 1;
}
console.log(x); // 6

```

**do...while e while**

Esses dois laços, assim com o `for` funcionam também como em linguagens C like. O `while` recebe uma condição e o lado irá iterar até ela for falsa.

```javascript
do {
  i += 1;
} while(i <= 5);

while(i <= 5) {
  console.log(i);
}
```

**for...in**

Usamos o `for...in` para iterar objetos. Fica mais fácil entender se visualizarmos um exemplo:

```javascript
var obj = { a:1, b:2, c:3};

for (var prop in obj) {
  console.log("obj." + prop + ": " + obj[prop]);
};
```

**for...of**
Essa laço também ganhamos na versão 2015 do ECMAScript. Com ele podemos criar um loop em objetos iteráveis. Isso é muito útil, pois diferentemente do `for..in`, que itera sobre o nome das propriedades, o `for..of` itera sobre o valor das propriedades.

```javascript
let arr = [3, 5, 7];
arr.foo = "bar";

for (let i in arr) {
   console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // "3", "5", "7"
}
```

## Funções

Funções sem dúvidas fazem parte da principal funcionalidade do JavaScript. Sem dúvidas, quando pensamos na linguagem logo nos vem a cabeça a palavra `function()`.

Eis aqui um ponto chave para entendimento de JavaScript. Preste bastante atenção e invista seu tempo para aprender sobre funções.

**Definindo funções**

Podemos definir funções de três formas no JavaScript, de forma simples, como uma expressão ou como um método de um objeto.

```javascript
// Declaração simples
function dobro(valor) {
  console.log(valor * 2)
};

// Declaração como exepressão
var dobro = function dobro(valor) {
  return valor * 2;
}

// Declarção como método
var App = {
  dobro: function(valor) {
    return valor * 2;
  }
}
```

**Escopo**

Uma das vantagens do JavaScript é ter função de primeira classe. Isso é: elas são como qualquer outro objeto. Porém, precisamos ter cuidado com esse uso por causa do escopo. Qualquer função declarada fora de outra função faz parte do escopo global.

```javascript
var val1 = 10,
    val2 = 20;

function multiplicacao() {
  return val1 * val2;
}

// Se chamarmos a função, ela vai retornar
// as duas variáveis globais multiplicadas.

multiplicacao(); // 200
```

Para lidar com escopo, podemos trabalhar com **closures**. Se você trabalha com JavaScript, precisa conhecer closures.

Closures são uma forma de manter um código privado. Em uma função dessa, a closure tem acesso às variáveis fora de seu escopo, mesmo após a função externa tendo terminado a sua execução, mas o escopo de fora não possui acesso a essas variáveis.

```javascript
var counter = (function () {
  var current = 0;

  return function closure () {
    return current++;
  }
})();
```

**Default parameters**

Apesar de ser algo comum em diversas linguagens, antes do ECMAScript 6, o JavaScript não tinha default parameters. Vamos ver um comparativo de como fazemos em versões antigas do ECMAScript e como fazemos na versão 6.

```javascript
// Solução antiga
function multipicacao(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

// Solução no ES6
function multiplicacao(a, b = 1) {
  return a * b;
}
```

**Rest parameters**

Assim como os Default Parameters, Rest Parameters surgiram na versão 2015 do ECMAScript. Ele serve para definirmos um número infinito de argumentos em uma função.

```javascript
function (a, b, ...theArgs) { }
```

### Arrow Functions

Arrow Functions foram criadas na versão 2015 do ECMAScript. Elas vieram para solucionar um problema antigo do JavaScript, o escopo do `this`.

Se você não sabe, o `this` é dinâmico, ou seja, ele recebe seu valor em tempo de execução. Sendo assim, o `this` sempre irá apontar para o objeto da qual a função método pertence. Isso é, se a função pai do `this` não fazer parte de nenhum objeto, ele fará parte do escopo global.

Em Arrow Functions o escopo do `this` é estático, ou seja, sempre irá referenciar o objeto pai. Vamos comparar:

```javascript
// Exemplo do site Loop Infinito
// http://loopinfinito.com.br/2013/08/20/ecmascript-6-arrow-function

// Sem arrow function
var armazem = {
  estabelecimentoNome: 'Armazém do Chico',

  logVendaDeCerveja: function(cervejas) {
    // não gera erro
    console.log(this.estabelecimentoNome.toUpperCase() + '\n\n');
    cervejas.forEach(function(cerveja) {
      // gera erro, `this` aponta para `window`
      console.log(this.estabelecimentoNome + ' vendeu ' + cerveja);
    });
  }
}

// Com arrow function
var armazem = {
  estabelecimentoNome: 'Armazém do Chico',

  logVendaDeCerveja: function(cervejas) {
    console.log(this.estabelecimentoNome.toUpperCase() + '\n\n');
    cervejas.forEach(cerveja => {
      console.log(this.estabelecimentoNome + ' vendeu ' + cerveja);
    });
  }
}
```

## Objetos

Em JavaScript todo valor se comporta como objeto, e isso é muito bom. Dessa forma, podemos usar funções disponíveis na linguagem para manipular valores. Por exemplo:

```javascript
'Foobar'.toUpperCase(); // FOOBAR
```

**Criando objetos**

Existem duas formas de criarmos objetos em JavaScript, notação literal ou com uma função construtora.

Na notação literal, criamos objeto com um duas chaves `{ }`. Já para criar com uma função construtora, usamos o chave `new`.

```javascript
// notação literal
var cao = {
  nome: "Castor",
  raca: "Labrador"
}

// função construtora
var cao = new Object();

cao.nome = "Castor";
cao.raca = "Labrador";
```

**Propriedades e métodos**

Podemos acessar as propriedades de um objeto de duas formas, com `.` e `[]`.

```javascript
cao.nome // Castor
cao[raca] // Labrador
```

Para declarar métodos, usamos a mesma notação que usamos para para propriedades, com `:`.

```javascript
var cao = {
  nome: "Castor",
  raca: "Labrador",
  andar: function() {
    console.log(this.nome + " está andando");
  }
}
```

## DOM

O DOM, *Document Object Model* é uma interface de programação para documentos HTML. É através desse recurso que podemos manipular interfaces com JavaScript.

Como o DOM representa a árvore do HTML, podemos manipular as tags que estão lá. Por exemplo, digamos que eu quero que toda as tags com o `id` "internacional" tenham a cor vermelha:

```javascript
document.getElementById("internacional").style.color = "red";
```

Não é fácil manipular o DOM. Sempre envolve muito custo. Porém, é necessário. Pensando nisso, surgiram várias bibliotecas para manipulá-lo. As mais populares são [jQuery](http://jquery.com/) e [YUI](http://yuilibrary.com/). Com uma pequena busca no Google e você já terá inúmeras alternativas.

## Modularização

Se você é desenvolvedor, provavelmente já ouviu falar em DRY: **D**on't **R**epeat **Y**ourself.

Independente da linguagem, sempre buscamos otimizar nosso tempo e não escrever toda vez o mesmo código. Há alguns anos na web ouvimos falar sobre componentes e módulos. Sem dúvidas, é uma das partes mais importante no desenvolimento de aplicações web. Através de uma boa organização, além da reutilização, módulos e componentes ajudam muito a desenvolvermos de forma escalável.

**Module Pattern**

Qualquer desenvolvedor web um dia já sofreu com o escopo bizarro das variáveis no JavaScript. Através da modularização podemos contornar esse problema. Com o *module pattern* podemos simular privacidade no JavaScript, logo, também previnir que o escopo de variáveis não façam parte do escopo global.

Provavelmente você já se deparou o seguinte código diversas vezes:

```javascript
(function(){
  // ...
})();
```

Trata-se de uma função auto-executável, conhecida como [IIFE](http://goo.gl/Aw3Krx) *Immediately-invoked function expression*. O código que estará dentro da função está encapsulado. Isso acontece porque englobando a função com parênteses, estamos executando ela antes mesmo de ser atribuída a uma variável ou o escopo global.

Usando uma função auto-executável podemos criar um encapsulamento para manipular atributos de um objeto. Por exemplo:

```javascript
// Exemplo sem emcapsulamento
var Obj = {
  prop: 0,
  incrementProp: function() {
    return this.prop += 1;
  }
}

Obj.incrementProp();
Obj.prop; // 1;

// Exemplo com Module Pattern
var Obj = (function () {
    var prop = 0;

    return {
      prop: function() {
        return prop;
      },

      incrementProp: function() {
        return prop += 1;
      }
    };
  })();
```

**AMD**

Usar módulos é muito melhorar do que desenvolver sem nenhum design pattern. Porém, é preciso cuidado, pois facilmente teremos casos em que um depende do outro. O AMD, *Asyncronous Module Definition* vem para evitar esse problema. Através dele podemos definir as dependências de um módulo.

```javascript
define(
  ['dependecy1', 'dependecy2', 'dependecy3'],
  function(dependecy1, dependecy2, dependecy3) {
    //...
  }
);
```

Também podemos expressar quando um módulo requisita uma dependencia:

```javascript
require(
  ['dependecy1', 'dependecy2', 'dependecy3'],
  function(dependecy1, dependecy2, dependecy3) {
    //...
  }
);
```

Você deve estar se perguntando de onde vem as funções `define()` e `require()`. Existem diversos loaders AMD, o mais popular é o [Require.js](http://requirejs.org/). Juntamente com essa bliblioteca, é recomendado o uso da [r.js](https://github.com/jrburke/r.js), a qual irá entregar um único arquivo de JavaScript para o browser.

**CommonJS**

Esse padrão de módulos ficou ~famoso~ porque foi adotado pelo [Node.js](https://nodejs.org/). No browser podemos ajudar ele com o [Browserify](http://browserify.org/).

A sintaxe dele é mais simples e mais próxima da sintaxe de módulos do futuro do JavaScript. Temos três keywords: `require`, `import` e `export`.

```javascript
var lbx = require('libx');
function myMod() {
  // ...
}
module.exports = myMod;
```

No código acima, estamos dizendo que um módulo depende de `libx` e ele está exportando a função `myMod()`.

**ES6 Modules**

Na última versão do ECMAScript, o JavaScript ganhou sua própria forma de definir módulos. Basicamente cada módulo é definido em um arquivo, e seus atributos (variáveis ou funções) são expostos somente se isso for feito de forma explícita, com a keyword `export`. Para consumir variáveis de outro módulos, usamos a keyword `import`.

Exemplo:

**util.js**:

```javascript
function multiplicacao(a, b) {
    return a * b;
}

export { multiplicacao }
```

Dessa forma, estamos deixando a função `multiplicacao()` visível a outros módulos.

Para usar essa função em outro módulo, faríamos isso:

```javascript
import { multiplicacao } from 'util';
```

Simples. Muito simples.

## Tenha cuidado com o JavaScript

JavaScript é incrível e com ele temos muito controle da experiência de nosso usuário. Porém, com grandes poderes vem grandes responsabilidades.

Minhas dicas de bolso seriam:

- Sempre tenha em mente onde você quer chegar com sua aplicação.
- Opte pelas boas práticas e uso o mínimo necessário.
- Entregue o conteúdo independente se o JavaScript estiver disposível ou não. A web funciona sem JavaScript.
- Conheça o [suporte](http://www.caniuse.com/) de APIs e novas features JavaScript.



