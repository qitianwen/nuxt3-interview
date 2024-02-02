 <script setup lang='ts'>
// 面经列表
const list = ref<any[]>([])
// 获取面经列表
const getList = async() => {
  // 这里 axios 不会等请求结束，服务器渲染完成后返回前端 渲染前端
  // axios 问题 ， 不会等服务端渲染完成，直接返回空页面， 对 SEO 不友好
// const res = await request({
//     url: '/interview/query',
//     method: 'get',
//     headers:{
//       Authorization:`Bearer ${getToken()}`
//     }
//   })
//   // console.log('res 面经列表 ----->  ', res.data.rows);
//   list.value.push(...res.data.rows)
// 通过 useFetch 获取数据 ，会等服务器端渲染完成后 ，返回页面给前端  ， 并且前端不会再发送多余的请求（会智能判断前端后端发送请求）
// const result = await useFetch<any>('/interview/query',{
//   baseURL:"http://interview-api-t.itheima.net/h5",
//   method:'get',
//   headers:{
//     Authorization:`Bearer ${getToken()}`
//   }
//   // ,get: query:{xxx}   params:{xxx}    post: body:{xxx}
//  })
// //  console.log('result 返回 ----->  ', result.data.value.data.rows);
//  list.value.push(...result.data.value.data.rows)
// 使用 封装的useRequest 
 const res = await useRequest('/interview/query',{params:{pageSize:6}})
//  console.log('123  ----->  ', res);
 list.value.push(...res.rows)
}
getList()
 </script>

 <template>
  <div>
        <!-- 如果您在页面中使用<NuxtLayout>，请确保它不是根元素（或禁用布局/页面转换）。 -->
   <NuxtLayout name="tabbar">
     <div>
     欢迎  Nuxt
     <van-button type="primary">主要按钮</van-button>
     <van-button type="success">成功按钮</van-button>
     <h1>首页</h1>
     <div v-for="item in list" :key="item.id">
      {{item.stem}}
     </div>
    </div>
  </NuxtLayout>
</div>
 </template>



 <style scoped>
h1{
  size: 24px;
}
 </style>