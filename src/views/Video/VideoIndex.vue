<template>
  <!-- 头部 -->
  <AppHeader />
  <!-- 视频播放 -->
  <VideoPlay :videoInfo="videoInfo" />
  <!-- 视频详情 -->
  <VideoInfo :videoInfo="videoInfo" />
  <!-- 相关推荐/评论 -->
  <VideoBottom />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/app-header.vue'
import VideoPlay from './components/video-play.vue'
import VideoInfo from './components/video-info.vue'
import VideoBottom from './components/video-bottom.vue'
import { IVideoInfo } from '@/types/Video/TypesVideo'

export default defineComponent({
  setup() {
    const videoInfo = ref<IVideoInfo>({})
    const route = useRoute()

    const { proxy } = getCurrentInstance() as any
    async function getVideoData() {
      const res = await proxy.$http.video.reqVideoData(route.params.id)
      videoInfo.value = res.result
    }

    onMounted(() => {
      getVideoData()
    })

    return {
      videoInfo
    }
  },
  components: {
    AppHeader,
    VideoPlay,
    VideoBottom,
    VideoInfo
  }
})
</script>

<style lang="less" scoped>
.video-info {
  padding: 3vw 2vw;
  border-bottom: 1px solid #ddd;
  .title {
    font-size: 4vw;
    line-height: 6vw;
    margin: 3vw 0;
  }
  .author-info {
    display: flex;
    align-items: center;
    font-size: 3vw;
    color: #999;
    .author {
      flex: 1;
      .author-avatar {
        width: 5vw;
        height: 5vw;
        object-fit: cover;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 1vw;
        background: url(~@/assets/images/loading.png) no-repeat center #e7e7e7;
      }

      .author-name {
        color: #212121;
      }
    }
    > span {
      margin: 0 2vw;
    }
    .iconfont {
      font-size: 5vw;
      color: #757575;
      margin-right: 2vw;
    }
  }
}
</style>
