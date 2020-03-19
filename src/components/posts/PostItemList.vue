<template>
  <li>
    <div class="post-title">{{ postItems.title }}</div>
    <div class="post-contents">{{ postItems.contents }}</div>
    <div class="post-time">
      {{ postItems.createdAt }}
      <i class="icon ion-md-create" @click="editPost"></i>
      <i class="icon ion-md-trash" @click="deletePost"></i>
    </div>
  </li>
</template>

<script>
import { deleteItem } from '@/api/posts';
export default {
  props: {
    postItems: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deletePost() {
      const itemId = this.postItems._id;
      const confirmChk = confirm('정말로 삭제하시겠습니까?');
      if (confirmChk) {
        await deleteItem(itemId);
        this.$emit('refresh');
      }
    },
    editPost() {
      const itemId = this.postItems._id;
      this.$router.push(`/edit/${itemId}`);
    },
  },
};
</script>

<style></style>
