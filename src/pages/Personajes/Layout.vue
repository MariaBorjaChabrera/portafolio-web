<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';


</script>

<template>
    <div class="grid grid-rows-[auto_1fr_auto] min-h-screen ">

        <heather class="bg-cyan-500">


        <div class="flex gap-6 pt-3">
            <RouterLink 
                to="/personajes/about"
                active-class="font-bold">
                Movimiento
            </RouterLink>
            <RouterLink 
            to="/personajes/gallery"
            active-class="font-bold">
                Cuadros
            </RouterLink>
            <Button>
                <RouterLink to="/">
                Volver
                </RouterLink>
            </Button>
        </div>
        </heather>
        <main>
            <RouterView />
        </main>
        <footer class="bg-cyan-950 text-center py-6">
        <h1>Esta página no es oficial (pero esta hecha con mucho cariño)</h1>
        </footer>
        
    </div>
       
    
</template>



<style scoped>

</style>