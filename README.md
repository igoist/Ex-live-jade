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
- [x] 加入(bootstrap-fileinput)[https://github.com/kartik-v/bootstrap-fileinput]，用法亦可参看(这里)[http://www.cnblogs.com/landeanfen/p/5007400.html]
- [x] 后台 hb-live-config 之 hb-live-config-part1 主要内容（尚未完成富文本编辑器）
- [x] 整理 Form 字段名
- [ ] 加入富文本编辑器
- [ ] 试做 tabs 切换效果

<br />

## 后续要做的事情：
* [ ] 加上 mobile 版样式
* [ ] 相应调整处理

<br />

```
log
│  
├── 加入富文本编辑器，放弃原先的 html 源码需求，自己强行写了 img 宽度调整选项，应该还得调整
├── 将主要用到的几个 components 文件提交到库
├── 加入了 rich-text-editor，但尚没有找到源码编辑扩展，只能算半成品
├── 在 live 配置页 part1 加入文件上传 file-input（也是 Bootstrap 的），添加其余字段，并对字段进行整理
├── 在 live 配置页 part1 成功加入第一个 datetimepick (Bootstrap日期和时间表单组件)
├── 在做 live 配置页的过程中做掉一部分的 tab 切换效果（后续还有很多要考虑，如各个页面的切换效果实现，tab 是否 active）
├── 后台 admin 的 home 页（table 表的 display 设置为<code>none</code>了）
├── 加入图片 zoom（半成品）
└── 完成首页 jade 模板 
```

<br />

## Form 字段
* 直播名称  --  hb-lc-name
* 直播编号  --  hb-lc-id
* 开始时间  --  hb-lc-start
* 价格口口  --  hb-lc-price
* 主播姓名  --  hb-lc-host
* 主播头像  --  hb-lc-avator
* 主播头衔  --  hb-lc-host-title
* 头图口口  --  hb-lc-header-pic
* 标题图口  --  hb-lc-title-pic （可选）
* 背景口口  --  hb-lc-banner-bg
* 背景图片  --  hb-lc-banner-bgpic (可选)
* 直播简介  --  hb-lc-live-intro
* 主播简介  --  hb-lc-host-intro