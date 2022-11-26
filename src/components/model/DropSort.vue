<script setup>
import { ref } from "vue";

const list = ref([
  { id: 0, name: "AAA", drag: false },
  { id: 1, name: "BBB", drag: false },
  { id: 2, name: "CCC", drag: false },
  { id: 3, name: "DDD", drag: false },
]);
const hand_tem = ref(null);
const current = ref(null);

const dragStart = (event, index) => {
  hand_tem.value = index;
  list.value[index]["drag"] = true;
};
const dragEnd = () => {
  let remove_id = hand_tem.value;
  let add_id = current.value;
  let result = list.value;
  [result[add_id], result[remove_id]] = [result[remove_id], result[add_id]];
  
  list.value.map((item) => (item.drag = false));
};
const dragOver = (event, index) => {
  event.preventDefault();
};
const dragEnter = (index) => {
  current.value = index;
};
</script>

<template>
  <div class="body">
    <div
      v-for="(item, index) in list"
      :key="item.id"
      :class="{ item: true, none: item.drag }"
      draggable="true"
      @dragstart="dragStart($event, index)"
      @dragenter="dragEnter(index)"
      @dragover="dragOver($event, index)"
      @dragend="dragEnd"
    >
      {{ item.name }} {{ item.drag }}
    </div>
  </div>
</template>
<style scoped>
.body {
  width: 300px;
  margin: auto;
  padding: 10px;
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  box-shadow: 0 0 15px #66666680;
}
.body .item {
  padding: 10px 20px;
  background: #778877;
  border: 2px solid #554433;
  color: #ffffff;
  cursor: grab;
  transition: all 0.2s ease-in;
}
.item.none {
  opacity: 0;
}
.item:hover {
  transform: scale(1.02);
  background: #5e6f5e;
}
</style>