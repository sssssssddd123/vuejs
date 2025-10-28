<template>
  <div v-if="visible" class="alert-overlay">
    <div class="alert-box">
      <h3>알림</h3>
      <p>{{ message }}</p>
      <button @click="closeAlert">확인</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const message = ref("");

const openAlert = (msg) => {
  message.value = msg;
  visible.value = true;
};

const closeAlert = () => {
  visible.value = false;
};

// 외부에서 접근 가능하도록 export
defineExpose({ openAlert, closeAlert });
</script>

<style scoped>
.alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.alert-box {
  background-color: #f7fff0;
  border: 2px solid #d5efc2;
  border-radius: 12px;
  padding: 24px 30px;
  width: 320px;
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.alert-box h3 {
  color: #4f7b29;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.alert-box p {
  margin: 10px 0 20px;
  font-size: 0.95rem;
  line-height: 1.4;
}

.alert-box button {
  padding: 8px 16px;
  border: none;
  background-color: #b6e388;
  border-radius: 8px;
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: default;
}
</style>
