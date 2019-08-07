<template>
	<div class="m-geo">
		<div class="position">
			<i class="el-icon-location" />
			浙江
			<router-link class="ChangeCity" :to="{name:'ChangeCity'}">
				切换城市
			</router-link>
			[
				<a href="#">大厂回族自治县</a>
				<a href="#">廊坊</a>
				<a href="#">吗卖批</a>
			]
			<div class="m-user">
				<router-link class="login" :to="{name:'login'}">
					立即登陆
				</router-link>
				<router-link class="register" :to="{name:'register'}">
					注册
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {

}
</script>
