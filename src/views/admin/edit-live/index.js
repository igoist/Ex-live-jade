import g from '../../../global'

import template from './index.html'

export default class {
  mount(container) {
    document.title = 'edit'
    container.innerHTML = template
    container.querySelector('.to-add').addEventListener('click', () => {
      // 调用router.go方法加载 /bar 页面
      g.routerAdmin.go('/admin/add')
    })
  }
}