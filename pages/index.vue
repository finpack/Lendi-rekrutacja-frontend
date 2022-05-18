<template>
  <v-row>
    <v-col>
      <h1>{{ title }}</h1>
      <p v-for="(task, index) in tasks">{{index + 1}}. <span v-html="task"></span></p>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
const title: string = 'Lendi zadanie rekrutacyjne:';

const tasks: string[] = [
    'Utworzyć podstrone <a href="https://nuxtjs.org/docs/features/file-system-routing/">"/lista"<a/>',
    ''
]
</script>
