<script setup>
import { ref } from "vue";

const props = defineProps({
  handleStep: {
    type: Function,
    required: true
  }
});

let coming = ref(0);
const handleComing = () => {
  coming.value = 1;
};
</script>
<template>
  <div class="title-card" v-show="!coming">
    <h1>
      <img src="@/assets/title_h2.png" alt="ＳＰＲＩＮＴ菜鳥" />
    </h1>
    <h2>
      <img src="@/assets/title_h1.png" alt="任意點擊開始" />
    </h2>
  </div>
  <button
    type="button"
    class="chara-group"
    v-show="!coming"
    @click="handleComing()">
    <div class="man pink"></div>
    <div class="man yellow"></div>
    <div class="man brown"></div>
    <div class="man black"></div>
  </button>
  <div class="ready" v-show="coming">
    <section class="container m-auto">
      <div class="chat-card">
        <div class="content">
          菜鳥！恭喜你成為六角學院的正式員工啦！ <br />
          在正式加入專案開發之前， <br />
          需要請你先了解 Scrum 的流程與精神！ <br />
          <br />
          成功通過 Scrum 新手村的試煉吧！<br />
        </div>
        <button type="button" class="start-btn" @click="props.handleStep(1)">
          開始試煉
          <img src="@/assets/start_icon.png" alt="start" />
        </button>
      </div>
    </section>
    <div class="man-grid right">
      <div class="man pink right">
        <div class="name-mark">???</div>
      </div>
    </div>
  </div>
  <a href=""></a>
</template>
<style scoped>
.title-card {
  display: inline-block;
  text-align: center;
  width: 850px;
  height: 400px;
  margin: auto;
}
h1,
h1 img {
  width: 850px;
  margin-top: 0;
}
h2,
h2 img {
  height: 45px;
}
.chara-group {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
}
.chara-group .man {
  aspect-ratio: 25/38;
  width: 250px;
}
.chara-group .man.pink {
  position: absolute;
  width: 250px;
  transform: rotate(108deg);
  top: -60px;
  left: -80px;
}
.chara-group .man.yellow {
  position: absolute;
  width: 330px;
  transform: rotate(21deg);
  bottom: -60px;
  left: 120px;
}
.chara-group .man.brown {
  position: absolute;
  width: 400px;
  transform: rotate(-17deg);
  bottom: -180px;
  right: 120px;
}
.chara-group .man.black {
  position: absolute;
  width: 210px;
  transform: rotate(-124deg);
  top: -60px;
  right: -20px;
}
</style>