# Ex-huaban-live-jade

Mock the site: live(with jade)

<p>主要是边用边学习 jade 模板</p>
<p>也先试着熟悉这种方式，方便下次（若有需要的话）维护下主站</p>

<br />

## 目前任务
- [x] 完成首页 jade 模板
- [ ] <del>将相应几部分数据放到 api 中去（api 自己直接在相应路由返回 json 的方式来模拟）</del> 由后端直接渲染了
- [x] 跟琪姐交流过，现在都侧重服务端渲染，故，直接搞了个对象，数据放里边 
- [x] 后台 home (包括其他几个页面，数据直接手写对象，样子先弄出来) & tabs
- [x] tabs 下各 tab 最基本的切换效果
- [x] hb-live-config 中成功加入第一个<code>datetimepick</code>
- [ ] 后台 hb-live-config

<br />

## 后续要做的事情：
* [ ] 加上 mobile 版样式
* [ ] 相应调整处理

<br />

```
log
│   
├── 在 live 配置页成功加入第一个<code>datetimepick</code>(Bootstrap日期和时间表单组件)[http://www.bootcss.com/p/bootstrap-datetimepicker/]
├── 在做 live 配置页的过程中做掉一部分的 tab 切换效果（后续还有很多要考虑，如各个页面的切换效果实现，tab 是否 active）
├── 后台 admin 的 home 页（table 表的<code>display</code>设置为<code>none</code>了）
├── 加入图片 zoom（半成品）
└── 完成首页 jade 模板 
```