import "./style.css";
import "./breadcrumbs.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  CoHome,
  CoFolderOpen,
  CoNotes,
  FcOpenedFolder,
} from "oh-vue-icons/icons";
import App from "./App.vue";
import AllPosts from "./components/AllPosts.vue";
import NoPage from "./components/NoPage.vue";
import PostPage from "./components/PostPage.vue";
import MainPage from "./components/MainPage.vue";

addIcons(CoHome, CoFolderOpen, CoNotes, FcOpenedFolder);

const router = createRouter({
  routes: [
    { path: "/posts", redirect: { name: "main" } },
    {
      path: "/posts/main/all_posts",
      name: "allPosts",
      component: AllPosts,
    },
    {
      path: "/posts/main",
      name: "main",
      component: MainPage,
    },
    { path: "/posts/main/all_posts/:id", name: "curPost", component: PostPage },
    {  path: '/:pathMatch(.*)*', component: NoPage}
  ],
  history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
