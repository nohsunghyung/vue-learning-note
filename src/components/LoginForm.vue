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
        <button
          type="submit"
          class="btn"
          :disabled="!emailValidate || !password"
          :class="!emailValidate || !password ? 'disabled' : null"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';
export default {
  data() {
    return {
      username: '',
      password: '',
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
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('LOGIN', userData);
        this.$router.push('/main');
      } catch ({ response }) {
        this.logMessage = response.data;
      } finally {
        this.initFrom();
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
