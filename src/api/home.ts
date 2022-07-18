// product管理模块的数据
import request from '@/utils/request'

// 获取分类列表
export function reqChannelData() {
  return request({
    url: '/navList',
    method: 'get'
  })
}

// 轮播数据
export function reqSwiperData() {
  return request({
    url: '/swiperList',
    method: 'get'
  })
}

// 视频数据
export function reqVideoData() {
  return request({
    url: '/videosList',
    method: 'get'
  })
}
