<template>
  <div class="periphery">
    <div class="top">
      <div class="top_find">发现周边</div>
      <div class="top_count">
        <span class="h">{{h}}</span>:
        <span class="m">{{m}}</span>:
        <span class="s">{{s}}</span>
      </div>
      <div class="top_nextTime">下场等待开启 | 12:00</div>
      <div class="top_more">更多优惠</div>
    </div>
    <div class="cont">
      <ul class="cont_left">
        <li
          v-for="(item, index) in leftData"
          :key="index"
          class="cont_li_txt">
            <div class="cont_li_txt_line1" :style="item.icon">{{item.line1}}</div>
            <div class="cont_li_txt_line2">{{item.line2}}</div>
            <div class="cont_li_txt_left_img" :style="item.img"></div>
            <div class="cont_li_txt_buy">立即抢购</div>
        </li>
      </ul>
      <ul class="cont_right">
        <li v-for="(item, index) in rightData" :key="index">
          <div class="cont_right_left">
            <div class="cont_right_left_line1" :style="item.icon">{{item.line1}}</div>
            <div class="cont_right_left_line2">{{item.line2}}</div>
            <div class="cont_right_left_img"></div>
            <div class="cont_right_left_buy">立即抢购</div>
          </div>
          <div class="cont_right_right" :style="item.img"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { leftData, rightData } from './js/getData.js'
export default {
  name: 'Periphery',
  data () {
    return {
      leftData,
      rightData,
      count: null,
      h: null,
      m: null,
      s: null
    }
  },
  methods: {
    getCount () {
      const now = new Date()
      const hours = now.getHours()
      const today = new Date().toLocaleDateString()
      const future = new Date(today)
      let leftHours = 12
      if (hours >= 12) leftHours += 24
      future.setTime(future.getTime() + 3600 * 1000 * leftHours)
      const count = (future - now) / 1000
      this.count = count
      this.getHMS()
    },
    getHMS () {
      const h = Math.floor(this.count / 3600)
      const m = Math.floor(this.count % 3600 / 60)
      const s = Math.floor(this.count % 3600 % 60)
      this.h = h
      this.m = m
      this.s = s
    },
    countTime () {
      setInterval(() => {
        this.count--
        this.getHMS()
      }, 1000)
    }
  },
  mounted () {
    this.getCount()
    this.countTime()
  }
}
</script>

<style lang="less" scoped>
  .periphery {
    margin: 0.266666rem auto 0 auto;
    width: 9.466666rem;
    line-height: 0.746666rem;
    background: #ffffff;
    white-space: nowrap;
    .top {
      display: flex;
      .top_find {
        font-size: 0.4rem;
        width: 1.573333rem;
        height: 0.373333rem;
        color: #333333;
        margin: 0 0.373333rem 0 0.213333rem;
      }
      .top_count {
        font-size: 0.293333rem;
        width: 1.146666rem;
        color: #333333;
        margin-right: 0.106666rem;
        span {
          display: inline-block;
          text-align: center;
          line-height: 0.373333rem;
          margin-top: 0.213333rem;
          font-size: 0.266666rem;
          width: 0.373333rem; height: 0.373333rem;
          color: #fffefe;
          background: #333333;
        }
      }
      .top_nextTime {
        width: 2.666666rem; height: 0.346666rem;
        margin-left: 0.266666rem;
        font-size: 0.293333rem;
        color: #7e7e7e;
      }
      .top_more {
        width: 1.253333rem;
        height: 0.32rem;
        font-size: 0.32rem;
        color: #7e7e7e;
        margin-left: 1.333333rem;
      }
    }
    .cont {
      height: 4.596266rem;
      background-color: #fff;
      display: flex;
      border-right: 0.026666rem solid #eee;
      border-bottom: 0.026666rem solid #eee;
      ul li {
        flex: 1;
        border-left: 0.026666rem solid #eee;
        border-top: 0.026666rem solid #eee;
        text-align: center;
        color: #333;
        .cont_li_txt_line1 {
          font-size: 0.373333rem;
          line-height: 0.373333rem;
          margin-top: 0.48rem;
        }
        .cont_li_txt_line2 {
          margin-top: 0.16rem;
          font-size: 0.293333rem;
          line-height: 0.293333rem;
        }
        .cont_li_txt_left_img {
          height: 1.866666rem;
        }
      }
      .cont_li_txt_buy, .cont_right_left_buy {
        max-width: 1.4rem;
        background: #f23a3a;
        border-radius: 0.16rem;
        font-size: 0.266666rem;
        line-height: 0.266666rem;
        color: #ffffff;
        margin: 0.346666rem auto 0.213333rem auto;
        padding: 0.053333rem 0.08rem;
      }
      .cont_left {
        width: 5.333333rem; height: 3.466666rem;
        display: flex;
        height: 100%;
      }
      .cont_right {
        flex: 1;
        display: flex;
        flex-direction: column;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 7px 13px;
          .cont_right_left {
            width: 1.653333rem;
            .cont_right_left_line1 {
              margin: 0.32rem 0 0.133333rem 0;
              width: 1.653333rem;
              font-size: 0.293333rem;
              line-height: 0.373333rem;
              height: 0.373333rem;
              color: #333;
              padding-left: 0.426666rem;
            }
            .cont_right_left_line2 {
              font-size: 0.293333rem;
              line-height: 0.293333rem;
              color: #333;
              margin-bottom: 0.106666rem;
            }
          }
          .cont_right_right {
            flex: 1;
          }
        }
      }
    }
  }
</style>
