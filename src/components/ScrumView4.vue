<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  handleStep: {
    type: Function,
    required: true,
  },
});

const step = ref(0);
const model = ref(0);
const nextStep = () => {
  step.value = step.value + 1;
};
const prevStep = () => {
  step.value = step.value - 1;
};
const handleModal = () => {
  model.value = 0;
};
const handleFinish = () => {
  // let result2 = step_list.map(item => {return item.text});
  let result = step_list
    .map((item) => {
      return item.id;
    })
    .slice(0, 3);
  let answer = [5, 3, 4];
  if (
    result.every((item, id) => {
       return item === answer[id];
    })
  ) {
    model.value = 2;
  } else {
    model.value = 1;
  }
};
// -----------DRAG-------------- //
const step_list = reactive([
  { id: 0, do: false, drag: false, text: "" },
  { id: 1, do: false, drag: false, text: "" },
  { id: 2, do: false, drag: false, text: "" },
  { id: 3, do: true, drag: false, text: "短衝檢視會議 Sprint Review" },
  { id: 4, do: true, drag: false, text: "短衝自省會議 Sprint Retrospective" },
  { id: 5, do: true, drag: false, text: "每日站立會議(Daily Scrum)" },
]);

const hand_tem = ref(null);
const current = ref(null);
const dragStart = (index) => {
  hand_tem.value = index;
  step_list[index]["drag"] = true;
};
const dragEnd = () => {
  let remove_id = hand_tem.value;
  let add_id = current.value;
  let result = step_list;
  [result[add_id], result[remove_id]] = [result[remove_id], result[add_id]];

  step_list.map((item) => (item.drag = false));
};
const dragOver = (event) => {
  event.preventDefault();
};
const dragEnter = (index) => {
  if (index < 3) {
    current.value = index;
  }
};
</script>

