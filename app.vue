<script setup lang="ts" >
// 通过 useSeoMeta()函数来设置页面的 SEO 信息（无需导入）
// 标题模板基础用法：
// useSeoMeta({
//   title:"首页",
//   description:"首页描述",
//   keywords:"关键字"
// })
// 可以使用该titleTemplate选项提供动态模板来自定义站点标题
useSeoMeta({
  // 标题模板函数，接收一个参数 title ，返回一个字符串
  titleTemplate:(title) => {
    return title?`${title}_黑马面经`:'黑马面筋-找工作神器|笔试题库|面试经验'
  },
  description:`求职之前，先上黑马面经，就业找工作一站解决。全面提升求职竞争力，找到好工作，拿到好offer。`,
  keywords:"面试，笔试",
  author: '黑马程序员'
})
</script>
<template>
  <!-- <div>
    <NuxtWelcome />
  </div> -->
  <!-- NuxtLink 相当于 RouterLink 组件 ，作为路由跳转 -->
  <!-- <NuxtLink to="/">主页</NuxtLink><br> -->
  <!-- <NuxtLink to="/article">详情页</NuxtLink><br>
  <NuxtLink to="/article/detail">用户详情页</NuxtLink> -->
  <!-- NuxtPage 相当于 RoutterView 组件 ， 作为路由出口  默认首页为 pages中的index.vue -->
    <NuxtPage />
  <!-- <NuxtPage/> -->
</template>
<style>
:root{
  --van-primary-color:#ff7d00!important;
}
</style>