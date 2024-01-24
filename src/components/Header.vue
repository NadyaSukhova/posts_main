<template>
  <ul class="breadcrumb">
    <li v-for="(name, index) in $props.names" :key="index">
      <router-link :to="{ name: $props.paths[index] }">
        <div class="path_name">{{ name }}</div>
        <div class="icon">
          <v-icon name="co-home" v-if="name == 'На главную'" />
          <v-icon
            name="co-folder-open"
            v-if="name == 'Страница списка постов'"
          />
          <v-icon name="co-notes" v-if="name.includes('№')" />
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "Header",
  props: ["names", "paths"],
};
</script>
