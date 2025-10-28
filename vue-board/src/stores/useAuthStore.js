import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("login", () => {
  const isLogin = ref("");

  const loginTest = async (userInfo) => {
    isLogin.value = await axios.post(`http://192.168.0.45:3000/login`, {
      userInfo,
    });
    if (!isLogin.value.data) {
      alert("로그인 실패");
      return false;
    }
    localStorage.setItem("userID", userInfo.userID);
    alert("로그인 성공");
    return true;
  };
  return { loginTest };
});
