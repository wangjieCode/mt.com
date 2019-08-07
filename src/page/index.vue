<template>
	<div class="page-index">
		<el-row>
			<el-col :span="5">
				<my-menu />
			</el-col>
			<el-col :span="19">
				<life />
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<contanner :nav="nav" />
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<contanner :nav="nav" />
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<contanner :nav="nav" />
			</el-col>
		</el-row>
	</div>
</template>
<script>
import MyMenu from "@/components/index/menu";
import life from "@/components/index/life";
import contanner from "@/components/index/contaniner";
export default {
	data() {
		return {
			nav:{
				title:'有格调',
				list:['全部约会','聚餐丽人','SPA','品质出游']
			}
		}
	},
	components:{
		MyMenu,
		life,
		contanner
	}
}
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
