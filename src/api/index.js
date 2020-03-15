import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: 'test1234',
  },
});

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습노트 조회하는 API
function fetchListItem() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchListItem };
