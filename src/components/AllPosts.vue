<script setup lang="ts">
import posts from "./get-posts";

import Header from "./Header.vue";
import PostInfo from "./PostInfo.vue";
</script>

<template>
  <Header :names="['На главную', 'Страница списка постов']" :paths="['main', '']" />
  <div class="posts">
    <div class="post" v-for="post in allPosts" :key="post.id">
      <PostInfo :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AllPosts",
  components: { Header, PostInfo },
  data() {
    return {
      allPosts: posts,
    };
  },
};
</script>
<style scoped></style>
