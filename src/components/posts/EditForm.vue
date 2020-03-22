<template>
  <div class="form-wrapper">
    <form @submit.prevent="submitForm">
      <div class="form">
        <label for="Title">Title</label>
        <input
          type="text"
          id="Title"
          placeholder="제목을 입력해주세요."
          v-model="title"
        />
      </div>
      <div class="form">
        <label for="Contents">Contents</label>
        <textarea
          name=""
          id="Contents"
          placeholder="내용을 입력해주세요."
          v-model="contents"
          :maxlength="textMaxLength"
        ></textarea>
        <div class="validation-chk">
          {{ contents.length }}/ {{ textMaxLength }}
        </div>
      </div>
      <button type="submit" class="btn">수정</button>
      <a href="javascript:;" class="btn outline" @click="addCancel">취소</a>
    </form>
    <p class="log" v-if="logState">게시물이 이미 존재합니다.</p>
  </div>
</template>

<script>
import { fetchOneItem, editItem } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
      textMaxLength: 200,
      logState: false,
    };
  },
  methods: {
    async submitForm() {
      const itemId = this.$route.params.id;
      const postData = {
        title: this.title,
        contents: this.contents,
      };
      try {
        const confirmChk = confirm('수정하시겠습니까?');
        if (confirmChk) {
          await editItem(itemId, postData);
          this.$router.push('/main');
        }
      } catch ({ response }) {
        this.logState = true;
      }
    },
    initForm() {
      this.title = '';
      this.contents = '';
    },
    addCancel() {
      const confirmChk = confirm('작성을 취소하시겠습니까?');
      if (confirmChk) {
        this.$router.push('/main');
      }
    },
  },
  async created() {
    const itemId = this.$route.params.id;
    const { data } = await fetchOneItem(itemId);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.form-wrapper textarea {
  height: 200px;
}
.validation-chk {
  margin-bottom: 10px;
  text-align: right;
}
</style>
