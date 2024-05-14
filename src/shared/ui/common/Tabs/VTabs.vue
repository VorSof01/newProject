<template>
  <div id="tabs-container" :class="customClass" ref="tabContainer">
    <div id="tab-headers">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index" :class="activeTabIndex === index ? 'active' : ''" @click="changeTab(index)" ref="tabHeaders">{{ tab.title }}</li>
      </ul>
    </div>
    <div id="active-tab">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
const props = defineProps([ 'customClass' ]);
let tabContainer = ref(null);
let tabHeaders = ref(null);
let tabs = ref(null);
let activeTabIndex = ref(0);

onMounted(() => {
  tabs.value = [ ...tabContainer.value.querySelectorAll('.tab') ];
  for(let x of tabs.value) {
    if(x.classList.contains('active')) {
      activeTabIndex = tabs.value.indexOf(x);
    }
  }
})
const changeTab = (index) => {
  activeTabIndex = index;
  for(let x of [...tabs.value, ...tabHeaders.value]) {
    x.classList.remove('active')
  }
  tabs.value[activeTabIndex].classList.add('active')
  tabHeaders.value[activeTabIndex].classList.add('active')
}
</script>

<style>
#tab-headers ul {
  margin: 0;
  display: flex;
  color: #949DAF;
  text-align: center;
  background: white;
  border-radius: 60px;
  width: 340px;
  gap: 70px;
}
#tab-headers ul li {
  list-style: none;
  padding: 1rem 1.25rem;
  position: relative;
  cursor: pointer;
}
#tab-headers ul li.active {
  color: white;
  font-weight: bold;
  background-color: #434FBA;
  border-radius: 60px;
  width: 190px;
  text-align: center;
}

#tab-headers ul li.active:after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 0;
  width: 100%;
  background: blue;
  cursor: pointer;
}
#active-tab, #tab-headers {
  width: 100%;
}

#active-tab {
  padding: 0.75rem;
}
</style>