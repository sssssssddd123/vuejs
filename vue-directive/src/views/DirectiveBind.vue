<script setup>
import { ref, reactive, computed } from "vue";

// Vue.js 특징
// 1. 데이터가 변경이 되면 화면이 바뀐다(DOM Update -> Refresh)

const url = ref("https://vuejs.org/");
const isDisabled = ref(true);
const imgAttributes = reactive({
  src: "/src/assets/테스트.png",
  alt: "Vue 기본 로고",
  width: "150px",
});

const txtColor = ref("pink");
const backColor = ref("green");
const styleAttributes = reactive({
  color: "pink",
  backgroundColor: "green",
});

const msg = ref("Hello, World");
const isTxtColorRed = ref(true);
const isBgColorBlue = ref(true);
const classStyle = reactive({
  txtColorRed: true,
  bgColorBlue: true,
  txtSize24: true,
});

// 자동으로 데이터를 변경하는 로직
let isRedTrue = ref(true);
let isBlueTrue = ref(true);
const computedStyles = computed(() => {
  // isRedTrue = ref(Math.round(Math.random()));
  // isBlueTrue = ref(Math.round(Math.random()));
  // isRedTrue.value = isRedTrue.value != 0 ? true : false;
  // isBlueTrue.value = isBlueTrue.value != 0 ? true : false;
  return { txtColorRed: isRedTrue.value, bgColorBlue: isBlueTrue.value };
});

// setInterval(() => {
//   const isRed = Math.round(Math.random()) != 0 ? true : false;
//   const isBlue = Math.round(Math.random()) != 0 ? true : false;
//   isRedTrue.value = isRed;
//   isBlueTrue.value = isBlue;
// }, 500);
</script>

<template>
  <p>
    <a v-bind:href="url" v-bind:style="{ color: txtColor, backgroundColor: backColor }"
      >Vue.js 사이트</a
    >
  </p>
  <p>
    <a v-bind:href="url + 'guide/introduction.html'" v-bind:style="styleAttributes"
      >Vue.js 가이드 사이트</a
    >
  </p>
  <p><button v-bind:disabled="isDisabled">버튼</button></p>
  <p><img v-bind="imgAttributes" /></p>

  <p v-bind:class="{ txtColorRed: isTxtColorRed, bgColorBlue: isBgColorBlue }">{{ msg }}</p>
  <p v-bind:class="{ 'txt-color-pink': isTxtColorRed, bgColorBlue: isBgColorBlue }">{{ msg }}</p>
  <p v-bind:class="classStyle">{{ msg }}</p>
  <p v-bind:class="computedStyles">{{ msg }}</p>
</template>

<style scoped>
.txtColorRed {
  color: red;
}

.txt-color-pink {
  color: pink;
}

.bgColorBlue {
  background-color: blue;
}

.txtSize24 {
  font-size: 24px;
}
</style>
