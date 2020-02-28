
<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <BlogIndex v-if="$pagination" />

      <div v-if="tags">
        <h4>Tags:
        <router-link v-for="tag in tags" :to="$localePath + 'blog/tags/' + tag"> #{{ tag }} </router-link>
        </h4>
      </div>

      <Content />
    </div>

    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";
import BlogIndex from "@theme/components/BlogIndex.vue";
export default {
  components: { PageEdit, PageNav, BlogIndex },
  props: ["sidebarItems"],
  computed: {
    tags() {
      const getlist = {
        en: this.$frontmatter.entag,
        de: this.$frontmatter.tag
      };
      return getlist[this.$lang];
    }
  }
};
</script>

<style lang="stylus">
@require '~@parent-theme/styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>
