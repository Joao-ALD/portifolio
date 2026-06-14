# 🎮 Quem Sou Eu? - Portfólio Cyberpunk

Portfólio pessoal desenvolvido para a disciplina **Experiência Criativa e IA** com tema Cyberpunk e design futurista.

## 🚀 Demo

Acesse o portfólio: [https://seuusuario.github.io/portfolio](https://seuusuario.github.io/portfolio)

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html          # Página principal (HTML5 semântico)
├── style.css           # Estilização Cyberpunk com CSS3
├── script.js           # Interações e efeitos JavaScript
├── README.md           # Documentação do projeto
└── imagens/            # Assets visuais
    ├── foto.jpg        # Foto de perfil
    ├── construct.png   # Preview do projeto Construct
    └── processing.png  # Preview do projeto Processing
```

## 🎨 Características

- **Design Cyberpunk**: Paleta neon (Cyan, Magenta, Green) com fundos escuros
- **HTML5 Semântico**: Tags `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **CSS3 Moderno**: Flexbox, Grid, clip-path, gradientes e animações
- **JavaScript Vanilla**: Interações funcionais sem dependências
- **Acessibilidade**: Contraste WCAG, atributos ARIA, reduced motion
- **Responsivo**: Layout adaptável para mobile, tablet e desktop

## 🛠️ Tecnologias

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript (ES6+)
- Google Fonts (Orbitron, Rajdhani)

## 📦 Seções Implementadas

✅ **Header**: Avatar, nome e tagline  
✅ **Sobre mim**: 4 parágrafos descritivos  
✅ **Curiosidades**: Lista com 6 items (1 secreto)  
✅ **Hobbies**: Grid com 4 cards ilustrados  
✅ **Disciplinas Favoritas**: Grid com 4 matérias  
✅ **Meus Projetos**: 2 cards (Construct + Processing)  
✅ **Footer**: Copyright 2026 e redes sociais  

## 🚀 Deploy no GitHub Pages

### 1. Criar Repositório

```bash
git init
git add .
git commit -m "Initial commit - Portfólio Cyberpunk"
git branch -M main
git remote add origin https://github.com/seuusuario/portfolio.git
git push -u origin main
```

### 2. Ativar GitHub Pages

1. Acesse: `Settings` > `Pages`
2. Source: `Deploy from a branch`
3. Branch: `main` > `/ (root)`
4. Clique em `Save`

### 3. Aguardar Deploy

O site estará disponível em 2-3 minutos em:  
`https://seuusuario.github.io/portfolio`

## 📝 Personalizações Necessárias

### Imagens (obrigatório)

Adicione na pasta `imagens/`:
- `foto.jpg` - Sua foto de perfil (recomendado: 400x400px)
- `construct.png` - Screenshot do projeto Construct
- `processing.png` - Screenshot do projeto Processing

### Dados Pessoais (index.html)

1. **Linha 27**: Altere `João Vítor` para seu nome
2. **Linha 27**: Altere letra no `data-text` e dentro do `<h1>`
3. **Linha 28**: Personalize a tagline
4. **Linhas 35-42**: Edite parágrafos "Sobre mim"
5. **Linhas 50-70**: Customize curiosidades
6. **Linhas 105-112**: Ajuste disciplinas favoritas
7. **Linhas 125 e 149**: Adicione URLs reais dos projetos
8. **Linhas 166-178**: Atualize links de redes sociais

### Links dos Projetos

Edite os atributos `href` dos links:
- **Construct**: Linha 132 (`<a href="#"` → `<a href="URL_DO_PROJETO"`)
- **Processing**: Linha 156 (`<a href="#"` → `<a href="URL_DO_PROJETO"`)

### Redes Sociais (footer)

- **Email**: Linha 168 (`mailto:joao@exemplo.com`)
- **GitHub**: Linha 172 (`https://github.com/seuusuario`)
- **LinkedIn**: Linha 176 (`https://linkedin.com/in/seuusuario`)

## 🎯 Funcionalidades Interativas

### Botão Segredo
Clique em **"DESBLOQUEAR_SEGREDO.exe"** para revelar a curiosidade oculta com efeito glitch.

### Easter Egg no Console
Abra o DevTools (`F12`) e digite `reveal()` para ativar um comando secreto.

### Efeito Glitch no Título
Passe o mouse sobre seu nome no header para ver o efeito de terminal.

### Microinterações
- Hover nos cards com translação e brilho
- Parallax sutil no background ao scroll
- Animações de reveal nas seções

## ✅ Critérios de Avaliação Atendidos

- ✅ HTML semântico completo
- ✅ CSS moderno com variáveis e efeitos
- ✅ JavaScript funcional (botão interativo)
- ✅ Acessibilidade (ARIA, contraste, reduced motion)
- ✅ Design Cyberpunk autêntico
- ✅ Estrutura preparada para GitHub Pages
- ✅ 2 cards de projetos (Construct + Processing)
- ✅ Placeholders visuais em SVG para imagens

## 📄 Licença

Projeto educacional desenvolvido para a disciplina Experiência Criativa e IA - 2026

---

**Desenvolvido com 💜 e ⚡ por João Vítor**
