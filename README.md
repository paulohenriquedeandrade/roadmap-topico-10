# Script Node.js - Consumo de API Externa com Fetch

Este projeto faz parte da entrega do décimo tópico do roadmap de estágio, focado em consumir uma API externa utilizando `fetch` com `async/await` em Node.js.

## Tecnologias Utilizadas

- Node.js
- ES Modules

## Estrutura do Projeto

```
.
├── fetch.js
└── README.md
```

## Script Criado

### fetch.js

Script que demonstra o uso de `fetch` com `async/await` para consumir uma API externa:

- Realiza uma requisição GET para uma API pública de produtos
- Converte a resposta para JSON
- Exibe o nome do primeiro produto no console
- Utiliza tratamento de erros com `try/catch`

## Importação

```javascript
// Importação do fetch (Node.js 18+ já possui fetch nativo)
// Caso use Node.js < 18, instale node-fetch:
// import fetch from 'node-fetch';
```

## Como Executar o Script

```bash
node fetch.js
```

## Resultado

Após executar o script:

- O nome do primeiro produto da API será exibido no console
- Em caso de erro, uma mensagem será exibida informando o motivo
