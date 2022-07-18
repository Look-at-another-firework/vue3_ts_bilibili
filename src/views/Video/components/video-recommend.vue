<template>
  <div class="list">
    <AppVideoItem v-for="item in videoList" :key="item.id" :video="item" />
  </div>
</template>

<script lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue'
import AppVideoItem from '@/components/app-video-item.vue'
import { IVideoItem } from '@/types/Video/TypesVideo'

export default {
  setup() {
    const videoList = ref<IVideoItem[]>([])
    const { proxy } = getCurrentInstance() as any
    async function getVideoData() {
      const res = await proxy.$http.video.reqRecommendData()
      videoList.value = res.result
    }

    onMounted(() => {
      getVideoData()
    })

    return {
      videoList
    }
  },
  components: {
    AppVideoItem
  }
}
</script>

<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>
