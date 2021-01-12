import ordericon2 from '@assets/img/user/daifa.png'
import ordericon1 from '@assets/img/user/daifu.png'
import ordericon3 from '@assets/img/user/daishou.png'
import ordericon4 from '@assets/img/user/pingjia.png'
import ordericon5 from '@assets/img/user/tui.png'

const userList = [
  { txt: '收藏夹', count: 200 },
  { txt: '店铺关注', count: 135 },
  { txt: '足迹', count: 370 },
  { txt: '红包券', count: 199 }
]
const userOrder = [
  { icon: ordericon1, txt: '待付款' },
  { icon: ordericon2, txt: '待发货' },
  { icon: ordericon3, txt: '待收货' },
  { icon: ordericon4, txt: '待评价' },
  { icon: ordericon5, txt: '退货' }
]
export { userList, userOrder }
