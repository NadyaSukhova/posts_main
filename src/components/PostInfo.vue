<template>
  <div class="post_info">
    <router-link :to="{ name: 'curPost', params: { id: post.id } }"
      ><div class="post_numb">Пост №{{ post.id }}</div></router-link
    >
    <hr />
    <div class="post_title">
      <router-link :to="{ name: 'curPost', params: { id: post.id } }">{{
        post.title.toUpperCase()
      }}</router-link>
      <hr />
    </div>
    <div class="post_body">{{ post.body }}</div>
    <div class="post_author">
      <p>Author: {{ author.name }}</p>
      <p>Author's ID: {{ post.userId }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PostInfo",
  props: ["post"],
  data() {
    return {
      author: {} as any,
    };
  },
  methods: {
    getAuthor(id: String) {
      return fetch("https://jsonplaceholder.typicode.com/users?id=" + id)
        .then((response) => {
          response.json().then((data) => {
            this.author = data[0];
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  beforeMount() {
    this.getAuthor(this.post.userId);
  },
};
</script>
