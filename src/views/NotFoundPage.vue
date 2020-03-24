<template>
  <div>
    <h2>페이지를 찾을수없습니다.</h2>
    <a href="javascript:;" class="btn" @click="btnBack">이전으로</a>
  </div>
</template>

<script>
export default {
  methods: {
    btnBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 40px 0;
  text-align: center;
  font-size: 30px;
}
.btn {
  display: block;
  width: 150px;
  margin: 20px auto 0;
  text-align: center;
}
</style>
