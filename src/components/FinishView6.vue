<script setup>
import { ref, reactive, onMounted } from "vue";

const props = defineProps({
  handleStep: {
    type: Function,
    required: true,
  },
  baise_data: {
      type: Object,
      required: true,
  }
});
const gender = ref("");
gender.value = props.baise_data.gender;
const step = ref(0);
const now = new Date();
const date = reactive({
    month: now.getMonth() +1,
    day: now.getDate(),
})
const nextStep = () => {
  step.value = 2;
};
</script>
<template>
  <div class="body">
    <!-- 0 -->
    <div class="step" v-show="step <= 1">
      <section class="container m-auto">
        <div class="chat-card">
          <div class="content">
            恭喜你通過 Scrum 新手村！<br />
            正式加入六角學院開發 A 組的大家庭！這是你的結業證書：
          </div>
          <button type="button" class="start-btn2" @click="nextStep">
            繼續
            <img src="@/assets/start_icon2.png" alt="start" />
          </button>
        </div>
        <div class="sort-card" v-if="step === 1">
          <div class="content">
            <img id="imgs" src="@/assets/six.png" alt="六角" />
            <canvas id="picture" width="350" height="500"></canvas>
          </div>
        </div>
      </section>
      <div class="man-grid right">
        <div class="man pink black">
          <div class="name-mark">小廣</div>
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="step container" v-show="step === 2">
      <div class="paper-card">
        <div class="logo"><img src="@/assets/six.png" alt="六角" /></div>
        <h3>結業證書</h3>
        <div class="gender">
            <img v-if="gender === 'boy'" src="@/assets/man_boy_c.png" alt="boy">
            <img v-if="gender === 'girl'" src="@/assets/man_girl_c.png" alt="girl">
        </div>
        <p>{{ props.baise_data.name }} 君</p>
        <p>於111年{{ date.month }}月{{ date.day }}日參加六角學院</p>
        <p>Scrum 新手培訓營，經測驗合格，特發給結業證書以資證明。</p>
        <p class="sir">
          校長
          <img src="@/assets/sir.png" alt="廖洧傑" />
        </p>
        <div class="foot">
          <p>六角學院波利馬資訊科技有限公司</p>
          <p>中華民國111年11月11日</p>
        </div>
      </div>
      <div class="audience">
        <img src="@/assets/men.png" alt="men" />
      </div>
    </div>
    <!-- end -->
  </div>
</template>

<style scoped>
.sort-card {
  margin-left: 0;
  width: 400px;
}
.sort-card .content {
  width: 400px;
  height: 1200px;
  zoom: 0.2;
  text-align: center;
}
canvas {
  margin: auto;
  height: 100%;
  box-shadow: 0 0 5px rgba(116, 48, 48, 0.7);
}
.paper-card {
  position: relative;
  margin: 0 auto;
  width: 400px;
  aspect-ratio: 30 / 48;
  margin-top: -75px;
  text-align: center;
  overflow: hidden;
  background: #fff;
}
.paper-card:before {
  content: "";
  position: absolute;
  top: 25px;
  left: 25px;
  width: calc(100% - 50px);
  height: calc(100% - 50px);
  border: 5px solid #fff8ba;
  box-sizing: border-box;
  z-index: 0;
}
.gender{
    position: absolute;
    top: 100px;
    left: 60px;
    width: 100px;
}
.gender img{
    width: 100%;
}
.logo {
  position: absolute;
  top: -5px;
  width: 80px;
  height: 80px;
  left: calc(50% - 35px);
  background-color: #fff;
}
.logo img {
  width: 100%;
}
.foot {
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
  text-align: center;
}
.paper-card h3 {
  font-size: 32px;
  font-weight: 600;
  margin: 100px auto 60px auto;
  letter-spacing: 2px;
}
p {
  margin: 0 auto;
}
p.sir {
  margin-top: 50px;
}
p.sir img {
  height: 50px;
  margin: 0 10px;
}
.paper-card p {
  font-size: 24px;
}
.foot p {
  font-size: 20px;
  line-height: 2rem;
}
.audience {
  position: absolute;
  left: calc(50% - 500px);
  bottom: -5px;
  width: 1000px;
}
.audience img {
  width: 100%;
}
</style>