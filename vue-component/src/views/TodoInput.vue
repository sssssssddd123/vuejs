<template>
  <p v-html="msg"></p>
  <slot name="header"></slot>
  <div>
    <input
      type="text"
      placeholder="To do를 입력해 주세요"
      v-model="todoTitle"
      v-on:keyup.enter="addNewTodo"
    />
    <button v-on:click="addNewTodo">버튼</button>
  </div>
  <slot></slot>
  <slot name="footer"></slot>
  <br />
  <hr />
</template>

<script setup>
import { ref, inject, defineProps } from "vue";

defineProps({
  msg: String,
});

const todoTitle = ref("test");
const addTodo = inject("addTodo");
const addNewTodo = () => {
  addTodo(todoTitle.value);
  // todoTitle.value = "";
};
</script>
