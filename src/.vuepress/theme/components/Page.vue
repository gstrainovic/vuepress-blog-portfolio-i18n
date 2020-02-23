
<template>
  <main class="page">
    <slot name="top" />

    <BlogIndex class="theme-default-content" v-if="$pagination"/>

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@parent-theme/components/PageEdit.vue'
import PageNav from '@parent-theme/components/PageNav.vue'
import BlogIndex from '@theme/components/BlogIndex.vue'
export default {
  components: { PageEdit, PageNav, BlogIndex },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '~@parent-theme/styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
