<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, reactive } from 'vue'
import MainView from './components/MainView0.vue'
import CharaView from './components/CharaView1.vue'
import TestView from './components/TestView2.vue'
import Backlog from './components/BacklogView3.vue'
import Scrum from './components/ScrumView4.vue'
import RetroView from './components/RetroView5.vue'
import FinishView from './components/FinishView6.vue'
const step = ref(6);
const baise_data = reactive({name: "AAA", gender: "girl"});
const handleStep = (num) => {
  step.value = num;
};
const getBasic = (names, genders) => {
  baise_data.name = names;
  baise_data.gender = genders;
};
</script>

<template>
  <main>
    <MainView v-if="step === 0" :handleStep="handleStep" />
    <CharaView v-if="step === 1" :handleStep="handleStep" :getBasic="getBasic" />
    <TestView v-if="step === 2" :handleStep="handleStep" :name="baise_data.name" />
    <Backlog v-if="step === 3" :handleStep="handleStep" />
    <Scrum v-if="step === 4" :handleStep="handleStep" />
    <RetroView v-if="step === 5" :handleStep="handleStep" />
    <FinishView v-if="step === 6" :handleStep="handleStep" :baise_data="baise_data" />
  </main>
</template>
