<script setup>
import { ref } from "vue";

const score = ref(80);
const getRandomValue = () => {
  // 40~100 사이의 랜덤 값
  score.value = Math.round(Math.random() * 60) + 40;
};

const point = ref(100);
const getRandomPoint = () => {
  point.value = Math.round(Math.random() * 300);
};
</script>

<template>
  <button v-on:click="getRandomValue">버튼</button>
  <p>{{ score }}</p>
  <p v-if="score >= 90">A</p>
  <p v-else-if="score >= 80">B</p>
  <p v-else-if="score >= 70">C</p>
  <p v-else>F</p>
  <br />
  <hr />
  <button v-on:click="getRandomPoint">버튼</button>
  <input type="text" v-model="point" />
  <p v-if="point >= 200">[ VIP Point: {{ point }} ] 우수 고객입니다.</p>
  <p v-else-if="point >= 100">[ VIP Point: {{ point }} ] 일반 고객입니다.</p>
  <p v-else>[ VIP Point: {{ point }} ] 신규 고객입니다.</p>
</template>
