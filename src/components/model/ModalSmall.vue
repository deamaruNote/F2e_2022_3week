<script setup>
import { ref } from "vue"
</script>

<template>
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
</template>

<style scoped>

</style>