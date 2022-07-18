<template>
  <!-- 头部 -->
  <appHeader />
  <!-- 频道 -->
  <homeChannel />
  <!-- 轮播 -->
  <homeSwipe />
  <!-- 视频 -->
  <homeVideoList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import appHeader from '@/components/app-header.vue'
import homeChannel from './components/home-channel.vue'
import homeSwipe from './components/home-swipe.vue'
import homeVideoList from './components/home-video-list.vue'
export default defineComponent({
  setup() {
    return {}
  },
  components: {
    appHeader,
    homeChannel,
    homeSwipe,
    homeVideoList
  }
})
</script>

<style scoped></style>
