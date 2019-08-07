<template>
	<el-row class="m-header-topbar m-header">
		<el-col :span="10">
			<geo />
		</el-col>
		<el-col :span="14">
			 <m-nav />
		</el-col>
	</el-row>
</template>
<script>
import mNav from './nav'
import geo from './geo'
export default {
  components: {
    geo,
    mNav
  }
}
</script>
<style lang="sass">
	@import '@/assets/css/public/header/topbar.scss'
</style>
