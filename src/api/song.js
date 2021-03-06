/**
 * Created by HHH on 2017/10/20.
 */
import {commonParams} from './config'
import axios from 'axios'

// 获取歌词
export function getLyric (musicid, songtype) {
  const url = 'api/getLyric'
  const data = Object.assign({}, commonParams, {
    songmid: musicid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
    // uin: 0,
    // platform: 'h5',
    // needNewCode: 1,
    // nobase64: 1,
    // musicid: musicid,
    // songtype: songtype,
    // _: '1509629806220'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