<template>
  <div class="body">
    <!-- False -->
    <div class="modal" v-show="model === 1">
      <div class="chat-card">
        <div class="content">加把勁啊新人！</div>
        <button type="button" class="start-btn2" @click="handleModal">
          好的
          <img src="@/assets/start_icon2.png" alt="start" />
        </button>
      </div>
      <div class="man-grid right">
        <div class="man yellow right">
          <div class="name-mark">小斯</div>
        </div>
      </div>
    </div>
    <!-- TRUE -->
    <div class="modal" v-show="model === 2">
      <div class="chat-card">
        <div class="content">
          這麼快就對Scrum瞭若指掌了，<br />
          我對你刮目相看了哦！
        </div>
        <button type="button" class="start-btn2" @click="props.handleStep(5)">
          謝謝
          <img src="@/assets/start_icon2.png" alt="start" />
        </button>
      </div>
      <div class="man-grid right">
        <div class="man yellow right">
          <div class="name-mark">小斯</div>
        </div>
      </div>
    </div>
    <!-- 1-4 -->
    <div class="step" v-show="step < 5">
      <section
        :class="{
          'container m-auto': true,
          'two-container': step === 1,
          'three-container': step === 2,
          'four-container': step === 3,
          'five-container': step === 4,
        }"
      >
        <div class="chat-card">
          <div class="content">
            等等等等等，你都還不知道什麼是 <span class="pink">Sprint</span> 吧！
            讓我先為你介紹一下～ 仔細聽好唷，等等會考考你！
          </div>
          <button type="button" class="start-btn2" @click="nextStep">
            繼續
            <img src="@/assets/start_icon2.png" alt="start" />
          </button>
        </div>
        <div class="chat-card" v-show="step > 0">
          <div class="content">
            <span class="pink">Sprint </span>是一個短衝，<br />
            開發團隊會在這期間執行開發。<br />
            在這段期間內，開發團隊舉辦每日站立會議<span class="pink">
              Daily</span
            >
            <span class="pink">Scrum</span> ，追蹤成員間的工作狀況。<br />
            除了每日站立會議，在 Sprint 結束後也會有：<br />
            <br />
            <span class="pink">短衝檢視會議 SprintReview、</span> <br />
            <span class="pink">短衝自省會議 Sprint Retrospective。</span> <br />
          </div>
          <button type="button" class="start-btn2" @click="nextStep">
            繼續
            <img src="@/assets/start_icon2.png" alt="start" />
          </button>
        </div>
        <div class="chat-card" v-show="step > 1">
          <div class="content">
            <span class="pink">每日站立會議 Daily Scrum </span> <br />
            <br />
            每天都要進行的會議，以 15 分鐘為限制 <br />
            <ul>
              <li>昨天為團隊的短衝目標（Sprint Goal）做了那些進度</li>
              <li>今天我會如何準備來幫助團隊達到短衝目標</li>
              <li>過程中有遇到什麼問題、難題</li>
            </ul>
            <br />
            透過團隊分享，追蹤大家的工作狀況。
          </div>
          <button type="button" class="start-btn2" @click="nextStep">
            繼續
            <img src="@/assets/start_icon2.png" alt="start" />
          </button>
        </div>
        <div class="chat-card" v-show="step > 2">
          <div class="content">
            <span class="pink">短衝檢視會議 Sprint Review </span> <br />
            <br />
            用來檢視該次短衝增量的成果，<br />
            以蒐集相關的回饋數據或意見。<br />
          </div>
          <button type="button" class="start-btn2" @click="nextStep">
            繼續
            <img src="@/assets/start_icon2.png" alt="start" />
          </button>
        </div>
        <div class="chat-card" v-show="step > 3">
          <div class="content">
            <span class="pink">短衝自省會議 Sprint Retrospective</span> <br />
            <br />
            團隊在自省會議裡，<br />
            會共同回顧該短衝歷程發生的事情：
            <ul>
              <li>好的地方</li>
              <li>可以改進的地方</li>
              <li>如何維持我們已有的成功經驗</li>
            </ul>
            優化工作流程、讓團隊有變得更好的機會。 <br />
            推薦工具：Confluence
          </div>
          <button type="button" class="start-btn2" @click="nextStep">
            繼續
            <img src="@/assets/start_icon2.png" alt="start" />
          </button>
        </div>
      </section>
      <div class="man-grid right">
        <div class="man yellow right">
          <div class="name-mark">小斯</div>
        </div>
      </div>
    </div>
    <!-- 5 -->
    <div class="step container" v-show="step === 5">
      <div class="header-card yellow">
        在這經典的 Scrum 流程圖中，<br />
        這些流程分別代表哪一個會議呢？請把對應的流程拖曳到正確位置。
      </div>
      <div class="sort-card scrum">
        <h3>Scrum 流程圖</h3>
        <div class="content scrum">
          <div
            v-for="(item, index) in step_list"
            :key="item.id"
            :id="item.id"
            :class="{ grid: true, active: item.do }"
            :draggable="item.do"
            @dragstart="dragStart(index)"
            @dragenter="dragEnter(index)"
            @dragover="dragOver($event)"
            @dragend="dragEnd"
          >
            {{ item.text }}
          </div>
        </div>
        <button type="button" class="pink-btn" @click="handleFinish">
          我完成了
        </button>
      </div>
    </div>
    <!-- BACK -->
    <button
      type="button"
      v-show="step"
      class="back-btn"
      @click="prevStep"
    ></button>
  </div>
</template>
<style scoped>
.container {
  margin: 0 auto;
}
.container ul {
  padding: 20px;
}
.two-container,
.three-container,
.four-container,
.five-container {
  height: 100vh;
  margin-top: -300px;
  transition: all 1s ease-in;
}
.three-container {
  margin-top: -750px;
}
.four-container {
  margin-top: -1370px;
}
.five-container {
  margin-top: -1730px;
}
.sort-card.scrum {
  width: 80%;
  padding: 10px 20px;
}
.sort-card.scrum .content {
  flex-direction: row;
  align-items: flex-end;
  height: 260px;
  padding-bottom: 40px;
  background: url("@/assets/scrum.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.sort-card.scrum .content .grid {
  flex: 1;
  font-size: 14px;
  /* height: auto; */
}
.sort-card.scrum .content .grid:first-child {
  transform: translate(170px, -170px);
}
.sort-card.scrum .content .grid:nth-child(n + 4) {
  position: absolute;
}
.sort-card.scrum .content .grid:nth-child(n + 4):not(.active) {
  border: none;
}
.sort-card.scrum .content .grid:nth-child(4) {
  right: 50px;
  top: 150px;
}
.sort-card.scrum .content .grid:nth-child(5) {
  right: 180px;
  top: 200px;
}
.sort-card.scrum .content .grid:nth-child(6) {
  right: -180px;
  top: 250px;
}
</style>