<template>
  <li>
    <div class="post-title">{{ postItems.title }}</div>
    <div class="post-contents">{{ postItems.contents }}</div>
    <div class="post-time">
      {{ postItems.createdAt }}
      <i class="icon ion-md-create"></i>
      <i class="icon ion-md-trash"></i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    postItems: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
