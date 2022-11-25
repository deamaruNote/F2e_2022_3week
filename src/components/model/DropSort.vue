<script setup>
import { reactive } from "vue";

const list = [
  { id: 0, name: "AAA", drag: false },
  { id: 1, name: "BBB", drag: false },
  { id: 2, name: "CCC", drag: false },
  { id: 3, name: "DDD", drag: false },
];

const dragStart = (event, index) => {
    event.target.style.display = "none";
    // list[index]['drag'] = true;
    console.log(list[index])
};
const dragEnter = () => {};
const onDrag = () => {};
const dragOver = (event) => {
  event.preventDefault();
};
const dragEnd = (event) =>{
    console.log("aaa")
    event.target.style.display = "block";
};
const dragLeave = () => {};
</script>

<template>
  <div class="body">
    <div
      v-for="(item, index) in list"
      :key="item.id"
      :class="{'item':true, 'none': item.drag}"
      draggable="true"
      @dragstart="dragStart($event, index)"
      @dragenter="dragEnter()"
      @dragover="dragOver($event)"
      @dragend="dragEnd($event)"
      @dragleave="dragLeave()"
      @drag="onDrag()"
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
.item.none{
    display: none;
}
.item:hover {
  transform: scale(1.02);
  background: #5e6f5e;
}
</style>