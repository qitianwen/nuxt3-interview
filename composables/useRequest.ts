/**
 * 封装useFetch
 * 请求封装
 * @param url 请求地址
 * @param options 请求配置
 */
// useFetch 类型 声明
import type { UseFetchOptions } from "nuxt/app"
// 添加类型  -- 泛型 传入啥 就是 啥类型
export const useRequest = async <T = any>(
  url: string,
  options?: UseFetchOptions<any>
) => {
  // data 是请求返回的数据（ref类型）
  // error 是错误对象（也是ref类型）
  const { data, error } = await useFetch<any>(url, {
    // baseURL: "http://interview-api-t.itheima.net/h5",
    // Nuxt 发布 需要 https协议
    baseURL: "https://interview-api-t.itheima.net/h5",
    headers: {
      Authorization: `Bearer ${getToken()}`
    },
    ...options
  })
  // console.log("res  返回useRequest----->  ", data)
  // 如果有 错误对象，就抛出错误，返回reject 防止 await 后续代码继续执行
  if (error.value) {
    return Promise.reject(error.value)
  } else {
    // as 断言  ， 告诉ts data.value.data是 T 类型
    return data.value.data as T
  }
}
