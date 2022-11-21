<script setup>
import { ref } from "vue";

const props = defineProps({
  Sentence: {
    type: Array,
    require: true,
  },
  ButtonText: {
    type: String,
    require: true,
  },
  ButtonFun: {
    type: Function,
  }
})
</script>

<template>
  <!-- 1 -->
  <div class="step">
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
</template>

<style scoped>
</style>