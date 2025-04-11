import LayoutMenu from '@/layouts/LayoutMenu.vue'
import { RouteNameEnum } from '@/shared/enums'
import ViewHome from '@/views/ViewHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: `/home`, // Your default route
      name: RouteNameEnum.MENU_LAYOUT,
      component: LayoutMenu,
      children: [
        {
          path: '/home',
          name: RouteNameEnum.HOME,
          component: ViewHome,
        },
        {
          path: '/parks',
          name: RouteNameEnum.HOME,
          component: ViewHome,
        },
        {
          path: '/events',
          name: RouteNameEnum.HOME,
          component: ViewHome,
        },
        {
          path: '/trails',
          name: RouteNameEnum.HOME,
          component: ViewHome,
        },
        {
          path: '/about',
          name: RouteNameEnum.ABOUT,
          component: () => import('@/views/ViewAbout.vue'),
        },
        {
          path: '/:pathMatch(.*)*', // 404 Not Found. Part of default route path.
          name: RouteNameEnum.NOT_FOUND,
          component: () => import('@/views/ViewNotFound.vue'),
        },
      ],
    },
  ],
})

export default router
