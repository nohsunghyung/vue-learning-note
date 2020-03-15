<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form action="" class="form" @submit.prevent="submitForm">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text" v-if="!emailValidate && username">
            <span class="warning"> Please enter an email address </span>
          </p>
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button
          type="submit"
          class="btn"
          :disabled="!emailValidate || !password || !nickname"
          :class="!emailValidate || !password || !nickname ? 'disabled' : null"
        >
          회원 가입
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  computed: {
    emailValidate() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      try {
        const { data } = await registerUser(userData);
        this.logMessage = `${data.username}님 회원가입이 완료되었습니다.`;
        this.initFrom();
        const confirmChk = confirm(
          '회원가입되셨습니다. 로그인 페이지로 이동하시겠습니까?',
        );
        if (confirmChk) {
          this.$router.push('/login');
        }
      } catch (error) {
        console.log(error.response.data);
      }
    },
    initFrom() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
