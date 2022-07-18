// product管理模块的数据
import request from '@/utils/request'

// 获取视频数据
export function reqVideoData(id: number) {
  return request({
    url: '/videoDetail',
    method: 'get',
    params: { id }
  })
}

// 获取推荐数据
export function reqRecommendData() {
  return request({
    url: '/recommendList',
    method: 'get'
  })
}

// 获取评论数据
export function reqCommentsData() {
  return request({
    url: '/commentsList',
    method: 'get'
  })
}
