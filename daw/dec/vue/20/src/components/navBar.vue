<script setup>
import { RouterLink } from 'vue-router';

const vistas = [
    ["/","Inicio"],
    ["/users", "Usuarios" ],
    ["/products", "Productos"],
    ["/about", "Acerca de"],
]
</script>
<template>
<header>
    <nav>
        <!--
            Creando un bucle for sólo tenemos que modificar el array de arriba añadiendo vistas nuevas.
            Esto ahorra duplicidad de código.
         -->
        <RouterLink 
            v-for="vista in vistas" 
            :to=vista[0] 
            :key="vista[1]"
            class="nav-link"
        >
            {{ vista[1] }}
        </RouterLink>
    </nav>
</header>

</template>
<style scoped>
nav {
    padding: 1rem 2rem;
    border-bottom: 1px solid red;
}
a {
    text-decoration: none;
}
.nav-link {
    padding: 1rem;
}
.nav-link:hover {
    background-color: grey;
    border-radius:  15px;
}

.router-link-exact-active {
    text-decoration: underline;
    font-weight: bold;
}
</style>