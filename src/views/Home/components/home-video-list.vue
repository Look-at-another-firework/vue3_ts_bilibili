<template>
  <!-- 视频列表组件 -->
  <div class="list">
    <appVideoItem v-for="item in videoList" :key="item.id" :video="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, onMounted } from 'vue'
import { IVideoItem } from '@/types/Home/TypeHome'
import appVideoItem from '@/components/app-video-item.vue'
export default defineComponent({
  setup() {
    const videoList = ref<IVideoItem[]>([])
    const { proxy } = getCurrentInstance() as any

    async function getChannel() {
      const res = await proxy.$http.home.reqVideoData()
      videoList.value = res.result
    }

    onMounted(() => {
      getChannel()
    })

    return {
      videoList
    }
  },
  components: {
    appVideoItem
  }
})
</script>

<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>
