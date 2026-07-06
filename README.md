# Mortgage Repayment Calculator

Calculadora de financiamento imobiliário desenvolvida como projeto de estudo prático em React JS e Tailwind CSS, baseada em um desafio de front-end (estilo Frontend Mentor).

🔗 **Demo:** https://hangtime319.github.io/mortgage-repayment-calculator-main/

## Funcionalidades

- Formulário com 4 campos: valor do empréstimo, prazo (anos), taxa de juros (%) e tipo de financiamento (Repayment ou Interest Only)
- Validação de campos obrigatórios e numéricos, com mensagens de erro exibidas embaixo do campo correspondente
- Erro de um campo é limpo automaticamente assim que o usuário começa a corrigi-lo, sem precisar reenviar o formulário
- Cálculo do valor da parcela mensal e do total a ser pago ao longo do prazo, usando a fórmula de amortização (Sistema Price) para "Repayment" e cálculo de juros simples para "Interest Only"
- Painel de resultados com dois estados: estado vazio (antes do primeiro cálculo) e estado preenchido (após o cálculo)
- Botão "Clear All" que restaura o formulário e o painel de resultados ao estado inicial
- Layout responsivo (mobile e desktop)

## Tecnologias utilizadas

- React JS (Hooks: `useState`)
- Tailwind CSS
- Vite
- JavaScript (ES6+)

## O que aprendi neste projeto

- Gerenciamento de estado em React com `useState` e o padrão de "lifting state up" para compartilhar dados entre componentes irmãos
- Criação de componentes controlados (inputs conectados ao estado)
- Separação de lógica de negócio (validação e cálculo) em funções puras, isoladas dos componentes visuais
- Estilização responsiva com Tailwind CSS, incluindo estados de foco, hover e erro

## Como rodar o projeto

```bash
npm install
npm run dev
```