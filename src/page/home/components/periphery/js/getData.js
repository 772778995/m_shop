import leftIcon1 from '@assets/img/home/sd.png'
import leftImg1 from '@assets/img/home/62490d5e765a3f4b4728c3de3c1dbe13@2x.png'
import leftIcon2 from '@assets/img/home/zn.png'
import leftImg2 from '@assets/img/home/0b35ac383cb5e94a3e7a41792937aac0@2x.png'
import rightIcon1 from '@assets/img/home/yj.png'
import rightImg1 from '@assets/img/home/707185031c44b7b8bf7e36ca4ab9179d@2x.png'
import rightIcon2 from '@assets/img/home/zq.png'
import rightImg2 from '@assets/img/home/6cefcf61ed5d531fd99da0ea3e9c7f4a@2x.png'

const leftData = [
  {
    icon: `background: url(${leftIcon1}) 0.133333rem 0/0.346666rem no-repeat;`,
    img: `background: url(${leftImg1}) center/1.12rem 1.52rem no-repeat;`,
    line1: '限时抢购',
    line2: '每场特价'
  },
  {
    icon: `background: url(${leftIcon2}) 0.133333rem 0/0.346666rem no-repeat;`,
    img: `background: url(${leftImg2}) center/1.12rem 1.52rem no-repeat;`,
    line1: '发现好货',
    line2: '精选良品'
  }
]

const rightData = [
  {
    icon: `background: url(${rightIcon1}) 0/0.346666rem no-repeat;`,
    img: `background: url(${rightImg1}) center/contain no-repeat; width: 1.386666rem; height: 1.12rem;`,
    line1: '9.9包邮',
    line2: '天天特价'
  },
  {
    icon: `background: url(${rightIcon2}) 0/0.346666rem no-repeat;`,
    img: `background: url(${rightImg2}) center/contain no-repeat; width:1.173333rem; height: 1.28rem;`,
    line1: '品牌折扣',
    line2: '优惠打折'
  }
]

export { leftData, rightData }
