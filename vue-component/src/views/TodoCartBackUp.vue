<template>
  <h2>🛒 장바구니</h2>
  <div style="margin-bottom: 1rem" id="addCart">
    <label>상품코드: <input type="text" v-model="code" /></label><br />
    <label>상품명: <input type="text" v-model="name" /></label><br />
    <label>가격: <input type="number" v-model="price" /></label><br />
    <label>수량: <input type="number" v-model="qty" /></label><br />
    <button v-on:click="addItem">상품 추가</button>
  </div>
  <table border="1" cellspacing="0" cellpadding="5">
    <thead>
      <tr style="background-color: #eee">
        <th>상품코드</th>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>합계</th>
        <th>삭제</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[code, item] in productList" v-bind:key="code">
        <td>{{ item.code }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price.toLocaleString() }}</td>
        <td>
          <input type="number" min="1" style="width: 60px" v-model.number="item.qty" />
        </td>
        <td>{{ (item.price * item.qty).toLocaleString() }}</td>
        <td><button v-on:click="deleteCart(code)">❌</button></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="4" style="text-align: right">총합계:</th>
        <th colspan="2">{{ totalPrice }}</th>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

let code = ref("P002");
let name = ref("무선마우스");
let price = ref(20000);
let qty = ref(1);
const data = new Map();
data.set("P001", { code: "P001", name: "무선키보드", price: 10000, qty: 1 });
const productList = reactive(data);

const addItem = () => {
  productList.set(code.value, {
    code: code.value,
    name: name.value,
    price: price.value,
    qty: qty.value,
  });
  code = ref("");
  name = ref("");
  price = ref(0);
  qty = ref(0);
};

const deleteCart = (code) => {
  productList.delete(code);
};

const totalPrice = computed(() => {
  let total = 0;
  for (let item of productList) {
    total += item[1].price * item[1].qty;
  }
  return total.toLocaleString();
});
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
input[type="text"],
input[type="number"] {
  margin: 3px 0;
}
button {
  margin-top: 5px;
}
</style>
