<script setup lang="ts">
import type {ArticleDetail} from '@/types/article'
// 获取页码参数  - 动态路由参数   
const {params} = useRoute()

// 根据页面的参数获取面经详情
// const getDetail = async () => {
//   const res = await useRequest('/interview/show',{params：{id:params.id}})
//   console.log('res  面经详情----->  ', res);
// }
// getDetail()
// 根据页面的参数获取面经详情
// Nuxt useFetch 的await 可以直接书写 有处理过 
// 添加传入 泛型 ArticleDetail 有代码提示
const article = await useRequest<ArticleDetail>('/interview/show',{params})
// console.log('article 面经详情 ----->  ', article);
// SEO 优化  - 详情页标题
useSeoMeta({
  title:`黑马面经 - ${article.stem}`
})
</script>

<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      @click-left="$router.back()"
      fixed
      title="面经详情"
    />
    <header class="header">
      <h1>{{article.stem}}</h1>
      <p>
        {{article.createdAt}} | {{article.views}} 浏览量 | {{article.likeCount}} 点赞数
      </p>
      <p>
        <!-- 头像 -->
        <img :src="article.avatar" alt="" />
        <span>{{article.creator}}</span>
      </p>
    </header>
    <main class="body" v-html="article.content"></main>
    <!-- <main>      
      <p>我是内容</p>
      <p>我是内容</p>
      <p>我是内容</p>
      <p>我是内容</p>
    </main> -->
    <div class="opt">
      <van-icon :class="{active:article.likeFlag}"  name="like-o"/>
      <van-icon :class="{active:article.collectFlag}" name="star-o"/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #FEC635;
        color: #fff;
      }
    }
  }
}
</style>