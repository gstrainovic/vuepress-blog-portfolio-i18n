<template>
  <main>
    <h1>Blog</h1>
    <ul id="default-layout">
      <li v-for="page in $pagination.pages">
        <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
      </li>
    </ul>
    <Pagination v-if="$pagination.hasPrev || $pagination.hasNext" />
  </main>
</template>


<script>
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";
export default {
  components: {
    Pagination
  },
};
</script>

