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

// 학습노트 삭제하는 API
function deleteItem(postId) {
  return posts.delete(postId);
}

// 특정 학습노트 조회 API
function fetchOneItem(postId) {
  return posts.get(postId);
}

// 학습노트 수정하는 API
function editItem(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchListItem, registerItem, deleteItem, fetchOneItem, editItem };
