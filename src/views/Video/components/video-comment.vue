<template>
  <div class="comment" v-for="item in CommentList" :key="item.id">
    <div class="comment-head">
      <img class="avatar" :src="item.avatar" />
    </div>
    <div class="comment-body">
      <p class="username">{{ item.username }}</p>
      <p class="date">{{ item.date }}</p>
      <p class="content">{{ item.content }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, getCurrentInstance, onMounted } from 'vue'
import { IComment } from '@/types/Video/TypesVideo'

export default {
  setup() {
    const CommentList = ref<IComment[]>([])
    const { proxy } = getCurrentInstance() as any
    async function getVideoData() {
      const res = await proxy.$http.video.reqCommentsData()
      CommentList.value = res.result.items
      console.log(res)
    }

    onMounted(() => {
      getVideoData()
    })
    return { CommentList }
  }
}
</script>

<style lang="less" scoped>
.comment {
  display: flex;
  padding: 4vw;
  font-size: 3.5vw;
  line-height: 1.5;
  .comment-head {
    .avatar {
      width: 8vw;
      height: 8vw;
      border-radius: 50%;
      margin-right: 4vw;
    }
  }

  .comment-body {
    flex: 1;
    .username {
      color: #757575;
    }

    .date {
      color: #999;
      font-size: 3.2vw;
    }

    .content {
      color: #212121;
      margin-top: 3vw;
    }
  }
}
</style>
