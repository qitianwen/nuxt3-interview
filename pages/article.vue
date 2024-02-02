 <script setup lang='ts'>
// const layout = "custom"
// definePageMeta({
//   layout: false,
// })
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
    </div>
  </NuxtLayout>
</div>
 </template>



 <style scoped>
h1{
  size: 24px;
}
 </style>