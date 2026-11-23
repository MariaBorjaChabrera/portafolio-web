import Home from "@/pages/home/Home.vue";
import Lugares from "@/pages/Lugares/Lugares.vue";
import Proceso from "@/pages/Proceso/Proceso.vue";
import Personajes from "@/pages/Personajes/Personajes.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { Layout } from "@lucide/vue";
import Cuadros from "@/pages/Personajes/Cuadros.vue";


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
      children: [
        {
          path: '',
          name: 'personajes',
          component: Personajes
        },
        {
            path: 'about',
            component: Layout,
            children: [
              {
                path: '',
                name: 'personajes-about',
                component: Cuadros
              }
            ]
        }
      ]
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})