<template>
  <section class="sidebar-group depth-0">
    <p class="sidebar-heading">
      <span>Tags</span>
    </p>

    <ul>
      <li v-for="tag in tags">
        <router-link
          class="sidebar-link"
          v-bind:class="{ active: isActive(tag) }"
          :to="tag.path"
        >{{ tag.name }} ({{ tag.pages.length }})</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
    isActive(x) {
      return this.$page.path.endsWith("/blog/tags/" + x.name + "/")
        ? true
        : false;
    }
  },
  computed: {
    tags() {
      const getlist = {
        en: this.$entag.list,
        de: this.$tag.list
      };
      return getlist[this.$lang];
    }
  }
};
</script>

