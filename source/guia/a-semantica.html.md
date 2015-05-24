---
title: A Semântica
introduction: 
    <p>Semântica é uma das principais vantagens da plataforma web em relação às outras. É através da semântica que terceiros, mecanismos de busca e ferramentas de leitura de telas podem fazer uso do conteúdo disponibilizado em páginas web. </p>
    <p>Muitas vezes desenvolvedores acabam deixando de lado uma boa marcação de suas páginas, porém, um bom trabalho nessa parte pode render bons resultados para a aplicação.</p>
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quas autem dolorem maiores, facere eius, tenetur, deserunt repellendus, quod assumenda accusamus quisquam hic architecto ullam dignissimos? Eaque repellendus excepturi illum!

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate velit maxime deserunt, delectus error perspiciatis consectetur rem, corporis aspernatur.

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
O *Document Type Defination* (DTD ou Doctype) é quem informa ao navegador a versão do HTML que está sendo utilizada, ele vem antes de qualquer outro elemento do documento, até mesmo antes do `<html>`. Antes da especificação HTML 5 existiram várias notações para o `<doctype>`. Por exemplo:

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

Uma analogia constante em relação ao HTML é que ele é composto por uma série de elementos estruturado como uma árvore. Levando isso em conta, o elemento `<html>` é a raiz de nossa árvore. Todos os elementos estarão dentro dele.

O principal atributo desse elemento é o `lang`, que especifica a língua da página HTML.

```html
<html lang="pt-br">
```

Simples, né?

### O elemento `<head>`
O elemento `<head> ` não mudou nada desde sua primeira versão. Ele contém uma coleção de informações (metadados) sobre a página HTML.

#### Metadados
Elemento `<meta>` tem a missão de representar dados que não são expressíveis com outros elementos, como `<link>` e `<title>`. Ele serve também para passar informações à *user agents* e navegadores. 

Existem inúmeros atributos disponíveis para `<meta>` , entre eles o `charset` é indispensável, pois é ele quem recebe a definição do da codificação de caracteres *(character encoding)*.

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
<script type="text/javascript" src="/jquery.js"></script>
<script>
  // código javascript...
</script>
```

Uma regra básica para decidir onde carregar uma *tag script*: se influi na renderização do documento (como *shiv* do HTML 5), carregue no `<head>`, senão, carregue no `<body>`.

### O elemento `<body>`

O elemento `<body>` possui o conteúdo do documento HTML. Nele é que estão os elementos que são diretamente renderizados ao usuário.

```html
<body>
  <p>Hello, World!</p>
</body>
```

#### Principais elementos

#### `<section>`
//todo

#### `<nav>`
//todo

#### `<article>`
//todo

#### `<aside>`
//todo

####`<header>`
//todo

#### `<footer>`
//todo

## Não pare por aqui

//todo

