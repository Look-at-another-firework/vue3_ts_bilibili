<template>
  <!-- 轮播 -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in swiperList" :key="item.imgSrc">
      <img :src="item.imgSrc" />
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, onMounted } from 'vue'
import { ISwiper } from '@/types/Home/TypeHome'
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance() as any
    const swiperList = ref<ISwiper[]>([])
    async function getChannel() {
      const res = await proxy.$http.home.reqSwiperData()
      swiperList.value = res.result
    }

    onMounted(() => {
      getChannel()
    })
    return {
      swiperList
    }
  }
})
</script>

<style lang="less" scoped>
.my-swipe {
  img {
    width: 100%;
  }
}
</style>
