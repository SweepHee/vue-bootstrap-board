import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import ContentDetail from '@/components/ContentDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:contentId',
      name: 'ContentDetail',
      component: ContentDetail
    },
  ]
})
