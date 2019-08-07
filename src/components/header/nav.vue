<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <router-link to="/">我的美团</router-link>
        <dl>
          <dd>我的订单</dd>
          <dd>我的收藏</dd>
          <dd>抵用券</dd>
          <dd>账户设置</dd>
        </dl>
      </li>
      <li>
        <router-link to="/">手机APP</router-link>
      </li>
      <li class="list dl">
        <router-link to="/">商家中心</router-link>
        <dl>
          <dd>我的订单</dd>
          <dd>我的收藏</dd>
          <dd>抵用券</dd>
          <dd>账户设置</dd>
        </dl>
      </li>
      <li class="list">
        <router-link to="/">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>火车票</dd>
            <dd>榛果民宿</dd>
            <dd>经济型酒店</dd>
            <dd>主题酒店</dd>
            <dd>商务酒店</dd>
            <dd>公寓</dd>
            <dd>豪华酒店</dd>
            <dd>客栈</dd>
            <dd>青年旅社</dd>
            <dd>度假酒店</dd>
            <dd>别墅</dd>
            <dd>农家院</dd>
          </dl>
          <dl class="food">
            <dt>逛美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烧烤</dd>
            <dd>代金卷</dd>
            <dd>火锅</dd>
            <dd>自助餐</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热门影院</dd>
            <dd>热映电影口碑榜</dd>
            <dd>最受期待电影</dd>
            <dd>国内票房榜</dd>
          </dl>
					<dl class="app">
						<dt>
							手机应用
						</dt>
						<dd>
						<img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
						</dd>
						<dd>
							<a href="https://waimai.meituan.com/mobile/download/default" target="_blank"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" title="外卖app" alt="外卖app"></a>
						</dd>
						<dd>
							<a href="https://phoenix.meituan.com/app/" target="_blank"><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" title="榛果app" alt="榛果app"></a>
						</dd>
						<dd>
							<a href="https://www.dianping.com/events/m/index.htm" target="_blank"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" title="点评app" alt="点评app"></a>
						</dd>
						<dd>
							<a href="https://maoyan.com/app" target="_blank"><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" title="猫眼app" alt="猫眼app"></a>
						</dd>
					</dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
