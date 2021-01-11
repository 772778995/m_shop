// 图片路径
import icon1 from '@assets/img/tabBar/home.png'
import icon2 from '@assets/img/tabBar/category.png'
import icon3 from '@assets/img/tabBar/find.png'
import icon4 from '@assets/img/tabBar/shopping.png'
import icon5 from '@assets/img/tabBar/me.png'
import active1 from '@assets/img/tabBar/home2.png'
import active2 from '@assets/img/tabBar/category2.png'
import active3 from '@assets/img/tabBar/find2.png'
import active4 from '@assets/img/tabBar/shopping2.png'
import active5 from '@assets/img/tabBar/me2.png'
const tabBarList = [
  { txt: '首页', iconStyle: `background-image: url(${icon1});`, iconStyle2: `background-image: url(${active1});`, path: '/' },
  { txt: '分类', iconStyle: `background-image: url(${icon2});`, iconStyle2: `background-image: url(${active2});`, path: '/category' },
  { txt: '发现', iconStyle: `background-image: url(${icon3});`, iconStyle2: `background-image: url(${active3});`, path: '/find' },
  { txt: '购物车', iconStyle: `background-image: url(${icon4});`, iconStyle2: `background-image: url(${active4});`, path: '/shopcar' },
  { txt: '我的', iconStyle: `background-image: url(${icon5});`, iconStyle2: `background-image: url(${active5});`, path: '/me' }
]

export { tabBarList }
