import Vue from 'vue'
import Router from 'vue-router'
//设置懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

//1.安装插件
Vue.use(Router)

//2. 创建路由对象
const routes = [
  {
    path: '', 
    redirect: '/home' 
  },
  {
    path: '/cart', 
    component: Cart 
  },
  {
    path: '/category', 
    component: Category 
  },
  {
    path: '/home', 
    component: Home 
  },
  {
    path: '/profile', 
    component: Profile
  },
]


const router = new Router({
  routes,
  mode: 'history'
})

//3. 导出router
export default router


// export default new Router({
//   routes: [
//     {
//       path: '/',
//     }
//   ]
// })
