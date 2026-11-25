import Home from "@/pages/home/Home.vue";
import Lugares from "@/pages/Lugares/Lugares.vue";
import Proceso from "@/pages/Proceso/Proceso.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/pages/Personajes/Layout.vue";
import Cuadros from "@/pages/Personajes/Cuadros.vue";
import Marco from "@/pages/Personajes/Marco.vue";
import Circa from "@/pages/Personajes/Circa.vue";


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
          component: Marco
        },
        {
            path: 'about',
            component: Layout, //Circa
            children: [
              {
                path: '',
                name: 'personajes-about',
                component: Marco
              }
            ]
        },
        {
          path: 'gallery',
          component: Layout,
          children: [
            {
              path: '',
              name: 'personajes-gallery',
              component: Cuadros
            },
            {
              path: ':id',
              name: 'cuadros-about',
              component: Circa
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