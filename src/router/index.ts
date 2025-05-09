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
          path: '/events',
          name: RouteNameEnum.EVENTS,
          component: () => import('@/views/ViewEvents.vue'),
        },
        {
          path: '/parks',
          name: RouteNameEnum.PARKS,
          component: () => import('@/views/ViewParks.vue'),
        },
        {
          path: '/parks/:park/information',
          name: RouteNameEnum.PARK_INFORMATION,
          component: () => import('@/views/ViewParkInformation.vue'),
        },
        {
          path: '/parks/:park/amenities',
          name: RouteNameEnum.PARK_AMENITIES,
          component: () => import('@/views/ViewParkAmenities.vue'),
        },
        {
          path: '/parks/:park/trails',
          name: RouteNameEnum.PARK_TRAILS,
          component: () => import('@/views/ViewParkTrails.vue'),
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
