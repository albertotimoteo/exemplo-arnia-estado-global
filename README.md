# exemplo-arnia-estado-global

Exemplo para os alunos da Arnia escola de programação sobre como fazer um Estado Global usando context e hooks.

Exercícios:

## Exercício 1: Contador global

Crie um contexto chamado `CounterContext` que permite compartilhar um contador global entre vários componentes. O contador deve começar em 0 e ser exibido em todos os componentes que consomem o contexto.

Crie dois componentes: `CounterProvider` e `CounterDisplay`.

- `CounterProvider` deve ser responsável por manter o estado do contador e fornecer o valor do contador para seus componentes filhos.
- `CounterDisplay` deve consumir o contexto `CounterContext` e exibir o valor atual do contador.


## Exercício 2: Tema global

Crie um contexto chamado `ThemeContext` que permite compartilhar um tema global entre vários componentes. O tema deve ser uma string que pode ser "claro" ou "escuro".

Crie dois componentes: `ThemeProvider` e `ThemeToggle`.

- `ThemeProvider` deve ser responsável por manter o estado do tema e fornecer o valor do tema para seus componentes filhos.
- `ThemeToggle` deve consumir o contexto `ThemeContext` e exibir um botão que alterna entre os temas "claro" e "escuro" ao ser clicado.


## Exercício 3: Autenticação global

Crie um contexto chamado `AuthContext` que permite compartilhar o estado de autenticação global entre vários componentes. O estado de autenticação pode ser um objeto contendo as propriedades `isAuthenticated` (booleano) e `user` (objeto contendo os detalhes do usuário).

Crie dois componentes: `AuthProvider` e `UserProfile`.

- `AuthProvider` deve ser responsável por manter o estado de autenticação e fornecer o valor do estado para seus componentes filhos.
- `UserProfile` deve consumir o contexto `AuthContext` e exibir as informações do usuário se estiver autenticado ou uma mensagem de "Usuário não autenticado" caso contrário.

## Exercício 4: Carrinho de compras global

Crie um contexto chamado `CartContext` que permite compartilhar o estado do carrinho de compras entre vários componentes. O estado do carrinho de compras deve ser um array de itens.

Crie dois componentes: `CartProvider` e `CartItems`.

- `CartProvider` deve ser responsável por manter o estado do carrinho de compras e fornecer o valor do estado para seus componentes filhos.
- `CartItems` deve consumir o contexto `CartContext` e exibir a lista de itens do carrinho de compras.

## Exercício 5: Idioma global

Crie um contexto chamado `LanguageContext` que permite compartilhar o estado do idioma global entre vários componentes. O estado do idioma deve ser uma string representando o idioma atual.

Crie dois componentes: `LanguageProvider` e `LanguageSelector`.

- `LanguageProvider` deve ser responsável por manter o estado do idioma e fornecer o valor do estado para seus componentes filhos.
- `LanguageSelector` deve consumir o contexto `LanguageContext` e exibir uma lista suspensa (dropdown) que permite selecionar o idioma.