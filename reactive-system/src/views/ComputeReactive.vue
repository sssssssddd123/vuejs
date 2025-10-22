<script setup>
import { reactive, computed } from "vue";

// vue의 특징
// -> 데이터가 바뀌면 화면이 자동으로 refresh가 됨
const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10),
});

const area = computed(() => {
  return data.radius * data.radius * data.PI;
});

// n초마다 값이 바뀌게 설정
setInterval(() => {
  data.radius = Math.round(Math.random() * 10);
}, 1000);
</script>

<template>
  <P>반지름이 {{ data.radius }}이고,</P>
  <p>원주율 {{ data.PI }}인 원의 면적은 {{ area }}</p>
</template>

<style scoped>
/*  */
</style>
