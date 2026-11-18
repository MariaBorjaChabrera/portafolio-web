<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
</script>

<template>
 <main class="flex min-h-screen flex-col bg-amber-100 text-amber-950">
  <nav aria-label="Secciones Principales" class="w-full bg-orange-500 px-4 py-3 sm:px-8">
  
    <div class="flex flex-wrap items-center justify-start gap-2">
      <Button as-child variant="ghost" class="text-white hover:bg-amber-950 hover:text-yellow-400">
        <RouterLink to="/proceso">Proceso</RouterLink>
      </Button>

      <Button as-child variant="ghost" class="text-white hover:bg-amber-950 hover:text-yellow-400">
        <RouterLink to="/lugares">Lugares</RouterLink>
      </Button>

      <Button as-child variant="ghost" class="text-white hover:bg-amber-950 hover:text-yellow-400">
        <RouterLink to="/personajes">Personajes</RouterLink>
      </Button>

    

    </div>
  </nav>
      <section class="bg-amber-100 h-screen w-screen text-amber-950 font-bold text-center flex flex-col items-center justify-center gap-12  md:flex-row md:justify-around ">
        <h1 class="text-3xl text-amber-950 font-bold ">
          TFG María Borja Chabrera 2026-27
        </h1>
      </section>
  </main>
  <footer class="w-full bg-cyan-800 text-amber-950 py-12">
    <div class="flex flex-col md:flex-row md:justify-around gap-6 max-w-2xl mx-auto">
      <div class="space-y-4 text-center md:text-left">
        <h3 class="text-xl text-white">Información de Contacto</h3>
          <div class="space-y-2">
            
            <p class="flex items-center gap-2 justify-center md:justify-strat">
            <Phone class="w-4 h-4"/>
            +34 123-456-789
            </p>

            <p class="flex items-center gap-2 justify-center md:justify-strat">
            <Mail class="w-4 h-4"/>
            correospolarexpres@gmail.com
            </p>
          
          </div>
      </div>
    </div>
  </footer>

</template>


<style scoped>

</style>
