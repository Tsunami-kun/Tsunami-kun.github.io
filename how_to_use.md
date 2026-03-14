在这个目录里执行：

  cd /home/tsunami/opendex_project/official_homepage
  npm install
  npm run dev

  然后打开 http://localhost:4321。

  如果你想让手机或同一局域网设备一起看：

  npm run dev:host

  如果想看接近线上产物的效果：

  npm run build
  npm run preview

  如何推到 GitHub 并部署
  先说关键点：当前 official_homepage 不是独立 git 仓库，而是上层 /home/tsunami/opendex_project 里的一个未跟踪子目录。所以最干净的做法，是把这个目录单独作为一个 GitHub 仓库发布。这样我加的 deploy.yml 才会生效。

  在本目录执行：

  cd /home/tsunami/opendex_project/official_homepage
  git init
  git add .
  git commit -m "Initial homepage"
  git branch -M main
  git remote add origin git@github.com:<你的用户名>/<你的仓库名>.git
  git push -u origin main

  然后去 GitHub 仓库里设置：

  1. Settings
  2. Pages
  3. Build and deployment
  4. Source 选择 GitHub Actions

  之后每次 push 到 main，GitHub Pages 会自动部署。

  部署地址规则：

  - 如果仓库名是 <username>.github.io，地址就是 https://<username>.github.io/
  - 如果仓库名是普通项目名，比如 official_homepage，地址就是 https://<username>.github.io/official_homepage/

  这个仓库的 astro.config.mjs 已经做了 GitHub Pages 的 base 自动处理，所以 project repo 和 user repo 都能兼容。