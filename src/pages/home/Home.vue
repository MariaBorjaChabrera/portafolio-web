<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="fondo-home">
     <section class="bg-amber-100 min-h-screen w-full text-amber-950 font-bold text-center flex flex-col md:flex-row">
    <header class="titulo flex min-h-[40vh] flex-col items-center justify-center gap-6 py-10 md:min-h-screen md:w-2/5">
      <h1 class="text-4xl">Joaquin Sorolla y Batista</h1> 

      <p>El pintor de la luz del Mediterráneo</p>

    </header>
      <div id="titulo-sorolla" class=" titulo-img md:flex-1"></div>
      </section>
 <main class="flex min-h-screen flex-col items-center justify-center bg-amber-100 text-amber-950">
  
   
    <div class="botones flex flex-wrap items-center justify-center gap-4">
      <Button as-child variant="ghost" class="px-8 py-6 text-lg text-white hover:bg-blue-950 hover:text-yellow-400 justify-center">
        <RouterLink to="/proceso">Proceso</RouterLink>
      </Button>

      <Button as-child variant="ghost" class="px-8 py-6 text-lg text-white hover:bg-blue-950 hover:text-yellow-400 justify-center">
        <RouterLink to="/lugares">Lugares</RouterLink>
      </Button>

      <Button as-child variant="ghost" class="px-8 py-6 text-lg text-white hover:bg-blue-950 hover:text-yellow-400 justify-center">
        <RouterLink to="/personajes">Personajes</RouterLink>
      </Button>

    

    </div>
  
     
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
  </div>


</template>


<style scoped>

.sorolla {
  font-family: Arial, Helvetica, sans-serif;
}

.titulo-img {
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-image: url("../imagenes/cuadros/autoretrato.jpg");
  min-height: 60vh;
}

@media (min-width: 768px) {
  .titulo-img{
    min-height: 100vh;
  }
}

</style>
