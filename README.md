# Luis Buittons | Landing Page em React

Parte 2 (individual) do trabalho da disciplina **Desenvolvimento Frontend II**
Universidade Veiga de Almeida · Prof. Caio Silva Azeredo · Turma 4169ADSN2A1

## Autor

Davi Bonfim de Carvalho · Matrícula 1260215020

## Origem

- Repositório do grupo (Parte 1): https://github.com/Regina-Beatriz-dev/Luis-Buittons
- Páginas que fiz na Parte 1: `contato.html`, `login.html`, `cadastro.html` e `perfil.html`
- Página escolhida para a Landing: `contato.html`
- Autor(a) do `index.html` original: Maria Eduarda (Duda)

As páginas originais estão na pasta [`referencia-html/`](./referencia-html) para comparação antes e depois.

## Site publicado

https://luisbuittons-react-davi.netlify.app

## Tecnologias

- React + Vite
- Bootstrap 5.3 (mesmo framework CSS do grupo)
- Font Awesome e Google Fonts (Inter e Playfair Display)

## Como executar

```bash
npm install
npm run dev
```

## Seções da Landing Page

| Seção | Origem |
|---|---|
| Navbar (menu único com âncoras) | index.html + contato.html (headers fundidos) |
| Hero | index.html |
| Benefícios | index.html |
| Produtos em destaque | index.html |
| Contato (informações, mapa e formulário) | contato.html (minha página) |
| Footer (rodapé único) | criado na Parte 2, com os dados de contato |

## Decisões de fusão

- **Um único menu:** os headers das duas páginas viraram um só componente, com links apontando para as seções (`#inicio`, `#colecao`, `#contato`) em vez de arquivos `.html`.
- **Um único H1:** o logo deixou de ser H1. O título do Hero é o único H1 da página, e o título da página de contato virou H2.
- **Hero melhorado:** ganhou um segundo botão ("Entre em contato") levando para a seção final.
- **Contato como chamada final:** o formulário da minha página fica no fim da Landing, logo antes do rodapé.
- **Rodapé criado:** nenhuma das duas páginas originais tinha rodapé.
- **Dados em arrays:** links, benefícios, produtos e informações de contato ficam em `src/data/` e são renderizados com `map()`. Os dados de contato são reaproveitados no Footer e na seção Contato.
- **useState:** usado no menu hambúrguer do celular e no contador de caracteres do formulário.

## Estrutura

```
src/
├── components/   Navbar.jsx, Footer.jsx
├── sections/     Hero.jsx, Beneficios.jsx, Destaques.jsx, Contato.jsx
├── pages/        LandingPage.jsx
├── data/         links.js, beneficios.js, produtos.js, infoContato.js
└── styles/       CSS do grupo adaptados
```