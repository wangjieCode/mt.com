<template>
	<div  class="choose-wrap" @click="showWrapper" v-decoument-click="hideWrapper">
		<div class="choose">
			{{ title }}
			<i class="el-icon-caret-bottom"></i>
			<div class="mt-content" :class="{'active':isShow}">
					<h2> {{ value }} </h2>
					<div class="wrapper">
						<div class="col">
							<span class="mt-item" v-for="( item, index) in list" :key="index"> {{item}} </span>
						</div>
					</div>
			</div>
	  </div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			// isShow:false
		}
	},
	props:[
		'value',
		'list',
		'title',
		'isShow'
	],
	methods: {
		showWrapper(e){
			e.stopPropagation(); 
			this.$emit('show_active',true);
		},
		hideWrapper(){
			this.$emit('show_active',false);
		}
	},
}
</script>
<style lang="scss">
	@import "@/assets/css/changecity/select.scss";
</style>
