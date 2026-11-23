<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';


</script>


<template>
    <div class="bg-cyan-700 min-h-screen text-center p-4 flex flex-col items-center justify-center">
        <h1 class="text-xl my-1 font-medium">
             Aqui iran los persoanjes
        </h1>
    
    <div>
        <strong>Esta página no es oficial (pero esta hecha con mucho cariño)</strong>
    </div>
    <div className="mt-8 flex gap-5">
        <Button>
            <RouterLink to="/">Exit</RouterLink>
        </Button>
         <Button>
            <RouterLink to="">Enter</RouterLink>
        </Button>
    </div>
    </div>
</template>




<style scoped>

</style>