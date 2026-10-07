<script setup>
const tipo = "error"
const mensaje = "Mensaje de alerta..."
</script>
<template>
<div class="alert" :class="tipo">
  {{ mensaje }}
</div>
</template>
<style scoped>
.alert {
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 15px;
}
.info {
  color: #055160;
  background-color: #cff4fc;
  border: 2px solid #9eeaf9;
}
.success {
  color: #155724;
  background-color: #d1e7dd;
  border: 2px solid #badbcc;
}
.warning {
  color: #666;
  background-color: #fff3cd;
  border: 2px solid #ffeaa7;
}
.error {
  color: #721c24;
  background-color: #f8d7da;
  border: 2px solid #f5c6cb;
}
</style>