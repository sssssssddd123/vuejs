<template>
  <div>
    <button v-on:click="onClickFnc">버튼</button>
    <p>결과: {{ randValue }}</p>
  </div>
  <br />
  <div>
    <p><input type="text" v-model="msg" /></p>
    <p v-bind:class="computedStyles">{{ msg }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Data 속성
const randValue = ref("시작 대기 중");
const msg = ref("반갑다. 애송이");
let isRedTrue = ref(false);
let isBlueTrue = ref(false);
const computedStyles = computed(() => {
  return { txtColorRed: isRedTrue.value, bgColorBlue: isBlueTrue.value };
  // return { txtColorRed: true, bgColorBlue: true };
});

// 이벤트 함수
const onClickFnc = () => {
  const rand = Math.round(Math.random() * 10);
  randValue.value = rand;
  isRedTrue.value = rand > 5 ? true : false;
  isBlueTrue.value = rand > 5 ? true : false;
};
</script>

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
