<template>
  <div>
    <h1 class="page-header">메인페이지</h1>
    <div class="main list-container contents">
      <ul>
        <PostItemList
          v-for="post in postItems"
          :key="post._id"
          :postItems="post"
        ></PostItemList>
      </ul>
    </div>
    <a href="/add" class="create-button"><i class="ion-md-add"></i></a>
  </div>
</template>

<script>
import { fetchListItem } from '@/api/posts';
import PostItemList from '@/components/posts/PostItemList.vue';
export default {
  components: {
    PostItemList,
  },
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchListItem();
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
