<script setup lang="ts"></script>

<template>
  <h1>Здравствуйте!</h1>
  <h4>Это главная страница моего приложения!</h4>
  <h2>
    Нажмите на следующую иконку, чтобы перейти на страницу, отображающую список
    постов:
  </h2>
  <div class="icon">
  <router-link :to="{ name: 'allPosts' }">
    <v-icon name="fc-opened-folder" animation="float" scale="8" />
  </router-link></div>
</template>

<style scoped>
* {
  color: rgb(136, 105, 76);
  text-align: center;
}

h1{
  margin-top: 5vh;
}
h2 {
  margin-top: 30vh;
}

.icon{
  text-align: center;
}
</style>
