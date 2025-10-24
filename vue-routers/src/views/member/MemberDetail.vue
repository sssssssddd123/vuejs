<script setup>
import { RouterLink } from "vue-router";
// import { ref, defineProps, inject } from "vue";
import { ref, defineProps } from "vue";
import axios from "axios";

const props = defineProps({ id: Number });

// const memberList = inject("memberList");
// const member = memberList.get(props.id);

// const forMem = new Map();
// forMem.set(props.id, {
//   id: props.id,
//   name: member.name,
//   email: member.email,
//   points: member.points,
//   note: member.note,
// });

const customer = ref({});

axios
  .get("http://192.168.0.45:3000/customer/" + props.id)
  .then((resp) => {
    customer.value = resp.data[0];
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<template>
  <h3>회원상세정보</h3>
  <nav id="breadcrums">
    <ul>
      <li><RouterLink v-bind:to="{ name: 'AppTop' }">TOP</RouterLink></li>
      <li><RouterLink v-bind:to="{ name: 'MemberList' }">MemberList</RouterLink></li>
      <li>MemberDetail</li>
    </ul>
  </nav>
  <section>
    <hr />
    <h3>Member Detail</h3>
    <dl>
      <dt>ID</dt>
      <dd>{{ customer.id }}</dd>
      <dt>이름</dt>
      <dd>{{ customer.name }}</dd>
      <dt>메일</dt>
      <dd>{{ customer.email }}</dd>
      <dt>연락처</dt>
      <dd>{{ customer.phone }}</dd>
      <dt>address</dt>
      <dd>{{ customer.address }}</dd>
    </dl>
    <!-- <dl v-for="[id, member] in forMem" v-bind:key="id"></dl> -->
  </section>
</template>
