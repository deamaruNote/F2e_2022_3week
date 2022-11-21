<script setup>
import { ref } from "vue";
const props = defineProps({
  handleStep: {
    type: Function,
    required: true
  },
  getBasic:{
    type: Function,
    required: true
  }
});

const gender = ref("");
const name = ref("");
const modal  = ref(false);

const handelGender = (type) => {
  gender.value = type;
};
const handleModal = () =>{
    modal.value = false;
}
const handleData = () => {
    if(name.value && gender.value){
        props.getBasic(name.value, gender.value)
        props.handleStep(2);
    }else{
    modal.value = true;
    }
};
</script>
<template>
  <div class="body">
    <div class="modal" v-show="modal">
      <div class="chat-card">
        <div class="content">
          嘿！菜鳥！ <br />
          不打算報上名嗎？
        </div>
        <button type="button" class="start-btn2" @click="handleModal">
          好的
          <img src="@/assets/start_icon2.png" alt="start" />
        </button>
      </div>
      <div class="man-grid right">
        <div class="man pink right">
          <div class="name-mark">???</div>
        </div>
      </div>
    </div>
    <!--  -->
    <h3>請選擇代表你的角色</h3>
    <div class="gender">
      <button
        type="button"
        class="chara"
        v-show="gender !== 'boy'"
        @click="handelGender('boy')"
      >
        <img class="none" src="@/assets/man_boyb.png" alt="boy" />
      </button>
      <button type="button" class="chara" v-show="gender === 'boy'">
        <img class="checked" src="@/assets/man_boy.png" alt="boy" />
      </button>
      <button
        type="button"
        class="chara"
        v-show="gender !== 'girl'"
        @click="handelGender('girl')"
      >
        <img class="none" src="@/assets/man_girlb.png" alt="girl" />
      </button>
      <button type="button" class="chara" v-show="gender === 'girl'">
        <img class="checked" src="@/assets/man_girl.png" alt="girl" />
      </button>
    </div>
    <div class="form">
      <input type="text" placeholder="請輸入你的名字" v-model="name" />
      <button type="button" class="pink-btn" @click="handleData">確定</button>
    </div>
  </div>
</template>
<style scoped>
.body {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}
.body > * {
  width: 600px;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
h3 {
  font-size: 28px;
  text-align: center;
  color: var(--text-color);
  margin: 40px;
}
.gender {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
}
.gender .chara {
  background: transparent;
  border: none;
  height: 350px;
  cursor: pointer;
}
.chara img {
  height: 100%;
}
.form {
  text-align: center;
}
.form > * {
  width: 60%;
  border: 0;
  box-sizing: border-box;
}
.form input {
  font-size: 20px;
  border: 1px solid var(--text-color);
  border-radius: 5px;
  padding: 10px 20px;
  color: var(--text-color);
  margin-block: 20px;
}
</style>
