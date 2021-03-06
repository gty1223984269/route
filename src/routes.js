export default [
  {
    path: '/',
    component: resolve => require(['./pages/home/home.vue'], resolve)
  },
  {
    path: '/question',
    component: resolve => require(['./pages/question/question'], resolve)
  },
  {
    path: '/user',
    component: resolve => require(['./pages/user'], resolve)
  },
  {
    path: '/table',
    component: resolve => require(['./pages/table/table'], resolve)
  },
   {
    path: '/form',
    component: resolve => require(['./pages/form/form'], resolve)
  }
]
