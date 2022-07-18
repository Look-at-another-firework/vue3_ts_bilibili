<template>
  <van-tabs v-model:active="activeName">
    <van-tab title="推荐" name="recommend">
      <VideoRecommend />
    </van-tab>
    <van-tab title="评论" name="comment">
      <VideoComment />
    </van-tab>
  </van-tabs>
</template>

<script lang="ts">
import { ref } from 'vue'
import VideoRecommend from './video-recommend.vue'
import VideoComment from './video-comment.vue'
export default {
  setup() {
    const activeName = ref('recommend')
    return {
      activeName
    }
  },
  components: {
    VideoRecommend,
    VideoComment
  }
}
</script>
