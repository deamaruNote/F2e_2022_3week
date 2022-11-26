<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const items = ref([
      { id: 0, title: "Item A", list: 1 },
      { id: 1, title: "Item B", list: 2 },
      { id: 2, title: "Item C", list: 1 },
    ]);

    //跨類別
    const getList = (list) => {
      return items.value.filter((item) => item.list === list);
    };

    const startDrag = (event, item) => {
      //
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };

    const onDrop = (event, list) => {
      //
      const itemID = event.dataTransfer.getData("itemID");
      const item = items.value.find((ele) => ele.id == itemID);
      item.list = list;
    };
    const overDrag = (event) => {
      //
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    };

    return { getList, startDrag, onDrop, overDrag };
  },
};
</script>

<template>
  <div>
    <div
      class="drop-zone"
      @drop="onDrop($event, 1)"
      @dropenter.prevent
      @dragover="overDrag($event)"
    >
      <div
        v-for="item in getList(1)"
        :key="item.id"
        class="drop-el"
        draggable="true"
        :id="item.id"
        :data-sort="item.id"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div
      class="drop-zone"
      @drop="onDrop($event, 2)"
      @dropenter.prevent
      @dragover="overDrag($event)"
    >
      <div
        v-for="item in getList(2)"
        :data-sort="item.id"
        :key="item.id"
        class="drop-el"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.drop-zone {
  padding: 5px 10px;
  width: 50%;
  background-color: #eee;
  margin: 50px;
  min-height: 100px;
}
.drop-el {
  display: block;
  background: #779988;
  color: #fff;
  padding: 5px;
  margin: 5px 0;
}
</style>