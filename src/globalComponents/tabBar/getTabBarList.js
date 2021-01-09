import home from '@assets/img/home/home.png'
import cate from '@assets/img/home/category.png'
import find from '@assets/img/home/find.png'
import shop from '@assets/img/home/shopping.png'
import me from '@assets/img/home/me.png'

const tabBarList = [
  { txt: '首页', iconStyle: `background-image: url(${home});` },
  { txt: '分类', iconStyle: `background-image: url(${cate});` },
  { txt: '发现', iconStyle: `background-image: url(${find});` },
  { txt: '购物车', iconStyle: `background-image: url(${shop});` },
  { txt: '我的', iconStyle: `background-image: url(${me});` }
]

export { tabBarList }
