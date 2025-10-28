<template>
  <h3>로그인(LoginView)</h3>
  <form action="">
    <div>
      <label for="userId">아이디</label>
      <input type="text" id="userId" v-model="userID" />
      <br />
      <label for="userPw">비밀번호</label>
      <input type="password" id="userPw" v-model="userPW" />
    </div>
    <button type="submit" v-on:click="loginVueTest">로그인</button>
  </form>
  <RouterLink to="/"><button>목록</button></RouterLink>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useUserStore } from "../stores/useAuthStore";

const router = useRouter();

const userID = ref("");
const userPW = ref("");
userID.value = "seung1@email.com";
userPW.value = "1";

const userStore = useUserStore();

const { loginTest } = userStore;
const loginVueTest = async (e) => {
  e.preventDefault();
  const isLogin = await loginTest({ userID: userID.value, userPW: userPW.value });

  if (!isLogin) {
    return;
  }
  router.push("/");
};
</script>

<style scoped>
/* 전체 영역 */
form {
  background-color: #f7fff0; /* 아주 연한 연두빛 */
  border: 1px solid #d5efc2;
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  margin: 40px auto;
  font-family: "Noto Sans KR", sans-serif;
  color: #333;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}

/* 제목 */
h3 {
  text-align: center;
  color: #4f7b29; /* 짙은 연두 톤 텍스트 */
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
}

/* 입력 라벨 */
label {
  display: block;
  font-weight: 500;
  margin: 8px 0 4px;
}

/* 입력창 */
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #d5efc2;
  border-radius: 8px;
  background-color: #ffffff;
  font-size: 0.95rem;
  color: #333;
  box-sizing: border-box;
}

/* 버튼 공통 */
button {
  width: 100%;
  margin-top: 16px;
  padding: 10px;
  background-color: #b6e388; /* 연두색 */
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  cursor: default;
}

/* RouterLink 아래 목록 버튼 */
a > button {
  margin-top: 10px;
  background-color: #d5efc2;
}

/* 여백 정리 */
div {
  margin-bottom: 10px;
}
</style>
