<template>
  <div>
    Lista: {{ users }}
    <button @click="addNewUser">Dodaj</button>
  </div>
</template>

<script setup lang="ts">
let users = ref(await $fetch('/api/user'));

const addNewUser = async () => {
  const response = await $fetch('/api/user', {
    method: 'POST',
    params: {
      firstName: 'Janek'
    }
  });
  console.log('response', response)
  users.value = response
}
</script>
