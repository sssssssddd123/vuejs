<script setup>
import { ref, computed } from "vue";

// vue의 특징
// -> 데이터가 바뀌면 화면이 자동으로 refresh가 됨
const radiusInit = Math.round(Math.random() * 10);
const radius = ref(radiusInit);
const PI = ref(3.14);

const area = computed(() => {
  return radius.value * radius.value * PI.value;
});

// n초마다 값이 바뀌게 설정
setInterval(() => {
  radius.value = Math.round(Math.random() * 10);
}, 1000);

// 옵션 api
// export default {
//   data() {
//     return {
//       radius: Math.round(Math.random() * 10),
//       PI: 3.14,
//       intervalId: null
//     };
//   },
//   computed: {
//     area() {
//       return this.radius * this.radius * this.PI;
//     }
//   },
//   mounted() {
//     this.intervalId = setInterval(() => {
//       this.radius = Math.round(Math.random() * 10);
//     }, 1000);
//   },
//   beforeUnmount() {
//     clearInterval(this.intervalId);
//   }
// };
</script>

<template>
  <P>반지름이 {{ radius }}이고,</P>
  <p>원주율 {{ PI }}인 원의 면적은 {{ area }}</p>
</template>

<style scoped>
/*  */
</style>
