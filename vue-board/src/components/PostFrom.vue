<template>
  <div class="post-form">
    <h3>글작성(PostFrom)</h3>
    <form v-on:submit="addPostHandler">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" id="title" v-model="title" required />
      </div>

      <div class="form-group">
        <label for="content">내용</label>
        <textarea id="content" v-model="content" required></textarea>
      </div>

      <div class="form-group">
        <label for="writer">작성자</label>
        <input id="writer" v-model="writer" disabled />
      </div>

      <button type="submit">등록</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

// pinia store에서 addPost 함수 주입
import { usePostStore } from "../stores/post";
const postStore = usePostStore(); //pinia 스토어 사용
const { addPost } = postStore; // addPost 함수 추출

const title = ref("test");
const content = ref("test");
const writer = ref("");

const userWriter = () => {
  if (localStorage.getItem("userID") == "") {
    writer.value = "로그아웃 상태입니다.";
    return;
  }
  writer.value = localStorage.getItem("userID");
};
userWriter();

// 부모에서 addPost 함수를 받아옴
// const addPost = inject("addPost");

// form 제출
const addPostHandler = async (e) => {
  e.preventDefault();

  if (localStorage.getItem("userID") == "") {
    alert("로그인 후 이용해주세요");
    return;
  }

  if (!title.value || !content.value || !writer.value) {
    alert("값 없음");
    return;
  }
  const newPost = {
    title: title.value,
    content: content.value,
    writer: writer.value,
  };
  await addPost(newPost);

  title.value = "test";
  content.value = "test";
};
</script>

<style scoped>
.post-form {
  background-color: #f7fff0; /* 연한 연두빛 배경 */
  border: 1px solid #d5efc2;
  border-radius: 12px;
  padding: 24px;
  max-width: 600px;
  margin: 30px auto;
  font-family: "Noto Sans KR", sans-serif;
  color: #333;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}

/* 제목 */
.post-form h3 {
  text-align: center;
  color: #4f7b29;
  font-weight: 600;
  margin-bottom: 24px;
}

/* 폼 그룹 (라벨 + 필드 세트) */
.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

/* 라벨 */
label {
  font-weight: 500;
  margin-bottom: 6px;
  padding-left: 2px;
  color: #3f5f2b;
}

/* 공통 입력 스타일 */
input,
textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d5efc2;
  border-radius: 8px;
  background-color: #ffffff;
  font-size: 0.95rem;
  color: #333;
  padding: 10px 12px;
  font-family: "Noto Sans KR", sans-serif;
}

/* 입력 필드 간의 정렬 및 시각적 균형 */
input:disabled {
  background-color: #f0f8e9;
  color: #777;
}

/* 텍스트 영역 (내용) */
textarea {
  min-height: 50px;
  resize: vertical;
}

/* 버튼 */
button {
  width: 100%;
  padding: 12px;
  margin-top: 4px;
  background-color: #b6e388;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  cursor: default;
}

/* 폼 간격 정리 */
.post-form form {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
