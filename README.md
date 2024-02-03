# Nuxt 3 Minimal Starter

useSeoMeta 设置 title 值 可以优化 seo 搜索
剪切板：ctrl shift v
下载项目： https://github.com/nuxt/starter/tree/v3
Nuxt 地址： https://nuxt.com/docs/getting-started/routing
vant4 -vue3 : https://vant-ui.github.io/vant/#/zh-CN
面筋：
接口：https://apifox.com/apidoc/project-934563/api-20384521
md 文档：https://megasu.gitee.io/front-end-solutions/solutions/nuxt.html#%E9%9D%99%E6%80%81%E7%BB%93%E6%9E%84-2

- [在线体验](https://nuxt-interview.vercel.app/register)
- [参考代码](https://gitee.com/Megasu/nuxt-interview)
- [接口文档地址](https://www.apifox.cn/apidoc/project-934563/api-20384515)

使用 vant4
pnpm i @vant/nuxt

TS 识别不了，报警告，可以 使用 ctrl + p > 点击 Volar:Restart Vue server 重启 Volar

布局 layout： https://nuxt.com/docs/guide/directory-structure/layouts Nuxt 布局
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

创建动态路由页面：
pages/detail.vue => pages/detail/[id].vue

其中 [id].vue 表示动态路由
获取页码参数 [id].vue useRoute.params.id

## 注册页

使用组件，在 Nuxt3 中无需导入。

- van-nav-bar
- van-form
- van-field
- van-button

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
