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
      <button type="submit" class="btn">등록</button>
      <a href="javascript:;" class="btn outline" @click="addCancel">취소</a>
    </form>
    <p class="log" v-if="logState">게시물이 이미 존재합니다.</p>
  </div>
</template>

<script>
import { registerItem } from '@/api/posts';
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
      try {
        const { data } = await registerItem({
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
        return data;
      } catch ({ response }) {
        if (response.status == 400) {
          this.logState = true;
          this.initForm();
          const setTime = setTimeout(() => {
            this.logState = false;
            clearTimeout(setTime);
          }, 2000);
        }
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
