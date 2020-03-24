<template>
  <div>
    <h1 class="page-header">학습노트 리스트</h1>
    <template>
      <div class="main list-container contents">
        <ul>
          <PostItemList
            v-for="post in postItems"
            :key="post._id"
            :postItems="post"
            @refresh="fetchData"
          ></PostItemList>
        </ul>
      </div>
    </template>
    <template v-if="registerItemChk">
      <div class="empty-content">
        <h3>등록된 학습노트가 없습니다.</h3>
      </div>
    </template>
    <router-link to="/add" class="create-button"
      ><i class="ion-md-add"></i
    ></router-link>
    <LoadingSpinner v-if="loadingStatus"></LoadingSpinner>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchListItem } from '@/api/posts';
import PostItemList from '@/components/posts/PostItemList.vue';
export default {
  components: {
    PostItemList,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      loadingStatus: false,
      registerItemChk: false,
    };
  },
  methods: {
    async fetchData() {
      this.loadingStatus = true;
      const { data } = await fetchListItem();
      this.postItems = data.posts;
      this.loadingStatus = false;
      // 학습노트 없을경우 등록노트 없음 메세지 출력
      this.postItems.length
        ? (this.registerItemChk = false)
        : (this.registerItemChk = true);
      return data;
    },
  },
  created() {
    if (!this.$store.getters.isLogin) {
      this.$router.push('/login');
    }
    this.fetchData();
  },
};
</script>

<style scoped>
.empty-content {
  margin-top: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #999;
}
</style>
