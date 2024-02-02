/**
 * 封装useFetch
 * 请求封装
 * @param url 请求地址
 * @param options 请求配置
 */
// useFetch 类型 声明
import type { UseFetchOptions } from "nuxt/app"
export const useRequest = async (
  url: string,
  options?: UseFetchOptions<any>
) => {
  // data 是请求返回的数据（ref类型）
  // error 是错误对象（也是ref类型）
  const { data, error } = await useFetch(url, {
    baseURL: "http://interview-api-t.itheima.net/h5",
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
    return data.value.data
  }
}
