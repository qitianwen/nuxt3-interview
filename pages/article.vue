 <script setup lang='ts'>
 import type {ArticleItem} from '@/types/article'
// 面经列表
const list = ref<ArticleItem[]>([])

// 分页查询参数
/**
 * 分页查询参数
 * Query 参数
*@param current number 当前页 可选
*@param pageSizenumber  每页数量 可选
*@param stem string  筛选字段-题干 可选
*@param keyWord  string 筛选字段-关键字可选
*@param sorterstring 可选排序字段，以字段名加下划线组合，不能有特殊字符和不存在的字段。 推荐传 weight_desc 最新：可以不用传
*/
const pageParams = reactive({
  // 这里39页 35开始 快速测试
  current:35,
  pageSize:10,
  sorter:'weight_desc'
})
const loading = ref(false);
    const finished = ref(false);
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
// 使用  基于 useFetch 二次封装的 useRequest 更加简洁
 const res = await useRequest('/interview/query',{
  params:pageParams,
  // 使用useFetch 会 参数改变会默认发送请求 需要关闭 (否则这里会重复发送请求 )
  watch:false
})

//  console.log('res 面经列表 ----->  ', res.data.rows);
// 数组追加
 list.value.push(...res.rows)
//  分页数量累加
pageParams.current++

// 加载状态结束
loading.value = false

// 如果数据已经全局加载完毕需要显示加载完毕
if(res.current >= res.pageTotal){
  finished.value = true
}
//  console.log('123  ----->  ', res);

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
    <!-- 分页加载 -->
    <van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="getList"
>
<ArticleItemCom v-for="item in list" :key="item.id" :item="item" />
</van-list>
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