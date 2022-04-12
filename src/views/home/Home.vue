<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultidata} from 'network/home'  //加入大括号的原因是只有使用default导出时才不需要加
export default {
  name: 'Home'  ,
  components: {
    NavBar
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created () { //使用生命周期函数created发送请求，是组件创建完成之后发送请求
  //函数调用->圧入函数栈（保存函数调用过程中的所有变量）
  //函数调用结束->弹出函数栈（释放函数中所有变量）因此在该函数执行完之前需要将函数的执行结果保存起来
  //不然变量就被释放了
  //created函数中的this就是该组件的这个对象, 因此可将res的结果保存下来
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>
<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>