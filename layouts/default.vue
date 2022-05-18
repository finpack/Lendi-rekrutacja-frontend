<template>
  <v-app>
    <v-app-bar color="primary" elevation="0">
      <v-btn to="/">Rekrutacja</v-btn>
    </v-app-bar>
    <v-main class="pt-16">
      <v-container>
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>
