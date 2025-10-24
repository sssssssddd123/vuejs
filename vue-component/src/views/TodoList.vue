<template>
  <h3>Todo List( Provide / Inject )</h3>
  <TodoInput>
    <template v-slot:header>
      <h3>v-slot: header</h3>
    </template>
    <template v-slot:default>
      <h3>v-slot: name 없음(default)</h3>
    </template>
    <template v-slot:footer>
      <h3>v-slot: footer</h3>
    </template>
  </TodoInput>
  <ul>
    <TodoItemContainer v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo" />
  </ul>
</template>

<script setup>
import { reactive, provide } from "vue";
import TodoInput from "./TodoInput.vue";
import TodoItemContainer from "./TodoItemContainer.vue";

// 데이터
let nextId = 3;
const todoData = [
  { id: 1, text: "Vue.js 이해하기", completed: false },
  { id: 2, text: "Provide, Inject 처리", completed: true },
];

let todos = reactive(todoData);

// 함수
const addTodo = (newText) => {
  if (newText.trim() == "") {
    console.log("값 없음");
    return;
  }
  todos.push({ id: nextId++, text: newText, completed: false });
};

const toggleCompleted = (id) => {
  const todo = todos.find((t) => t.id == id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

const removeTodo = (id) => {
  const idx = todos.findIndex((t) => t.id == id);
  todos.splice(idx, 1);
};

// provide
provide("todos", todos);
provide("addTodo", addTodo);
provide("toggleCompleted", toggleCompleted);
provide("removeTodo", removeTodo);
</script>
