import Home from "@/pages/home/Home.vue";
import Lugares from "@/pages/Lugares/Lugares.vue";
import Proceso from "@/pages/Proceso/Proceso.vue";
import Personajes from "@/pages/Personajes/Personajes.vue";
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lugares',
      name: 'lugares',
      component: Lugares
    },
    {
      path: '/proceso',
      name: 'proceso',
      component: Proceso
    },
    {
      path: '/personajes',
      name: 'personajes',
      component: Personajes
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})