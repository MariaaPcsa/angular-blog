# ⚡ Desafio: Criando um Blog com Angular

<p align="center">
  <img src="https://img.shields.io/badge/Desafio-DIO-00D2DF?style=for-the-badge&logo=angular&logoColor=white" alt="Desafio DIO" />
  <img src="https://img.shields.io/badge/Angular-17.3+-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular 17" />
  <img src="https://img.shields.io/badge/TypeScript-5.4+-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/RxJS-7.8+-B7178C?style=for-the-badge&logo=reactivex&logoColor=white" alt="RxJS" />
  <img src="https://img.shields.io/badge/Theme-Dark%20Mode-151821?style=for-the-badge" alt="Dark Theme" />
</p>

Projeto desenvolvido como solução para o desafio **"Criando um Blog com Angular"** da [DIO (Digital Innovation One)](https://www.dio.me/).

A proposta original do desafio consiste em construir a estrutura de um blog moderno utilizando componentes reutilizáveis, comunicação via `@Input()`, roteamento parametrizado (`/content/:id`) e renderização de dados mockados. Este projeto foi atualizado e expandido para o **Angular 17+**, incorporando recursos modernos como controle de fluxo nativo (`@if`, `@for`, `@empty`), filtros de categoria, busca em tempo real e um design system *Dark Theme* com visual premium.

---

## 🎯 Objetivos do Desafio Atendidos

- [x] **Componentização**: Criação de componentes modulares (`big-card`, `small-card`, `menu-bar`, `menu-title`).
- [x] **Comunicação entre Componentes**: Passagem de dados dinâmica utilizando `@Input()`.
- [x] **Roteamento Dinâmico**: Navegação com rotas parametrizadas (`content/:id`) consumindo o `ActivatedRoute`.
- [x] **Camada de Dados**: Estruturação de dados mockados (`dataFake.ts`) simulando uma base de artigos de notícias.
- [x] **Diferenciais Implementados**:
  - Atualização para **Angular 17.3+** e **TypeScript 5.4+**.
  - Novo controle de fluxo moderno (`@if`, `@for`, `@empty`).
  - Criação de `ArticleService` e tipagem com `Article` interface.
  - Busca de artigos em tempo real e filtros dinâmicos por categoria.
  - Fallback 404 para artigos inexistentes e seção "Leia Também" com recomendações.

---

## ✨ Funcionalidades do Blog

- 🚀 **Controle de Fluxo Moderno**: Sintaxe declarativa do Angular 17 sem necessidade de diretivas legadas (`*ngIf` / `*ngFor`).
- 🔍 **Busca em Tempo Real**: Filtragem instantânea por título e descrição dos artigos com feedback visual de estado vazio (*Empty State*).
- 🏷️ **Filtros por Categoria**: Navegação fluida entre categorias (*Todos, Cinema, Séries, Quadrinhos, Tech*).
- 📱 **Design Responsivo & Dark Theme**: Interface inspirada nos melhores portais de entretenimento com tipografia Google Fonts (*Plus Jakarta Sans* e *Space Grotesk*), efeitos de *glassmorphism* e micro-animações.
- 📖 **Página de Leitura Completa**: Exibição de autor, data de publicação, tempo de leitura estimado e artigos relacionados no rodapé.
- 🛡️ **Tratamento de Erros 404**: Estado visual amigável quando um artigo com ID inexistente é acessado.

---

## 🛠️ Tecnologias Utilizadas

- **[Angular 17.3+](https://angular.dev/)**: Framework web SPA moderno.
- **[TypeScript 5.4+](https://www.typescriptlang.org/)**: Tipagem estática (Target: ES2022).
- **[RxJS 7.8+](https://rxjs.dev/)**: Programação reativa e observables de rota.
- **HTML5 & CSS3 Vanilla**: Variáveis CSS, flexbox/grid e transições suaves.
- **Google Fonts**: Fontes *Plus Jakarta Sans* & *Space Grotesk*.

---

## 📁 Estrutura de Diretórios

```plaintext
src/
├── app/
│   ├── components/            # Componentes visuais reutilizáveis
│   │   ├── big-card/          # Card principal em destaque com zoom e badges
│   │   ├── small-card/        # Cards secundários de notícias com efeito slide
│   │   ├── menu-bar/          # Barra de navegação com logotipo e redes sociais
│   │   └── menu-title/        # Banner estilizado de cabeçalho do portal
│   ├── pages/                 # Componentes de páginas roteadas
│   │   ├── home/              # Página inicial com busca, filtros e listagem
│   │   └── content/           # Página de detalhes com leitura e recomendados
│   ├── models/
│   │   └── article.model.ts   # Interface TypeScript Article
│   ├── services/
│   │   └── article.service.ts # Serviço central de gerenciamento e filtragem
│   ├── data/
│   │   └── dataFake.ts        # Mock de dados com artigos completos
│   ├── app-routing.module.ts  # Configuração de rotas da aplicação
│   ├── app.module.ts          # Módulo principal da aplicação
│   ├── app.component.ts       # Componente raiz
│   ├── app.component.html
│   └── app.component.css
├── assets/                    # Recursos e imagens estáticas
├── styles.css                 # Estilos globais e tokens de design Dark Theme
└── main.ts                    # Ponto de entrada (Bootstrap)
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js**: Versão `18.19+`, `20.9+` ou `22.0+`
- **NPM**: Versão `9.0+`

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MariaaPcsa/angular-blog.git
   cd angular-blog
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

4. **Acesse a aplicação no navegador:**
   ```text
   http://localhost:4200/
   ```

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm start` | Executa o servidor de desenvolvimento em `http://localhost:4200/` |
| `npm run build` | Compila o bundle otimizado de produção na pasta `dist/` |
| `npm run watch` | Executa a compilação em modo watch para desenvolvimento |
| `npm run test` | Executa os testes unitários via Karma/Jasmine |

---

## 👩‍💻 Autora

Desenvolvido por **Maria Aparecida**.

- **GitHub**: [@MariaaPcsa](https://github.com/MariaaPcsa?tab=repositories)
- **LinkedIn**: [Maria Aparecida dos Santos](https://www.linkedin.com/in/maria-aparecida-c-dos-santos-42280a185)

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE). Sinta-se livre para utilizar, modificar e contribuir!
