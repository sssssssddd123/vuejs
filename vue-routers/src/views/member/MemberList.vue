<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
// import { inject } from "vue";
import axios from "axios";

// const memberList = inject("memberList");
// console.log(memberList);

const customers = ref([]);

axios
  .get("http://localhost:3000/customers")
  .then((resp) => {
    customers.value = resp.data;
    console.log(customers.value);
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<template>
  <h3>회원관리</h3>
  <nav id="breadcrums">
    <ul>
      <li><RouterLink v-bind:to="{ name: 'AppTop' }">TOP</RouterLink></li>
      <li>MemberList</li>
    </ul>
  </nav>
  <hr />
  <section>
    <h3>회원 리스트</h3>
    <p>
      <RouterLink v-bind:to="{ name: 'MemberAdd' }">Add</RouterLink>
    </p>
    <ul>
      <li v-for="member in customers" v-bind:key="member.id">
        <RouterLink v-bind:to="{ name: 'MemberDetail', params: { id: member.id } }"
          >ID가 {{ member.id }}인 {{ member.name }} 님</RouterLink
        >
      </li>
    </ul>
  </section>
</template>
