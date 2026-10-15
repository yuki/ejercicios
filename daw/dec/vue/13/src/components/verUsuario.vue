<script setup>
defineProps({
    usuario: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['saludar']);

function saludar(usuario) {
    emit('saludar', usuario);
}
</script>

<template>
<tr>
    <td>{{ usuario.id }}</td>
    <td>{{ usuario.nombre }}</td>
    <td>
        <button @click="saludar(usuario)">Saludar</button>
    </td>
</tr>
</template>