import axios from 'axios';
import { setInterceptor } from './common/interceptors';

// 기본 인스턴스 생성
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return instance;
}

// auth 관련 인스턴스
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });

  return setInterceptor(instance);
}

const instance = createInstance();
const posts = createInstanceWithAuth('posts');

export { instance, posts };
