import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
