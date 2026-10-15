<script setup>
import { ref } from 'vue';
import VerUsuario from './verUsuario.vue';

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

    function saludar(usuario) {
        alert(`Hola, ${usuario.nombre}!`);
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

            <VerUsuario
                v-for="usuario in usuarios"
                :key="usuario.id"
                :usuario="usuario"
                @saludar="saludar"
            />
            
        </tbody>
    </table>
</template>
<style>
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