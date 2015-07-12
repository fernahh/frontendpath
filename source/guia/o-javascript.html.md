---
title: O JavaScript
introduction: 
    <p>JavaScript é uma linguagem de script criada para melhorar a experiência do usuário na web. Apesar de seu nome ser semelhante a linguagem Java, as duas linguagens possuem mínimas semelhanças.</p>
    <p>Com característica interpretada e suporte a orientação objetos através de protótipo, o JavaScript é desenvolvido baseado no padrão ECMAScript. Vamos conhecer aqui suas principais características e como fazer um bom uso para desenvolvimento de interfaces.</p>
---

## O JavaScript não tem limites!

Sem sobra de dúvidas JavaScript é uma das linguagens que mais foi odiada por desenvolvedores web. Tipagem fraca, orientação objetos com funcionamento totalmente diferente de linguagens "tradicionais", e inúmeras pegadinhas frustaram desenvolvedores por muito tempo. Mas esse cenário vem mudando.

Hoje em dia, dificilmente uma ferramenta de sucesso terá uma boa experiência sem o uso de JavaScript. Porém, para isso precisamos conhecer suas principais características, suas boas partes e as partes ruins.

Bora lá?

## Principais características

### Variáveis, tipos e valores

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

### Operadores
// todo

### Estruturas de controle
// todo

### Funções
// todo

### Objetos
// todo

### Funções construtoras
// todo

### Closures
// todo

## DOM
// todo

## Boas partes
// todo

## Bad parts
// todo

## O JavaScript moderno
// todo

## Não pare por aqui
// todo
