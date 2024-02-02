// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 检测
  // devtools: { enabled: true },
  devtools: { enabled: false },
  // 模块  --- vant4
  modules: ["@vant/nuxt"],
  // 移动端适配  vw适配
  postcss: {
    plugins: {
      "postcss-px-to-viewport": {
        viewportWidth: 375
      }
    }
  }
})
