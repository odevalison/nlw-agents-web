# NLW Agents

Projeto desenvolvido durante o evento Next Level Week da Rocketseat.

## 🏗 Arquitetura

O projeto segue uma arquitetura modular com:

- Separação de responsabilidades entre rotas, schemas e conexão com banco
- Validação de schemas com Zod para type safety
- Gerenciamento de estado com React Query
- Validação de variáveis de ambiente centralizadas

## ⚙️ Setup e Configuração

### Pré-requisitos

- Node.js (versão com suporte a --experimental-strip-types)
- npm/yarn para gerenciamento de pacotes

### 1. Clone o repositório
```bash
git clone [url-do-repositorio]
cd web
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3333
```

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

## 🛠 Tecnologias

- React 19.1.0 (frontend framework)
- TypeScript (linguagem)
- Vite (build tool e dev server)
- TailwindCSS 4.1.11 (estilização)
- React Router DOM 7.6.3 (navegação)
- TanStack React Query 5.81.5 (gerenciamento de estado e cache de APIs)
- Radix UI (componentes headless)
- Lucide React (ícones)
- Biome (linter e formatter)

## 📋 Padrões de Projeto

- Component-based architecture (React)
- File-based routing com React Router
- Custom hooks pattern (@tanstack/react-query)
- Variant-based components (class-variance-authority)
- Composition pattern (Radix Slot)
- Path aliasing (@/ para src/)
- Server state management com React Query 