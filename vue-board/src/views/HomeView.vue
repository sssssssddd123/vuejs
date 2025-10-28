<template>
  <div class="home-container">
    <div class="header-bar">
      <h3>게시판(HomeView)</h3>
      <div class="login-controls">
        <button v-if="!isLogin" @click="loginCheck">로그인</button>
        <button v-else @click="logOut">로그아웃</button>
      </div>
    </div>
    <PostForm />
    <hr />
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { usePostStore } from "../stores/post";

import PostForm from "@/components/PostFrom.vue";
import PostList from "@/components/PostList.vue";

const router = useRouter();
const postStore = usePostStore();

// state, getter 사용
const { posts } = storeToRefs(postStore);
const { fetchPosts } = postStore;
// addPost, deletePost,

const isLogin = ref(localStorage.getItem("userID") != "");

onMounted(async () => {
  // 게시글 목록을 가져오는 액션 호출
  await fetchPosts();
});

const loginCheck = () => {
  if (localStorage.getItem("userID") != "") {
    alert("로그인 중입니다.");
    return;
  }
  router.push("/login");
};

const logOut = () => {
  if (localStorage.getItem("userID") == "") {
    alert("로그인 후 이용해주세요");
    return;
  }
  localStorage.setItem("userID", "");
  isLogin.value = false;
  alert("로그아웃 성공");
  location.reload();
};
</script>

<style scoped>
.home-container {
  background-color: #f7fff0;
  border-radius: 12px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.06);
  padding: 20px;
  max-width: 700px;
  margin: 30px auto;
  font-family: "Noto Sans KR", sans-serif;
  color: #333;
}

/* ✅ 제목과 버튼을 같은 줄에 배치 */
.header-bar {
  display: flex;
  justify-content: space-between; /* 제목 왼쪽, 버튼 오른쪽 */
  align-items: center; /* 수직 가운데 정렬 */
  margin-bottom: 16px;
}

/* 제목 */
.header-bar h3 {
  color: #4f7b29;
  font-weight: 600;
  margin: 0; /* 줄 맞춤을 위해 여백 제거 */
}

/* 버튼 */
.login-controls button {
  background-color: #b6e388;
  border: 1px solid #d5efc2;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 0.95rem;
  color: #333;
  cursor: default;
  margin-left: 6px;
}

/* 구분선 */
hr {
  border: none;
  border-top: 1px solid #d5efc2;
  margin: 16px 0;
}
</style>
