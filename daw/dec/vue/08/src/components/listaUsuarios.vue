<script setup>
import { ref } from 'vue';

    const usuarios = [
        { id: 1, nombre: 'Alice', correo: 'alice@example.com' },
        { id: 2, nombre: 'Bob', correo: 'bob@example.com' },
        { id: 3, nombre: 'Charlie', correo: 'charlie@example.com'},
        { id: 4, nombre: 'David', correo: 'david@example.com' },
        { id: 5, nombre: 'Eve', correo: 'eve@example.com' },
        { id: 6, nombre: 'Frank', correo: 'frank@example.com' },
        { id: 7, nombre: 'Grace', correo: 'grace@example.com' },
        { id: 8, nombre: 'Heidi', correo: 'heidi@example.com' }
    ];

    const nombre = ref('');

    function saludar(usuario) {
        alert(`Hola, ${usuario.nombre}!`);
    }

    function mostrarEvento(evento) {
        alert(`Se ha hecho clic en el botón "${evento.target.textContent}"`);
    }
    
    function verIdYEvento(id, evento) {
        alert(`ID del usuario: ${id}\nEvento: ${evento.type}\nBotón: ${evento.target.textContent}`);
    }

    function mostrarValor(evento) {
        nombre.value = evento.target.value;
    }
</script>

<template>
    <h2>Lista de Usuarios</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.nombre }}</td>
                <td>
                    <button @click="saludar(usuario)">Saludar</button>
                    <button @click="mostrarEvento">Ver evento</button>
                    <button @click="verIdYEvento(usuario.id,$event)">Ver ID y evento</button>
                </td>
            </tr>
        </tbody>
    </table>

    <h2>Formulario ejemplo</h2>
    <form>
        <label for="nombre">Nombre: {{ nombre }}</label><br>
        <input type="text" id="nombre" name="nombre" @input="mostrarValor"/>
    </form>
    
</template>
<style scoped>
    table {
        width: 50%;
        border-collapse: collapse;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    th {
        background-color: #f2f2f2;
    }
</style>