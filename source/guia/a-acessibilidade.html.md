---
title: A Acessibilidade
---

## A web deve ser para todos!

A **acessibilidade** é um dos principais pontos da web, pois trata-se de uma forma de incluir todos os usuários. Por exemplo:

- Pessoas com deficiência temporária;
- Cegos;
- Pessoas com baixa visão;
- Pessoas com deficiência auditiva;
- Pessoas com deficiência motora;
- Usuários com uma condição de uso não tão robusta.

No Brasil, segundo o [censo de 2010](http://censo2010.ibge.gov.br/pt/resultados), 24% da população possuem algum tipo de deficiência, ou seja, cerca de 45 milhões de pessoas possuem barreiras ao acessarem a web.

A [W3C](http://www.w3.org/) sempre foi preocupada e buscou evangilizar o desenvolvimento de uma web acessível. Mesmo assim, o resultado que o mercado nos mostra, é que as diretrizes criadas para regulamentar o desenvolvimento acessível não são seguidas.

Você sabe quais são as diretrizes de acessibilidade da W3C? É isso que vamos ver agora.

## Diretrizes de Acessibilidade para Conteúdo na Web (WCAG)

A primeira versão das **Diretrizes de Acessibilidade para Conteúdo na Web** foi lançada em 1999 (sim, há muito tempo). Em 2008, foi lançada a versão 2.0 do WCAG, que é organizada nos seguintes tópicos:

- Princípios;
- Diretrizes;
- Critérios de sucesso;
- Técnicas de tipo suficiente e aconselhadas.

Para ser sincero, acho que a linguagem utilizada pela W3C possa ser algo que crie uma barreira entre a documentação e os desenvolvedores. Entendo que a formalidade é importante, mas não deve ser mais importe que a adesão de desenvolvedores às boas práticas de acessibilidade.

Os **princípios** têm a finalidade de prospectar requisitos para uma página ou aplicação web ser acessível. Caminhando ao lado deles, existem as **diretrizes**, que nada mais são que objetivos básicos para se desenvolver conteúdo acessível na web. Para que essas diretrizes sejam atingidas, existem **critérios de sucesso** e **técnicas de tipo suficiente e aconselhadas**.

Vamos ver aqui os princípios estabelecidos pela W3C.

### Princípio perceptível

Como o próprio nome diz, toda informação que a aplicação dispõe, deve ser **percebida por todos os sentidos** do seu usuário. Além disso, toda e qualquer alteração ou ação na interface deve ser percebida pelos sentidos do usuário da aplicação.

Por exemplo, no uso de imagens, deve ser usado o atributo `alt` para descrever uma alternativa ao usuário que tem problema de visão.

```html
<img src="foto.png" alt="Foto da Cascata do Caracol">
```

### Princípio operável

Todas as operações que o usuário precisa fazer para ter acesso a uma informação devem ser acessíveis. Uma interface não pode depender de uma operação que um usuário com certa deficiência não consiga realizar.

Um exemplo disso, é que toda operação deve ter um tempo suficiente para o usuário completá-la, seja usando o mouse ou o teclado.

Exemplificando, através de CSS podemos fazer uma navegação mais básica de forma simples ao usuário, permitindo que o mesmo possa navegar pela aplicação com o teclado:

```css
a:hover,
a:focus {
  background-color: #ffffff;
}
```

### Princípio compreensível

Esse princípio diz que a aplicação deve ter seu conteúdo de forma compreensível, assim como seu funcionamento.

A maioria dos usuários que possuem algum tipo de deficiência visual, usam leitores de tela para navegar na web.

Uma boa prática, além de manter um bom desenvolvimento semântico é, por exemplo, indicar o idioma que está escrito na página com o atributo `lang`. Perceba que dentro do conteúdo outro idioma é utilizado.

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Documento</title>
  </head>
  <body>
  <p>Essa página está em pt <span lang="en">and in english</span></p>
  </body>
</html>
```

### Princípio robusto

O princípio robusto diz que toda aplicação deve-se manter com conteúdo acessível tanto para usuários sem necessidades especiais, quanto para tecnologias assistivas, mesmo que com a evolução das tecnologias isso possa se tornar defasado.

Uma forma de manter esse princípio é sempre desenvolver de acordo com padrões validados pela W3C.

Na prática, o *web design responsivo* (<abbr title="Responsive Web Design">RWD</abbr>), pode ajudar a entregar conteúdo acessível independente do dispositivo que o usuário está usando.

## Enriquecendo a acessibilidade com WAI-ARIA

Vivemos em uma época em que a web é uma das principais plataformas para desenvolvimento de aplicações, quiçá a principal.

O conteúdo entregue ao usuário nem sempre é entregue na forma de texto simples. Conteúdos dinâmicos cada vez mais fazem parte do ciclo de vida de uma aplicação web. Levando esse dentre outros aspectos, a semântica básica do HTML não cobre todas as lacunas que precisamos para tornar uma aplicação moderna acessível. Pensando nisso temos uma recomendação da W3C chamada WAI-ARIA *(WAI - Web Acessibility Initiative, ARIA - Acessible Rich Internet Applications)*.

### Atributos aria-* e Roles

Os atributos `aria-*` são responsáveis por extender a semântica de elementos HTML. Dessa forma, leitores de tela podem compreender melhor a interação de uma interface.

Existem [inúmeros tipos de atributos](http://www.w3.org/TR/wai-aria/states_and_properties) para representação de estados e propriedades.

E na prática, como fica? Vamos ver o exemplo de uma barra de progresso, que apesar de ser escrita uma tag `<div>`, que não possui valor semântico, é acessível:

```html
<div class="my-progress-bar" role="progressbar"
  aria-valuenow="75" aria-valuemin="0"
  aria-valuemax="100" style="width: 75%;">
  75%
</div>
```

Repare no exemplo acima que utilizamos o atributo `role`. Ele adiciona valor semântico a uma tag HTML, ou até mesmo redefine.

Por exemplo, muitas vezes utilizamos uma tag `<a>` com comportamento de uma tag `<button>`. Podemos resolver isso redefinindo o valor semântico da tag:

```html
<a href="#" role="button">Fechar</a>
```

## De humanos para humanos

Como foi dito no [caminho da semântica](/guia/a-semantica.html), não há diferença visual entre um conteúdo expressado com um `div` ou `header`, e mesmo sendo errado, você pode escrever dessa forma. Porém com acessibilidade é diferente. Usar os elementos corretos para seu uso é de extrema importântica.

Por exemplo, evite usar um `<a>` como um `<button>`. A web por si só é minimamente acessível. Não vamos [quebrar a web](http://tableless.com.br/nos-quebramos-web/). Se você estiver na "web pública", desenvolva produtos acessíveis. Os usuários agradecem!
