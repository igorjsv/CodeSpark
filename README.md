# 🚀 CodeSpark Studio - Website Institucional

Bem-vindo ao repositório do site institucional da CodeSpark Studio! Este projeto é a materialização digital da nossa missão: transformar ideias em experiências digitais memoráveis com excelência, ética e inovação.

O site foi desenvolvido para ser uma vitrine de nossas soluções, um reflexo de nossa cultura e um ponto de contato direto e humanizado com nossos clientes e parceiros.

---

## 📋 Índice

* [Sobre a CodeSpark Studio](#sobre-a-codespark-studio)
* [✨ Funcionalidades Principais](#-funcionalidades-principais)
* [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [📂 Estrutura do Projeto](#-estrutura-do-projeto)
* [🎨 Manual de Design (Design System)](#-manual-de-design-design-system)
    * [Paleta de Cores](#paleta-de-cores)
    * [Tipografia](#tipografia)
    * [Componentes](#componentes)
* [📱 Layout Responsivo](#-layout-responsivo)
* [⚙️ Como Executar o Projeto](#️-como-executar-o-projeto)
* [API de Depoimentos](#api-de-depoimentos)

---

## Sobre a CodeSpark Studio

A **CodeSpark Studio** atua no segmento de tecnologia, especializando-se no desenvolvimento de soluções digitais sob medida. Nascemos da paixão de um grupo de desenvolvedores dedicados a criar experiências únicas, eficientes e que impactam positivamente pessoas e negócios. Acreditamos que a tecnologia é a ponte fundamental entre ideias e realizações.

**Nossa Missão:** Transformar ideias em experiências digitais memoráveis com excelência, ética e inovação.

Nossos serviços incluem:
* Apps Mobile
* Sites e Sistemas Web
* Integrações e APIs
* UX/UI Design
* Consultoria em Tecnologia
* Otimização de Performance
* Manutenção e Suporte
* Hospedagem Gerenciada
* Banco de Dados e Backup
* Auditoria e Métricas

---

## ✨ Funcionalidades Principais

* **Conteúdo Dinâmico com API:** Seção de depoimentos totalmente dinâmica, alimentada por uma API REST simulada. Novos depoimentos podem ser enviados pelo site e são exibidos em tempo real.
* **Design Totalmente Responsivo:** Experiência de usuário otimizada para qualquer dispositivo, utilizando a abordagem **Mobile-First**.
* **Interatividade e Animações:** Efeitos visuais modernos e sutis (hover, transições, 3D) que criam uma navegação fluida e engajadora.
* **Formulários Assíncronos:** Formulários de Contato e Orçamento que enviam dados sem recarregar a página, fornecendo feedback instantâneo ao usuário.
* **Navegação Intuitiva:** Menu "hambúrguer" em dispositivos móveis com funcionalidade de "clicar fora para fechar", garantindo excelente usabilidade.

---

## 💻 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web modernas e focadas em performance e facilitar a manutenção.

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estruturação semântica do conteúdo para melhor acessibilidade e SEO. |
| **CSS3** | Estilização avançada, animações, transições e layout responsivo. |
| **JavaScript (ES6+)** | Manipulação do DOM, interatividade, requisições a API e lógica dos componentes. |
| **JSON Server** | Simulação de uma API RESTful para gerenciar os depoimentos de forma dinâmica. |

---

## 📂 Estrutura do Projeto

A estrutura de arquivos foi organizada de forma modular para facilitar a manutenção e escalabilidade.
/
├── assets/
│   ├── css/
│   │   ├── style.css         # Estilos principais (cores, fontes, componentes)
│   │   └── responsivo.css    # Media Queries para o layout responsivo
│   ├── js/
│   │   ├── script.js         # Script global (controle do menu mobile)
│   │   ├── depoimentos.js    # Lógica do carrossel e fetch da API
│   │   ├── orcamento.js      # Lógica do formulário de orçamento e popup
│   │   └── avaliacao.js      # Lógica do formulário de avaliação (envio para API)
│   └── images/               # Imagens e ícones do projeto
├── db.json                   # Banco de dados para o JSON Server
├── index.html                # Página inicial
├── sobre.html
├── servicos.html
├── portfolio.html
└── contato.html
* **HTML:** Utiliza uma estrutura de template com `header` e `footer` compartilhados, garantindo consistência.
* **CSS:** Separado em `style.css` para a identidade visual e `responsivo.css` para as adaptações de tela, mantendo o código limpo.
* **JavaScript:** Scripts divididos por funcionalidade e carregados apenas nas páginas necessárias, otimizando a performance.

---

## 🎨 Manual de Design (Design System)

Toda a identidade visual do projeto segue um guia de estilo consistente.

### Paleta de Cores

| Uso | Cor | Hexadecimal |
| :--- | :--- | :--- |
| **Primária** | Verde água | `#44CCCC` |
| **Secundária** | Coral | `#FF6B54` |
| **Fundo** | Off-white | `#EDEDED` |
| **Texto Principal** | Preto | `#000000` |
| **Texto Botão** | Branco | `#FFFFFF` |
| **Texto Contato**| Cinza | `#888888` |

### Tipografia

* **Fonte Principal:** Inter (Sans-serif)
* **Títulos:** 48px, 38px, 36px, 32px
* **Subtítulos:** 32px, 28px, 24px, 20px
* **Parágrafos:** 20px, 18px, 16px, 15px, 14px
* **Botões e Corpo:** 21px, 18px, 16px

### Componentes

* **`.btn` (Botão Primário):** Fundo verde-água (`#44CCCC`). No `:hover`, escurece para `#33aaaa`.
* **`nav` (Links de Navegação):** No `:hover`, uma linha inferior animada surge da esquerda para a direita.
* **`.card` (Card de Portfólio):** Efeito 3D no `:hover` que levanta e inclina o card.
* **`.service-card` (Card de Serviço):** Aumenta de escala (`scale(1.05)`) no `:hover`.
* **`.card-info` (Card "Sobre Nós"):** Animação de entrada `fadeIn` escalonada com `animation-delay`.
* **`input, select, textarea` (Campos de Formulário):** Estilo padronizado para consistência visual.

---

## 📱 Layout Responsivo

A estratégia adotada foi **Mobile-First**, garantindo que o site funcione perfeitamente em telas pequenas e, em seguida, se adapte a telas maiores.

* **Breakpoints Principais:** `< 600px` (Mobile) e `> 1050px` (Desktop).

| Dispositivo | Comportamento |
| :--- | :--- |
| **Desktop (`>1050px`)** | Menu horizontal visível, grids com 3 colunas, carrossel exibindo múltiplos cards. |
| **Mobile (`<600px`)** | Menu "hambúrguer" vertical, grids de 1 coluna para fácil rolagem, carrossel exibindo um card por vez. |

---

## ⚙️ Como Executar o Projeto

Para visualizar e interagir com o projeto localmente, siga os passos abaixo. Você precisará ter o [Node.js](https://nodejs.org/) instalado para usar o `json-server`.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/CodeSpark.git](https://github.com/seu-usuario/CodeSpark.git)
    
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd codespark-website
    ```

3.  **Instale o `json-server` (se ainda não tiver):**
    ```bash
    npm install -g json-server
    ```

4.  **Inicie o servidor da API:**
    Este comando irá "observar" o arquivo `db.json` e criar os endpoints da API.
    ```bash
    json-server --watch db.json
    ```
    O terminal deve indicar que o servidor está rodando em `http://localhost:3000`.

5.  **Abra o arquivo `index.html` no seu navegador:**
    Você pode simplesmente clicar duas vezes no arquivo ou usar uma extensão como o "Live Server" no VSCode.

Agora o site estará totalmente funcional, incluindo a busca e o envio de depoimentos para a API local.

---

## API de Depoimentos

A interatividade dos depoimentos é gerenciada por uma API simulada.

* **Endpoint:** `http://localhost:3000/depoimentos`
* **Método `POST`:** O formulário de avaliação na página de orçamento envia um novo depoimento para este endpoint.
* **Método `GET`:** O carrossel na página inicial busca a lista de depoimentos deste endpoint para exibi-los dinamicamente.

---

Feito com ❤️ pela **CodeSpark Studio**.
