import { createRouter, createWebHistory } from 'vue-router';
import AlbumDetailsView from '../views/AlbumDetailsView.vue';
import DevlogsView from '../views/DevlogsView.vue';
import HomeView from '../views/HomeView.vue';
import PhotosView from '../views/PhotosView.vue';
import ProjectView from '../views/ProjectView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/devlogs',
      name: 'devlogs',
      component: DevlogsView
    },
    {
      path: '/photography',
      name: 'photography',
      component: PhotosView
    },
    {
      path: '/photography/:id',
      component: AlbumDetailsView,
      props: true
  },
  ]
})

export default router
