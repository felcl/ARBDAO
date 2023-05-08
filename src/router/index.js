import * as VueRouter from 'vue-router'
import Home from '../view/Home.vue'
import Dao from '../view/Dao.vue'
import Rewares from '../view/Rewares.vue'
import History from '../view/History.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/Dao', component: Dao },
    { path: '/Rewares', component: Rewares },
    { path: '/History', component: History },
  ]
  const router = VueRouter.createRouter({
      // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
      history: VueRouter.createWebHashHistory(),
      routes, // `routes: routes` 的缩写
  })
export {
    router
}