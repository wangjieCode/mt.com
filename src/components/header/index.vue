<template>
	<div class="m-header">
		<el-row>
			<top-bar />
		</el-row>
		<el-row>
			<seach-bar />
		</el-row>
	</div>
</template>
<script>
import topBar from './topBar'
import seachBar from './seachBar'
export default {
  components: {
    topBar,
    seachBar
  }
}
</script>
<style lang="scss">
	@import "@/assets/css/public/header/index.scss";
</style>
