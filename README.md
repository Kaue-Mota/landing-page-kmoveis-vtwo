# K Móveis Planejados — Landing Page v2

Site institucional e portfólio da **K Móveis Planejados**, empresa especializada em móveis planejados com mais de 30 anos de experiência, localizada em Sobradinho 2, Brasília - DF.

---

## Visão Geral

Landing page moderna e responsiva com foco em conversão via WhatsApp. O site apresenta portfólio de projetos, catálogo de materiais e depoimentos de clientes.

---

## Tecnologias

| Categoria | Tecnologia |
|-----------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite (rolldown-vite) |
| Estilização | Tailwind CSS 4 |
| Roteamento | React Router DOM 7 |
| Linting | ESLint 9 + TypeScript ESLint |
| Fonte | Ubuntu (Google Fonts) |

---

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header/          # Navegação responsiva com menu mobile
│   ├── Footer/          # Rodapé com informações de contato
│   ├── Layout/          # Wrapper com Header + Footer
│   ├── Main/            # Seção hero, galeria e reviews
│   ├── ReviewCard/      # Card de depoimento de cliente
│   ├── ProjectCard/     # Card de projeto
│   └── ScrollToTop/     # Scroll para o topo ao mudar de rota
├── pages/
│   ├── About/           # Página institucional
│   ├── Projetos/        # Galeria de projetos com filtros
│   └── Catalago/        # Catálogo de texturas/acabamentos
├── hooks/
│   └── useScrollAnimation.ts  # Animações baseadas em Intersection Observer
├── routes/
│   └── index.tsx        # Definição das rotas
├── styles/
│   └── global.css       # Estilos globais e variáveis CSS
├── App.tsx
└── main.tsx

public/
├── data/
│   ├── projects.json    # Dados dos projetos do portfólio
│   └── textures.json    # Dados das texturas/acabamentos
└── images/
    ├── logo/
    ├── icon/
    ├── hero-section-bg.webp
    ├── buttons-bg/
    ├── galeri-grid/
    ├── projects/
    └── textures/
```

---

## Páginas e Rotas

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | `Main` | Hero, galeria de imagens e depoimentos |
| `/about` | `About` | História e missão da empresa |
| `/projetos` | `Projetos` | Portfólio filtrável por categoria |
| `/catalago` | `Catalago` | Catálogo de texturas e acabamentos MDF |

### Categorias de Projetos

- **Todos** — exibe todos os projetos
- **Quarto** — dormitórios e closets
- **Cozinha** — cozinhas planejadas
- **Banheiro** — gabinetes e armários de banheiro
- **Sala** — painéis, estantes e home offices

---

## Como Executar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abre o servidor de desenvolvimento em `http://localhost:5173` com Hot Module Replacement (HMR).

### Build de Produção

```bash
npm run build
```

Gera os arquivos otimizados na pasta `dist/`. O comando executa a verificação de tipos TypeScript (`tsc -b`) antes do build.

### Preview do Build

```bash
npm run preview
```

Serve o build de produção localmente para testes antes do deploy.

### Lint

```bash
npm run lint
```

---

## Funcionalidades

- **Responsivo** — design mobile-first com breakpoints para sm, md, lg e xl
- **Animações de scroll** — elementos animados via Intersection Observer ao entrar na viewport
- **Menu mobile** — hamburger com toggle e fechamento ao clicar fora
- **Filtro de projetos** — filtragem por categoria sem recarregar a página
- **Integração WhatsApp** — botão de contato direto via `wa.link` em todo o site
- **Galeria de texturas** — catálogo visual de acabamentos MDF disponíveis
- **Depoimentos** — cards de reviews com avaliação por estrelas

---

## Dados

Os dados do portfólio e catálogo são gerenciados via arquivos JSON em `public/data/`:

- **`projects.json`** — lista de projetos com `id`, `category`, `image` e `title`
- **`textures.json`** — lista de texturas com `id`, `name` e `image`

Para adicionar novos projetos ou texturas, edite os respectivos arquivos JSON e adicione as imagens correspondentes em `public/images/projects/` ou `public/images/textures/`.

---

## Contato

**K Móveis Planejados**  
Sobradinho 2, Brasília — DF  
WhatsApp: [wa.link/75dyp7](https://wa.link/75dyp7)
