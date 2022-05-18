<template>
  <v-row>
    <v-col>
      <h1>Opis zadania:</h1>
      Zadanie polega na utworzeniu prostego panelu typu <a href="https://pl.wikipedia.org/wiki/CRUD">CRUD</a> do zarządzania użytkownikami.
      Aplikacja wykorzystuje technologię <a href="https://v3.nuxtjs.org/">Nuxt3</a>, które opiera się o Vue3.
      Panel powinien wysyłać requesty do API, które jest hostowane lokalnie na wewnętrznym serwerze Nuxt.
      Aby postawić aplikację oraz serwer należy użyć poniższej komendy:
      <pre>npm run dev</pre>
      Requesty do komunikacji po API wykonywane są lokalnie. Do wysyłania requestów polecam użyć wbudowanej w Nuxt3 komendy
      <a href="https://v3.nuxtjs.org/api/utils/$fetch">$fetch()</a> albo za pomocą <a href="https://github.com/axios/axios">Axiosa</a>.
      (serwer do hostowania aplikacji to ten sam serwer co serwer do API czyli http://localhost:3000/),
      a same dane (baza danych) resetuje się wraz z przeładowaniem serwera Nuxtowego.
      (Więc, samo f5 nie czyści nam bazy użytkowników, natomiast ubicie komendy `npm run dev`
      oraz postawienie jej na nowo już wyczyści nam lokalną baze danych,
      Nuxt3 posiada wbudowany hotreload który również przeładowuje serwer, co również powoduje przeładowanie serwera oraz wyczyszczenie bazy).
      Nuxt3 wykorzystuje technologie <a href="https://v3.nuxtjs.org/guide/concepts/auto-imports/">autoimportów</a>,
      które powinny dobrze być wspierane przez Webstorm 2022.1 oraz Visual Studio Code z pluginem
      <a href="https://github.com/johnsoncodehk/volar">Volar</a>.
      Warto korzystać z dokumentacji <a href="https://v3.nuxtjs.org">Nuxt</a> oraz <a href="https://vuejs.org/">Vue</a>.
      Oceniana jest jakość kodu, dokładność wykonanych poleceń oraz ogólny UX.
      Nie jest oceniana estetyka oraz czas wykonania zadania :)
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <h1>Wymagane punkty:</h1>
      <p v-for="(task, index) in tasks">
        {{index + 1}}. <span v-html="task"></span>
      </p>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <h1>Dokumentacja API:</h1>
      <p v-for="(apiCall, index) in apiCalls" class="mb-2">
        <span v-html="apiCall"/>
      </p>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <h1>Model użytkownika:</h1>
      <pre>
type User = {
  id: number,
  firstName: string
  lastName: string
  email: string
  phone: string
}
      </pre>
    </v-col>
  </v-row>

</template>

<script lang="ts" setup>
const tasks: string[] = [
    'Utworzyć podstrone <a href="https://nuxtjs.org/docs/features/file-system-routing/">"/uzytkownicy"<a/>',
    `Na podstronie '/uzytkownicy' powinno znajdować się wylistowanie wszystkich użytkowników, których można pobrać za pomocą API`,
    'Dodać oraz zaprojektować dodawanie użytkownika poprzez API',
    'Dodać oraz zaprojektować usuwanie użytkownika poprzez API',
    'Dodać oraz zaprojektować edycje użytkownika poprzez API',
    'Formularz dodawania oraz edycji użytkownika powinien posiadać mechanizm walidacji.',
    'Aplikacja powinna obsługiwać wyjątków (obsługa błędów z serwera, np brak walidacji)',
    'Aplikacja powinna być <a href="https://next.vuetifyjs.com/en/features/display-and-platform/">responsywna</a> ',
]

const apiCalls: string[] = [
    '<pre>GET /api/users</pre> Zwraca liste wszystkich obiektów typu User',
    '<pre>POST /api/users</pre> Przyjmuje w body obiekt User i następnie po poprawnej walidacji dodaje go do bazy',
    '<pre>PUT /api/users/{user_id}</pre> Przyjmuje w body obiekt User oraz parametr userId i następnie po poprawnej walidacji edytuje usera po podanym id',
    '<pre>DELETE /api/users/{user_id}</pre> Usuwa użytkownika po przekazanym id',
]
</script>
