const KEY = "hmmj-token"
// Nuxt没有localStorage 有useCookie 可以持久化储存token
// useCookie()返回值 是一个ref对象 ， 所以我们可以直接使用 .value来获取 和设置 cookie的值
/**
 *  获取 token
 * */
export const getToken = () => {
  return useCookie(KEY).value
}

// 设置
/**
 * 设置token
 * @param newToken 为token值
 */
export const setToken = (newToken: string) => {
  // maxAge 设置cookie 的过期时间为 14天
  useCookie(KEY, { maxAge: 60 * 60 * 24 * 14 }).value = newToken
}

// 删除
/**
 * 删除token
 */
export const delToken = () => {
  useCookie(KEY).value = ""
}
