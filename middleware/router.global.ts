// 1,定义一个全局路由中间件
export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  // 2，如果去的是  / ，我们重定向到 /article
  if (to.path === "/") {
    return navigateTo("/article")
  }
})
