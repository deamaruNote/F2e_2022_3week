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
const radio = reactive({
  question1: 0,
  question2: 0,
});
const nextStep = () => {
  step.value = step.value + 1;
};
const handleQuest = (type, num) => {
  if (type === 1) {
    radio.question1 = num;
  } else if (type === 2) {
    radio.question2 = num;
  }
};
const handleModal = () => {
  model.value = 0;
};
const handleFinish = () => {
  const answer = {
    question1: 2,
    question2: 1,
  };
  const correct = (radio.question1 === answer.question1 && radio.question2 === answer.question2) ? true : false;
  console.log(answer, radio);
  if (correct) {
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
        <div class="content">......好哦，請再試一次吧～</div>
        <button type="button" class="start-btn2" @click="handleModal">
          好的
          <img src="@/assets/start_icon2.png" alt="start" />
        </button>
      </div>
      <div class="man-grid right">
        <div class="man black right">
          <div class="name-mark">小廣</div>
        </div>
      </div>
    </div>
    <!-- TRUE -->
    <div class="modal" v-show="model === 2">
      <div class="chat-card">
        <div class="content">
          你也是語言的藝術家了～～
        </div>
        <button type="button" class="start-btn2" @click="props.handleStep(6)">
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
    <!-- 0 -->
    <div class="step" v-show="step === 0">
      <section class="container m-auto">
        <div class="chat-card">
          <div class="content">
            哇賽新來的，你真的很幸運， <br />
            今天剛好是開發 B 組的
            <span class="pink">Retro</span>，你也來見識一下，看看 Retro
            都該做些什麼吧～～ <br />
            我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄在
            <span class="img"
              ><img src="@/assets/confluence.png" alt="confluence"
            /></span>
            中。 Retro 重點在於
            <span class="pink">「正面表述」</span> ，你也思考看看，哪一些是適合
            Retro 的回饋吧～～
          </div>
          <button type="button" class="start-btn2" @click="nextStep">
            繼續
            <img src="@/assets/start_icon2.png" alt="start" />
          </button>
        </div>
      </section>
      <div class="man-grid right">
        <div class="man pink black">
          <div class="name-mark">小廣</div>
        </div>
      </div>
    </div>
    <!-- 1 -->
    <div class="step container" v-show="step === 1">
      <div class="header-card black">
        重點在於「正面表述」，你也思考看看， 哪一些是適合 Retro 的回饋吧！
      </div>
      <div class="radio-card">
        <div class="content">
          <div class="title">做得好的地方</div>
          <button
            type="button"
            @click="handleQuest(1, 1)"
            :class="{ radio: true, check: radio.question1 === 1 }"
          >
            <span class="circle"></span>
            <span>這次我幫了很多人救火耶 ^_^</span>
          </button>

          <button
            type="button"
            @click="handleQuest(1, 2)"
            :class="{ radio: true, check: radio.question1 === 2 }"
          >
            <span class="circle"></span>
            <span>大家在開發上都會互相 cover，讓任務都有準在時間內完成。</span>
          </button>

          <div class="title">有哪些可以做得更好？</div>
          <button
            type="button"
            @click="handleQuest(2, 1)"
            :class="{ radio: true, check: radio.question2 === 1 }"
          >
            <span class="circle"></span>
            <span>可以記錄這次的開發時間，讓預估團隊點數可以更精準。</span>
          </button>

          <button
            type="button"
            @click="handleQuest(2, 2)"
            :class="{ radio: true, check: radio.question2 === 2 }"
          >
            <span class="circle"></span>
            <span>開發時間預估不準確，請後端下次改進，避免 delay 到我：）</span>
          </button>
        </div>
        <button type="button" class="pink-btn" @click="handleFinish">
          我完成了！
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-card .img > img {
  height: 35px;
  transform: translateY(10px);
}
</style>