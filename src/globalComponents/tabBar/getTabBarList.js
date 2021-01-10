import home from '@assets/img/home/home.png'
import cate from '@assets/img/home/category.png'
import find from '@assets/img/home/find.png'
import shop from '@assets/img/home/shopping.png'
import me from '@assets/img/home/me.png'

const tabBarList = [
  { txt: '首页', iconStyle: `background-image: url(${home});`, path: '/' },
  { txt: '分类', iconStyle: `background-image: url(${cate});`, path: '/category' },
  { txt: '发现', iconStyle: `background-image: url(${find});`, path: '/find' },
  { txt: '购物车', iconStyle: `background-image: url(${shop});`, path: '/shopcar' },
  { txt: '我的', iconStyle: `background-image: url(${me});`, path: '/me' }
]

export { tabBarList }
