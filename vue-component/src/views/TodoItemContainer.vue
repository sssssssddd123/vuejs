<template>
  <li v-bind:class="{ completed: todo.completed }">
    <span v-on:click="handToggle">{{ todo.text }}</span>
    <TodoItemButton v-bind:item-id="todo.id" />
  </li>
</template>

<script setup>
import { defineProps, inject } from "vue";
import TodoItemButton from "./TodoItemButton.vue";

const toggleCompleted = inject("toggleCompleted");
const props = defineProps({
  todo: { type: Object, required: true },
});

// 함수
const handToggle = () => {
  toggleCompleted(props.todo.id);
};
</script>

<style scoped>
.completed span {
  text-decoration: line-through;
  color: gray;
}
</style>
