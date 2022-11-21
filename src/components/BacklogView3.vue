<script setup>
import { ref, reactive } from "vue";

const props = defineProps({
  handleStep: {
    type: Function,
    required: true,
  },
});

const model = ref(0);
const step = ref(0);
const sum = ref(0);
const numbers = reactive([8, 5, 4, 13]);
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
  if (1) {
    model.value = 2;
  } else {
    model.value = 1;
  }
};
</script>

<template>
  <div class="body">
    <!-- False -->
    <div class="modal" v-show="model === 1">
      <div class="chat-card">
        <div class="content">請再試試看，我相信你可以的！</div>
        <button type="button" class="start-btn2" @click="handleModal">
          好的
          <img src="@/assets/start_icon2.png" alt="start" />
        </button>
      </div>
      <div class="man-grid right">
        <div class="man brown right">
          <div class="name-mark">小捷</div>
        </div>
      </div>
    </div>
    <!-- TRUE -->
    <div class="modal" v-show="model === 2">
      <div class="chat-card">
        <div class="content">你做到了！非常有潛力喔！</div>
        <button type="button" class="start-btn2" @click="props.handleStep(4)">
          謝謝
          <img src="@/assets/start_icon2.png" alt="start" />
        </button>
      </div>
      <div class="man-grid right">
        <div class="man brown right">
          <div class="name-mark">小捷</div>
        </div>
      </div>
    </div>
    <!-- 1 -->
    <div class="step" v-show="step === 0">
      <section class="container m-auto">
        <div class="chat-card">
          <div class="content">
            產品待辦清單好了之後， <br />
            我們來召集 Scrum Master 和開發團隊 <br />
            共同召開
            <span class="pink">短衝規劃會議（Sprint Planning）</span> 。<br />
            短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，<br />

            <span class="pink">列出短衝待辦清單（Sprint Backlog）</span>
            ，並由開發團隊在接下來的產品開發週期裡執行。
          </div>
          <button type="button" class="start-btn2" @click="nextStep">
            繼續
            <img src="@/assets/start_icon2.png" alt="start" />
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
    <div class="step" v-show="step === 1 || step === 2">
      <section
        :class="{ 'container m-auto': true, 'long-container': step === 2 }"
      >
        <div class="chat-card">
          <div class="content">
            嗨嗨！你是新來的前端吧！<br />
            我是這次的 Scrum Master 小捷，<br />
            我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對Scrum
            瞭解。<br />
          </div>
          <button
            type="button"
            v-show="step === 1"
            class="start-btn2"
            @click="nextStep"
          >
            繼續
            <img src="@/assets/start_icon2.png" alt="start" />
          </button>
        </div>
        <div class="chat-card" v-show="step === 2">
          <div class="content">
            這兩位是小斯和小廣，是我們開發團為的成員唷～ 目前我們團隊一次 Sprint
            週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint
            Point) 大約是 20 點左右。
          </div>
          <button type="button" class="start-btn2" @click="nextStep">
            繼續
            <img src="@/assets/start_icon2.png" alt="start" />
          </button>
        </div>
      </section>
      <div class="man-grid left" v-show="step === 2">
        <div class="man yellow left">
          <div class="name-mark">小斯</div>
        </div>
      </div>
      <div class="man-grid left-right" v-show="step === 2">
        <div class="man black right">
          <div class="name-mark">小廣</div>
        </div>
      </div>
      <div class="man-grid right">
        <div class="man brown right">
          <div class="name-mark">小捷</div>
        </div>
      </div>
    </div>
    <!-- 3 -->
    <div class="step" v-show="step === 3">
      <section class="container m-auto">
        <div class="chat-card">
          <div class="content">
            菜鳥，你應該不知道點數是什麼意思吧哈哈！<br />
            我來跟你介紹一下吧～ <br />
            Sprint Point
            目的是為了衡量速度，是用大概花費的時間預估出的相對點數。
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
    <!-- 4 -->
    <div class="step" v-show="step === 4">
      <section class="container m-auto">
        <div class="chat-card">
          <div class="content">
            沒錯，如同小斯說的，我這邊已經把剛剛討論好的點數標上去囉～你來練習
            <span class="pink">把任務排到短衝待辦清單</span> 吧！ By the
            way，我們平常管理任務是使用
            <span class="img"><img src="@/assets/jira.png" alt="jira" /></span>
            這套軟體，你有時間記得先去註冊和熟悉唷～
          </div>
          <button type="button" class="start-btn" @click="nextStep">
            繼續
            <img src="@/assets/start_icon.png" alt="start" />
          </button>
        </div>
      </section>
      <div class="man-grid right">
        <div class="man black right">
          <div class="name-mark">小廣</div>
        </div>
      </div>
    </div>
    <!-- 5 -->
    <div class="step container" v-show="step === 5">
      <div class="header-card brown">
        請將產品待辦清單中的項目拖曳到短衝清單。 (20點內)
      </div>
      <div class="sort-parent">
        <div class="sort-card number">
          <h3>產品待辦清單 ProductBacklog</h3>
          <div class="content">
            <span class="hint"
              >優先度高 <img src="@/assets/Vector.png" alt="top"
            /></span>
            <div class="grid active" :data-num="numbers[0]">
              前台職缺列表 （缺詳細內容、點選可發送應徵意願）
            </div>
            <div class="grid active" :data-num="numbers[1]">
              後台職缺管理功能 （資訊上架、下架、顯示應徵者資料）
            </div>
            <div class="grid active" :data-num="numbers[2]">
              會員系統（登入、註冊、管理)）
            </div>
            <div class="grid active" :data-num="numbers[3]">
              應徵者的線上履歷編輯器
            </div>
            <span class="hint"
              >優先度低 <img src="@/assets/Vector-1.png" alt="bottom"
            /></span>
          </div>
        </div>
        <div class="sort-card yellow">
          <h3>開發 A 組的短衝辦清單</h3>
          <div class="content">
            <span class="hint">{{ sum }}/20點</span>
            <div class="grid"></div>
            <div class="grid"></div>
            <div class="grid"></div>
            <div class="grid"></div>
            <span class="hint"> </span>
          </div>
          <button type="button" class="pink-btn" @click="handleFinish">
            準備好了，開始 Sprint
          </button>
        </div>
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
.long-container {
  height: 100vh;
  margin-top: -35vh;
  transition: all 1s ease-in;
}
.sort-parent {
  display: flex;
  gap: 20px;
}
.grid {
  position: relative;
}
.sort-card.number .grid:after {
  position: absolute;
  display: inline-block;
  content: attr(data-num);
  top: 2px;
  right: 5px;
  background: #fff;
  border-radius: 50%;
  padding: 5px;
  height: 35px;
  line-height: 20px;
  text-align: center;
  width: 35px;
  border: 2px solid var(--text-color);
  box-sizing: border-box;
}
</style>