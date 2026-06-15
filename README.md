# 🎮 Portfólio estilo Cyberpunk 

Portfólio pessoal desenvolvido para a disciplina **Experiência Criativa e IA** com design inspirado na HUD e interface de inventário do Cyberpunk 2077.

## 🚀 Demo

Acesse o portfólio: [https://Joao-ALD.github.io/portfolio](https://Joao-ALD.github.io/portfolio)

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html          # Página principal (HTML5 semântico)
├── style.css           # Estilização Cyberpunk 2077 HUD
├── script.js           # Sistema de abas e interações
├── README.md           # Documentação do projeto
└── imagens/            # Assets visuais
    ├── foto.jpg        # Foto de perfil
    ├── construct.png   # Preview do projeto Construct
    └── processing.png  # Preview do projeto Processing
```

## 🎨 Características de Design

### Réplica Fiel da HUD do Cyberpunk
- **Sistema de Abas**: Navegação inspirada no menu de inventário do jogo com sublinhado amarelo característico
- **Paleta Oficial**: Amarelo (#fcee0a), Vermelho (#ff0055), Ciano (#00f0ff) sobre fundos escuros
- **Bordas Chanfradas**: Uso extensivo de `clip-path: polygon()` para cantos cortados
- **Scanlines CRT**: Efeito de linhas de varredura persistente e sutil
- **Molduras Tecnológicas**: Cantos decorativos em todos os containers principais
- **Tipografia**: Orbitron (títulos) e Rajdhani (corpo) via Google Fonts

## 🛠️ Tecnologias

- HTML5 Semântico
- CSS3 (Custom Properties, Grid, Flexbox, clip-path)
- JavaScript Vanilla (ES6+)
- Google Fonts (Orbitron, Rajdhani)

## 📦 Seções Implementadas

✅ **Header/Profile**: Avatar com moldura, nome, status do sistema e estatísticas  
✅ **Sistema de Abas**: 5 abas navegáveis (DATABASE, SHARDS, INTERESSES, SKILL TREE, INVENTÁRIO)  
✅ **DATABASE**: 4 parágrafos biográficos com marcadores visuais  
✅ **SHARDS**: Lista de 6 curiosidades (1 criptografado) com botão de descriptografar  
✅ **INTERESSES**: Grid de 4 hobbies estilizados como slots de inventário  
✅ **SKILL TREE**: 4 disciplinas com barras de progresso animadas  
✅ **INVENTÁRIO**: 2 cards de projetos (Construct + Processing) com molduras e qualidade (Lendário/Épico)  
✅ **Footer HUD**: Comandos de teclado simulados e links sociais  

## 🎯 Funcionalidades Interativas

### Sistema de Abas (Tab Navigation)
Navegação fluida entre seções com transições suaves e suporte completo a teclado (Arrow Left/Right, Tab, ESC).

### Botão "Descriptografar Shard"
Revela a curiosidade oculta com:
- Animação de processamento
- Efeito typewriter no texto revelado
- Scroll automático para o item desbloqueado
- Possibilidade de re-criptografar

### Suporte a Teclado
- `ESC`: Retorna à primeira aba
- `Tab`: Navega entre abas
- `Arrow Left/Right`: Navegação nas abas quando focadas

### Easter Eggs
- **Console**: Digite `hackSystem()` no DevTools para executar protocolo especial
- **Glitch no Nome**: O nome do perfil ocasionalmente sofre glitch visual aleatório
- **Skill Bars**: Animação de preenchimento quando entram no viewport

## 🚀 Deploy no GitHub Pages

### 1. Criar Repositório

```bash
git init
git add .
git commit -m "Initial commit - Portfólio Cyberpunk 2077 HUD"
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

Crie a pasta `imagens/` e adicione:
- `foto.jpg` - Sua foto de perfil (recomendado: 400x400px, formato quadrado)
- `construct.png` - Screenshot do projeto Construct
- `processing.png` - Screenshot do projeto Processing

### Dados Pessoais (index.html)

**Localização das modificações:**

1. **Linha 39**: Altere `JOÃO VICTOR` para seu nome
2. **Linha 40**: Personalize o status do sistema
3. **Linhas 42-46**: Ajuste as estatísticas (LVL, EXP, CREDIBILIDADE)
4. **Linhas 76-97**: Edite os 4 parágrafos da seção DATABASE
5. **Linhas 109-141**: Customize as 6 curiosidades (shards)
6. **Linhas 172-209**: Ajuste os 4 hobbies
7. **Linhas 223-258**: Modifique as 4 disciplinas favoritas
8. **Linhas 273 e 316**: Adicione URLs reais dos projetos (`href="#"`)
9. **Linhas 376-384**: Atualize e-mail e links de redes sociais

### Links dos Projetos

Edite os atributos `href` nas linhas:
- **Construct**: Linha 294 (`<a href="#"` → `<a href="URL_REAL"`)
- **Processing**: Linha 337 (`<a href="#"` → `<a href="URL_REAL"`)

### Redes Sociais (footer)

- **Email**: Linha 376 (`mailto:joao@exemplo.com`)
- **GitHub**: Linha 379 (`https://github.com/seuusuario`)
- **LinkedIn**: Linha 382 (`https://linkedin.com/in/seuusuario`)

## ✅ Critérios de Avaliação Atendidos

- ✅ HTML5 semântico completo (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- ✅ CSS3 moderno com variáveis, clip-path, gradientes e animações
- ✅ JavaScript funcional com sistema de abas completo e botão interativo
- ✅ Acessibilidade (ARIA, navegação por teclado, prefers-reduced-motion, contraste WCAG)
- ✅ Design fiel à HUD do Cyberpunk 2077
- ✅ Estrutura preparada para GitHub Pages com caminhos relativos
- ✅ 2 cards de projetos estruturados (Construct + Processing)
- ✅ Placeholders visuais animados para imagens

## 🎮 Elementos da HUD do Cyberpunk 2077 Implementados

- ✅ Sistema de abas com sublinhado amarelo e marcadores nos cantos
- ✅ Molduras com cantos chanfrados via clip-path
- ✅ Decorações de canto em formato de "L" nos containers principais
- ✅ Paleta de cores oficial (amarelo, ciano, vermelho)
- ✅ Scanlines CRT sutis em toda a página
- ✅ Slots de inventário com qualidade (Lendário, Épico, Raro, Comum)
- ✅ Barras de progresso nas skills com gradiente ciano-amarelo
- ✅ Comandos de teclado no footer (ESC, TAB, ENTER)
- ✅ Tipografia geométrica em caixa alta
- ✅ Efeitos de glitch e animações sutis

## 📄 Licença

Projeto educacional desenvolvido para a disciplina Experiência Criativa e IA - 2026

---

**SISTEMA OPERACIONAL: ATIVO // DESENVOLVIDO POR JOÃO VICTOR // 2026**
