<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseLeave"  >
      <dt>全部分类</dt>
      <dd v-for="( item, index ) in menuList" :key="index"  @mouseenter="mouseEnter(item)" >
				<i :class="item.type"></i>
				 {{ item.name }}
				<span class="arrow"></span>
			</dd>
    </dl>
		<div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave" >
			<template v-for="( item, index) in curDetail.items">
				<h4 :key="index"> {{ item.title }} </h4>
				<span v-for="( v, i) in item.items " :key="i+ '_' + v">{{ v }}</span>
				
			</template>
		</div>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
	data() {
		return {
			curDetail:null,
			menuList:[],
		}
	},
	mounted() {
		api.nav().then( result => {
			console.log(result);
			this.menuList = result.data.data;
		})
	},
	methods: {
		mouseEnter(item){
			this.curDetail = item
		},
		mouseLeave(){
			this.timer = setTimeout( () => {
				this.curDetail = null;
			},200)
		},
		detailEnter(){
			clearTimeout(this.timer);
		},
		detailLeave(){
			this.curDetail = null;
		}
	},
};
</script>
