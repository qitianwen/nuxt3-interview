// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
