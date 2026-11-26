<script setup lang="ts">
import {Card,CardContent} from '@/components/ui/card'
</script>

<template>
    <div class="flex flex-col items-center gap-8 w-full max-w-page my-8 mx-auto ">
        <div class="text-center">
            <h1 class="font-bold text-xl lg:text-5xl mb-5">
            Información sobre los cuadros de Sorolla
            </h1> 
            <p class="mb-5">Haz Click en tu cuadro favorito para descubrirlo</p>
        </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
        <Card 
            class="cursor-pointer w-[220px] h-[240px] hover:bg-sky-900 hover:text-white transition-colors border-white"
            v-for="i in 6"
            key="i">
            <CardContent class="flex flex-col items-center gap-1 w-full px-0">
                <img 
                    src="/imagenes/cuadros/paseo.jpg"
                    class="w-48 h-42 object-cover object-top mt-2 rounded-t-xs"
                    />
                <h2 class="original-surfer-regular text-lg">Paseo a orillas del mar</h2>
            </CardContent>
        </Card>
    </div>
    </div>
</template>



<style scoped>

</style>