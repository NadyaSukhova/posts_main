<script setup lang="ts">
import posts from "./get-posts";

import Header from "./Header.vue";
import PostInfo from "./PostInfo.vue";
</script>

<template>
  <Header
    :names="[
      'На главную',
      'Страница списка постов',
      `Пост № ${$route.params.id}`,
    ]"
    :paths="['main', 'allPosts', '']"
  />
  <div class="post">
    <PostInfo
      :post="posts.filter((el) => el.id === Number($route.params.id))[0]"
    />
  </div>
</template>

<style scoped>
.post{
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  opacity: 1;
  box-shadow: none;
  width: 50vw;
  height: 60vh;
}
@media (max-width: 820px) {
  .post {
    width: 80vw;
  }

}
</style>
