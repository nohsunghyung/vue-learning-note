// 학습노트 관련 API
import { posts } from './index';

// 학습노트 조회하는 API
function fetchListItem() {
  return posts.get('/');
}

// 학습노트 생성하는 API
function registerItem(postData) {
  return posts.post('/', postData);
}

export { fetchListItem, registerItem };
