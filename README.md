# Portfólio, Cleidson Ribeiro

Site estático (HTML, CSS e JavaScript puros), publicado com GitHub Pages em
https://c-ribeiro-dev.github.io/

## Ver localmente
Abra o `index.html` no navegador, ou rode `python -m http.server 3000` na pasta
e acesse http://localhost:3000.

## Publicar (primeira vez)
1. No GitHub, crie um repositório **público** chamado `c-ribeiro-dev.github.io`, na conta C-Ribeiro-Dev.
2. Na pasta do projeto:
   ```bash
   git init -b main
   git add .
   git commit -m "Primeira versão do portfólio"
   git remote add origin https://github.com/C-Ribeiro-Dev/c-ribeiro-dev.github.io.git
   git push -u origin main
   ```
3. No repositório: **Settings → Pages → Build and deployment**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`, e salve.
4. Em 1 a 2 minutos o site abre em https://c-ribeiro-dev.github.io/

## Atualizar depois
Edite os arquivos, depois:
```bash
git add .
git commit -m "Descreva a mudança"
git push
```
O GitHub Pages republica sozinho em cerca de 1 minuto.

## Onde editar
- Textos, projetos e links: `index.html`
- Cores e layout: `css/style.css` (variáveis no topo)
- Se o repositório dos Acólitos ficar público, adicione o link no card do projeto em `index.html`.
