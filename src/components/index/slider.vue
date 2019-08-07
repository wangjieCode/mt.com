<template>
	<div class="slide">
    <el-carousel height="240px">
    	<span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel-item v-for="item in imgList" :key="item.url">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
	</div>
</template>
<script>
export default {
	data() {
		return {
			imgList:[{
				url:'#sss',
				img:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
			},{
				url:'#adk',
				img:'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
			}],
		}
	},
}
</script>
