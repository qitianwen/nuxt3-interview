 <script setup lang='ts'>
// 面经列表
const list = ref<any[]>([])
const getList = async() => {
  // axios 问题 ， 不会等服务端渲染完成，直接返回空页面， 对 SEO 不友好
const res = await request({
    url: '/interview/query',
    method: 'get',
    headers:{
      Authorization:`Bearer ${getToken()}`
    }
  })
  // console.log('res 面经列表 ----->  ', res.data.rows);
  list.value.push(...res.data.rows)
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