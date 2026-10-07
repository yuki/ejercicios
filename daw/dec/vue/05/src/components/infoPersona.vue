<script setup>
const edad = 65;
</script>
<template>
    <p>Edad: {{ edad }}</p>

    <p v-if="edad < 10">
        Eres un niño.
    </p>
    <p v-else-if="edad < 18">
        Eres un adolescente.
    </p>
    <p v-else-if="edad < 35">
        Eres un adulto.
    </p>
    <p v-else-if="edad < 65">
        Eres un adulto mayor.
    </p>
    <p v-else>
        Eres un anciano.
    </p>
</template>