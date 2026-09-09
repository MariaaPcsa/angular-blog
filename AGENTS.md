# AGENTS.md

Este documento define as diretrizes, arquitetura e padrões de desenvolvimento do projeto **angular-blog** para agentes e desenvolvedores.

---

## 📌 Visão Geral do Projeto

O **angular-blog** é uma aplicação web desenvolvida em **Angular 17+**, simulando um blog dinâmico de notícias sobre cultura pop e tecnologia com tema escuro (dark theme), filtros interativos por categoria, busca em tempo real e controle de fluxo moderno.

---

## 🛠️ Stack Tecnológica

- **Framework**: Angular 17.3+
- **Linguagem**: TypeScript 5.4+ (Target: ES2022)
- **Reatividade**: RxJS 7.8+
- **Estilização**: CSS3 Vanilla com Custom Properties e Google Fonts (*Plus Jakarta Sans* & *Space Grotesk*)
- **Roteamento**: Angular Router com rotas parametrizadas (`content/:id`)
- **Node.js**: v18.19+, v20.9+ ou v22.0+

---

## 📁 Estrutura de Diretórios

```plaintext
src/
├── app/
│   ├── components/            # Componentes visuais reutilizáveis
│   │   ├── big-card/          # Card de destaque principal com zoom e badges
│   │   ├── small-card/        # Cards secundários de notícias com slide effect
│   │   ├── menu-bar/          # Barra de navegação glassmorphic e links externos
│   │   └── menu-title/        # Título estilizado e badge do blog
│   ├── pages/                 # Componentes de páginas roteadas
│   │   ├── home/              # Página inicial com busca, filtros e layout dinâmico
│   │   └── content/           # Página de leitura detalhada com fallback 404 e recomendações
│   ├── models/
│   │   └── article.model.ts   # Interface TypeScript Article
│   ├── services/
│   │   └── article.service.ts # Serviço centralizado de artigos e filtros
│   ├── data/
│   │   └── dataFake.ts        # Mock data tipado de artigos
│   ├── app-routing.module.ts  # Configuração de rotas da aplicação
│   ├── app.module.ts          # Módulo raiz da aplicação
│   ├── app.component.ts       # Componente raiz
│   ├── app.component.html
│   └── app.component.css
├── assets/                    # Imagens estáticas e recursos
├── environments/              # Arquivos de ambiente (prod/dev)
├── styles.css                 # Estilos globais e tokens CSS do Design System
└── main.ts                    # Bootstrap da aplicação
```

---

## 🚀 Comandos de Desenvolvimento

| Comando | Descrição |
| :--- | :--- |
| `npm start` | Inicia o servidor de desenvolvimento em `http://localhost:4200/` |
| `npm run build` | Compila o bundle de produção em `dist/angular-blog/` |
| `npm run watch` | Executa o build em modo watch com configuração de desenvolvimento |
| `npm run test` | Executa os testes unitários via Karma/Jasmine |

---

## 📋 Convenções e Diretrizes de Código

### 1. Modelos & Serviços
- Todos os artigos devem seguir a interface `Article` (`src/app/models/article.model.ts`).
- Manipulação, filtragem e recuperação de dados de artigos devem ser realizadas via `ArticleService`.

### 2. Controle de Fluxo no Template
- Adotar sempre a sintaxe moderna do Angular 17 (`@if`, `@for`, `@empty`) nos templates em vez de `*ngFor` ou `*ngIf`.

### 3. Componentes & Comunicação
- Utilize `@Input()` com tipagem explícita para passar dados aos componentes (`big-card`, `small-card`).
- Mantenha valores padrão (fallback) para propriedades `@Input()`.

### 4. Rotas e Parâmetros
- Para páginas de conteúdo detalhado, utilize `ActivatedRoute` injetado no construtor para capturar o parâmetro `:id` da URL.
- Trate sempre casos de ID inexistente com estado amigável (404/Not Found).

### 5. Estilização
- Mantenha o padrão Dark Theme (`--bg-main: #0c0e12`, `--bg-card: #151821`, `--accent-primary: #6366f1`).
- Utilize as variáveis CSS globais definidas em `styles.css`.
- Evite estilizações inline no HTML; utilize classes CSS nos arquivos `.component.css` locais.
