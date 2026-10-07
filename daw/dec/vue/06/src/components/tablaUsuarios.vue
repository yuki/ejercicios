<script setup>
const usuarios = [
    { id: 1, nombre: 'Alice', edad: 25, correo: 'alice@example.com', activo: true },
    { id: 2, nombre: 'Bob', edad: 30, correo: 'bob@example.com', activo: false },
    { id: 3, nombre: 'Carol', edad: 28, correo: 'carol@example.com', activo: true },
    { id: 4, nombre: 'David', edad: 22, correo: 'david@example.com', activo: false }
];
</script>

<template>
    <h2>Tabla de Usuarios</h2>
    <table v-if="usuarios.length > 0">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Correo</th>
                <th>Activo</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.edad }}</td>
                <td>{{ usuario.correo }}</td>
                <td>{{ usuario.activo ? 'Sí' : 'No' }}</td>
            </tr>
        </tbody>
    </table>
    <p v-else>No hay usuarios disponibles.</p>
</template>

<style scoped>
table{
    border-collapse: collapse;
}

table thead {
    background-color: #ccc;
}

table, th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
}

</style>