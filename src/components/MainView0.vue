<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  handleStep: {
    type: Function,
    required: true,
  },
});

let coming = ref(0);
let loading = ref(0);
const handleComing = () => {
  coming.value = 1;
};
// animate
onMounted(() => {
  let animation = gsap.timeline({
    scrollTrigger: {
      trigger: "#sect-chat",
      // markers: true,
      scroller: "main",
      start: "top 60%",
      end: "bottom 25%",
      toggleActions: "restart complete reverse none",
    },
  });
  animation
    .from(".title-card h1", {
      duration: 1,
      y: -400,
      scaleX: 0.4,
      scaleY: 0.4,
      opacity: 0,
      ease: "circ.out",
    })
    .to(".title-card h2", {
      duration: 1,
      opacity: 0.4,
      yoyo: true,
      repeat: -1,
    });
  gsap.from(".title-card h2", {
    duration: 1,
    y: -400,
    scaleX: 0.4,
    scaleY: 0.4,
    opacity: 0,
    ease: "elastic",
  });
  gsap.from(".pink.gsap", {
    duration: 1.5,
    y: -150,
    x: -150,
    ease: "ease-in",
  });
  gsap.from(".yellow.gsap", {
    duration: 1.5,
    y: 250,
    x: -150,
    ease: "ease-in",
  });
  gsap.from(".brown.gsap", {
    duration: 1.5,
    y: 150,
    x: 150,
    ease: "ease-in",
  });
  gsap.from(".black.gsap", {
    duration: 1.5,
    y: -150,
    x: 150,
    ease: "ease-in",
  });
});
</script>
<template>
  <div class="body">
    <div class="title-card" v-if="!coming">
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
      @click="handleComing()"
    >
      <div class="man pink gsap"></div>
      <div class="man yellow gsap"></div>
      <div class="man brown gsap"></div>
      <div class="man black gsap"></div>
    </button>
    <div class="ready" v-if="coming">
      <section class="container m-auto">
        <div id="dot" class="chat-card dot">...</div>
        <div class="chat-card start">
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
  </div>
</template>
<style scoped>
.title-card {
  display: block;
  text-align: center;
  height: 400px;
  margin: auto;
  padding-top: 80px;
}
h1,
h1 img {
  height: 130px;
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
.chat-card.dot {
  width: 200px;
  animation: fade-out 4s;
  animation-fill-mode: forwards;
}
.chat-card.start{
  opacity: 0;
  animation: fade-in 2s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  95%{
    opacity: 0;
    display: none;
    padding: 50px 70px;
  }
  100% {
    opacity: 0;
    padding: 0;
    display: none;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>