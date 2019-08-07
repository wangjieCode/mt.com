<template>
	<div class="m-hcity">
		<dl>
			<dt>{{ title }}:</dt>
			<dd
				v-for="( item) in cityList"
				:key="item"
			>
				{{ item }}
			</dd>
		</dl>
	</div>
</template>

<script>
export default {
	props:["title","cityList"]
}
</script>
<style lang="scss" scoped>
	@import "@/assets/css/changeCity/hot.scss";
</style>
