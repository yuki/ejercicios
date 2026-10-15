<script setup>
const props = defineProps({
    contador: {
        type: Number,
        required: true // indica que es obligatorio
    }
})
</script>
<template>
    <!-- 
        si declaramos con defineProps, podemos acceder a los props con props.nombreProp
        o con el propio nombre de la prop, en este caso contador
    -->
    <h2>El contador vale: {{ props.contador }} | {{ contador }}</h2>
</template>