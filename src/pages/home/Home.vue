<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-amber-100 h-screen w-screen text-amber-950 font-bold text-center flex flex-col items-center justify-center gap-12 ">
    <h1 class="text-3xl text-amber-950 font-bold">
      TFG María Borja Chabrera 2026-27
    </h1>
  
    <div>
      <Button as-child>
        <RouterLink to="/proceso">Proceso</RouterLink>
      </Button>

      <Button as-child>
        <RouterLink to="/lugares">Lugares</RouterLink>
      </Button>

      <Button as-child>
        <RouterLink to="/personajes">Personajes</RouterLink>
      </Button>

      

    </div>
  </div>

</template>


<style scoped>

</style>
