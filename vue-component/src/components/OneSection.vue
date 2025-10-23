<template>
  <section class="box">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <button v-on:click="onClick">자식에서 임의 값 생성</button>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// defineProps
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "이건 기본값",
  },
});

// defineEmits
const emit = defineEmits(["callStarPoint"]);
const onClick = () => {
  emit("callStarPoint");
};
</script>

<style scoped>
section {
  border: green 1px solid;
  padding: 5px;
  margin: 10px;
}
</style>
