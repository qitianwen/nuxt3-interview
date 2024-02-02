// 白名单列表，记录无需权限访问的所有页面
const whiteLit = ["/login", "/register", "/test"] //一般会 列表页面 文章详情页面也可以访问 这里不
// 1,定义一个全局路由中间件
export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  // 2，如果去的是  / ，我们重定向到 /article
  if (to.path === "/") {
    return navigateTo("/article")
  }
  // 路由 鉴权  设置白 名单
  const token = getToken()
  // 路由 鉴权 - 如果去的页面不在白 名单中 ， 我们需要判断用户是否登录
  if (!whiteLit.includes(to.path) && !token) {
    // 没有登录跳转到登录页
    return navigateTo("/login")
  }
})
