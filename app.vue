<script setup lang="ts" >
// 通过 useSeoMeta()函数来设置页面的 SEO 信息（无需导入）
useSeoMeta({
  title:"首页",
  description:"首页描述",
  keywords:"关键字"
})
</script>
<template>
  <!-- <div>
    <NuxtWelcome />
  </div> -->
  <!-- NuxtLink 相当于 RouterLink 组件 ，作为路由跳转 -->
  <NuxtLink to="/">主页</NuxtLink><br>
  <NuxtLink to="/user">用户页</NuxtLink><br>
  <NuxtLink to="/article">详情页</NuxtLink><br>
  <NuxtLink to="/article/detail">用户详情页</NuxtLink>
  <!-- NuxtPage 相当于 RoutterView 组件 ， 作为路由出口  默认首页为 pages中的index.vue -->
  <NuxtPage/>
</template>
