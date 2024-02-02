 <script setup lang='ts'>
 import type {ArticleItem} from 'types/article'
// 面经列表
const list = ref<ArticleItem[]>([])
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
    <!-- <div class="test active">
      <h1 class="">测试</h1>
    </div> -->
    <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
        <a href="javascript:;">推荐</a>
        <a href="javascript:;">最新</a>
        <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    </nav>
    <ArticleItemCom v-for="item in list" :key="item.id" :item="item" />
  </div>
  </NuxtLayout>
</div>
 </template>



<style lang="less" scoped>
// .test{
//   &.active{
//     padding-top: 100px;
//     color:pink;
//   }
// }
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>