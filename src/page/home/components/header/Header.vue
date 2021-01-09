<template>
  <!-- 头部组件 -->
  <header>
    <div class="QRcode">
      <div class="QRcode_img"></div>
      <span class="QRcode_txt">扫一扫</span>
    </div>
    <input type="text" class="search" placeholder="新一代V3.0智能手环发售" />
    <div class="redbag"></div>
    <div class="msg">
      <div class="msg_img"></div>
      <div class="msg_txt">消息</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      query: '新一代V3.0智能手环发售'
    }
  }
}
</script>

<style lang="less" scoped>
  header {
    height: 1.6rem;
    display: flex;
    align-items: center;
    // 扫一扫
    .QRcode {
      margin:0 0.373333rem 0 0.506666rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .QRcode_img {
        width: 0.48rem; height: 0.48rem;
        background: url(../../../../assets/img/home/扫码@2x.png) 0/100%;
        margin-bottom: 0.08rem;
        margin-left: auto;
        margin-right: auto;
      }
      .QRcode_txt {
        font-size: 0.24rem;
        font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
        color: #ffffff;
        white-space: nowrap;
      }
    }
    // 搜索框
    .search {
      padding-left: 0.933333rem;
      background: url(../../../../assets/img/home/矢量智能对象_5@2x.png) 0.266666rem 0.213333rem/0.453333rem no-repeat #fff;
      height: 0.88rem;
      flex: 1;
      border-radius: 0.453333rem;
      margin-right: 0.24rem;
      font-size: 0.346666rem;
      font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
      color: #7e7e7e;
    }
    // 红包
    .redbag {
      width: 0.826666rem; height: 0.826666rem;
      min-width: 0.708533rem; min-height: 0.705866rem;
      background: url(../../../../assets/img/home/1@2x.png) 0/100% no-repeat;
      margin-right: 0.32rem;
    }
    // 消息
    .msg {
      margin-right: 0.4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .msg_img {
        margin-left: 1.8px;
        width: 0.506666rem; height: 0.506666rem;
        background: url(../../../../assets/img/home/矢量智能对象_4@2x.png) 0/100%;
        margin-bottom: 0.08rem;
      }
      .msg_txt {
        font-size: 0.24rem;
        font-family: Adobe Heiti Std R, Adobe Heiti Std R-R;
        color: #ffffff;
        letter-spacing: 0px;
        white-space: nowrap;
      }
    }
  }
  &header::after {
    content: '';
    display: block;
    width: 10rem; height: 4.693333rem;
    background: linear-gradient(0deg,#f23a3a 0%, #f75f30 100%);
    border-radius: 10% 10% 23% 23% / 0% 0% 9% 9%;
    position: absolute;
    top: 0; left: 0;
    z-index: -1;
  }
</style>
