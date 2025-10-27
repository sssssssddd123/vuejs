<template>
  <div class="post-form">
    <h3>글작성</h3>
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
        <input id="writer" v-model="writer" required />
      </div>

      <button type="submit">등록</button>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";

const title = ref("test");
const content = ref("test");
const writer = ref("test01");

// 부모에서 addPost 함수를 받아옴
const addPost = inject("addPost");

// form 제출
const addPostHandler = async () => {
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
  writer.value = "test01";
};
</script>

<style scoped>
.post-form {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
  font-family: "Noto Sans KR", sans-serif;
  color: #333;
}

.post-form h3 {
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  font-weight: 500;
  margin-bottom: 6px;
}

input,
textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 0.95rem;
  background-color: #fafafa;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
}

button:active {
  background-color: #f0f0f0;
}
</style>
