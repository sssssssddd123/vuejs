<template>
  <p>세로 {{ height }}, 가로 {{ width }} 인 사각형 면적 {{ area }}</p>
  <button v-on:click="change">버튼</button>
</template>

<script setup>
import {
  ref,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked,
  onRenderTriggered,
  // onBeforeCreate,
  // onCreated,
} from "vue";

const heightData = Math.round(Math.random() * 10);
const widthData = Math.round(Math.random() * 10);
const height = ref(heightData);
const width = ref(widthData);
const area = computed(() => {
  return height.value * width.value;
});

const change = () => {
  height.value = Math.round(Math.random() * 10);
  width.value = Math.round(Math.random() * 10);
};

onBeforeMount(() => {
  console.log("컴포넌트가 곧 화면에 렌더링됩니다.");
  console.log(`onBeforeMount : ${height.value} * ${width.value}`);
  console.log("");
});

onMounted(() => {
  console.log("컴포넌트가 화면에 렌더링되었습니다.");
  console.log(`onMounted : ${height.value} * ${width.value}`);
  console.log("");
});

onBeforeUpdate(() => {
  console.log("데이터가 바뀌었고, DOM이 곧 업데이트됩니다.");
  console.log(`onBeforeUpdate : ${height.value} * ${width.value}`);
  console.log("");
});

onUpdated(() => {
  console.log("DOM이 새로운 데이터로 다시 렌더링되었습니다.");
  console.log(`onUpdated : ${height.value} * ${width.value}`);
  console.log("");
});

onRenderTracked(() => {
  console.log("렌더링 추적:", event);
  console.log(`onRenderTracked : ${height.value} * ${width.value}`);
  console.log("");
});

onRenderTriggered(() => {
  console.log("렌더링이 다시 일어난 이유:", event);
  console.log(`onRenderTriggered : ${height.value} * ${width.value}`);
  console.log("");
});

// onBeforeCreate(() => {
//   console.log(`onBeforeCreate : ${height.value} * ${width.value}`);
// });

// onCreated(() => {
//   console.log(`onCreated : ${height.value} * ${width.value}`);
// });
</script>
