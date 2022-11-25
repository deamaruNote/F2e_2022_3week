<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  handleStep: {
    type: Function,
    required: true,
  },
});

const step = ref(1);
const model = ref(0);
const step_list = reactive([
  { text: "會員系統（登入、註冊、管理)", id: 0, type: false, sort: 0 },
  { text: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）", id: 1, type: false, sort: 0 },
  { text: "前台職缺列表（缺詳細內容、點選可發送應徵意願）", id: 2, type: false, sort: 0 },
  { text: "應徵者的線上履歷編輯器", id: 3 },
]);
const handleStepsub = (val) => {
  step.value = val;
};
const handleModal = () => {
  model.value = 0;
};
const handleFinish = () => {
  model.value = 2;
  // 這裡放檢查
  // 對 => model = 2; 錯 => model = 1;
};

//drag
const onDrop = (dropResult) => {
      this.items = applyDrag(this.items, dropResult);
    }
</script>
<template>
  <div class="body">
    <!-- False -->
    <div class="modal" v-show="model === 1">
      <div class="chat-card">
        <div class="content">
          嘿！菜鳥！ <br />
          想跑去哪呢？你的試煉還沒有完成呢！
        </div>
        <button type="button" class="start-btn2" @click="handleModal">
          好的
          <img src="@/assets/start_icon2.png" alt="start" />
        </button>
      </div>
      <div class="man-grid right">
        <div class="man pink right">
          <div class="name-mark">小敏</div>
        </div>
      </div>
    </div>
    <!-- TRUE -->
    <div class="modal" v-show="model === 2">
      <div class="chat-card">
        <div class="content">做得好啊！菜鳥！</div>
        <button type="button" class="start-btn2" @click="props.handleStep(3)">
          謝謝
          <img src="@/assets/start_icon2.png" alt="start" />
        </button>
      </div>
      <div class="man-grid right">
        <div class="man pink right">
          <div class="name-mark">小敏</div>
        </div>
      </div>
    </div>
    <!-- 1 -->
    <div class="step" v-show="step === 1">
      <section class="container m-auto">
        <div class="chat-card">
          <div class="content">
            哈囉~{{ props.name }}。<br />
            我是開發 A 組的 PO，小敏。<br />
            <br />
            PO也就是
            <span class="pink">產品負責人(Product Owner)</span> 。<br />
            產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單(Product
            Backlog)唷！<br />
            剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，<span
              class="pink"
              >來試試看調整產品優先度，排出產品待辦清單吧！</span
            >
          </div>
          <button type="button" class="start-btn" @click="handleStepsub(2)">
            開始試煉
            <img src="@/assets/start_icon.png" alt="start" />
          </button>
        </div>
      </section>
      <div class="man-grid right">
        <div class="man pink right">
          <div class="name-mark">小敏</div>
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="step container" v-show="step === 2">
      <div class="header-card">
        請把需求放到產品待辦清單，並調整待辦的優先度順序。公司也推薦使用
        <span class="img"><img src="@/assets/jira.png" alt="jira" /></span>
        來做任務的管理喔！
      </div>
      <div class="sort-card">
        <h3>產品待辦清單 ProductBacklog</h3>
        <!-- <div class="content scattered">
          <div class="grid active">會員系統（登入、註冊、管理)</div>
          <div class="grid active">前台職缺列表（缺詳細內容、點選可發送應徵意願</div>
          <div class="grid active">後台職缺管理功能（資訊上架、下架、顯示應徵者資料）</div>
          <div class="grid active">應徵者的線上履歷編輯器</div>
        </div> -->
        <div class="content">
          <span class="hint"
            >優先度高 <img src="@/assets/Vector.png" alt="top"
          /></span>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <div class="grid"></div>
          <span class="hint"
            >優先度低 <img src="@/assets/Vector-1.png" alt="bottom"
          /></span>
        </div>
        <button type="button" class="pink-btn" @click="handleFinish">
          我完成了！
        </button>
      </div>
    </div>
    <!-- END -->
  </div>
</template>

<style lang="scss" scoped>
.header-card .img {
  height: 20px;
  padding: 0;
}
.img img {
  height: 20px;
}
.content.scattered {
  position: absolute;
  // border: 1px solid red;
}
.content.scattered .grid {
  position: fixed;
  width: 400px;
}
.content.scattered .grid:first-child {
  top: 55%;
  left: 60%;
}
.content.scattered .grid:nth-child(2) {
  top: 500px;
  left: 10%;
}
.content.scattered .grid:nth-child(3) {
  top: 550px;
  left: 930px;
}
.content.scattered .grid:nth-child(4) {
  top: 620px;
  left: 900px;
}
</style>