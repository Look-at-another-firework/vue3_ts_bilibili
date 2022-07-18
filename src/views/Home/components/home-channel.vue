<!-- 频道组件 -->
<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="i in channelList" :key="i.id" :title="i.text"></van-tab>
  </van-tabs>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, onMounted } from 'vue'
import { IChannelList } from '@/types/Home/TypeHome'
export default defineComponent({
  setup() {
    const active = ref(0)
    const channelList = ref<IChannelList[]>([])
    const { proxy } = getCurrentInstance() as any

    async function getChannel() {
      const res = await proxy.$http.home.reqChannelData()
      channelList.value = res.result
    }

    onMounted(() => {
      getChannel()
    })

    return {
      active,
      channelList
    }
  }
})
</script>
