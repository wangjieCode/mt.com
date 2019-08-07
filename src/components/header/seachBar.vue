<template>
	<div class="search-panel">
		<el-row class="search-panel m-header-searchbar">
				<el-col :span="3" class="left">
				<img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
			</el-col>
			<el-col :span="15" class="center">
				<div class="wrapper">
					<el-input @input="input" v-model="isContent" @focus="focus" @blur="blur" placeholder="请输入内容"></el-input>
					<el-button type="primary" icon="el-icon-search"></el-button>
					<dl class="hotPlace" v-if="hotPlace">
						<dt>热门搜索</dt>
						<dd v-for="(item, index) in hotPlaceList" :key="index">
							<router-link :to="{name:'goods',pamser:item}">{{item}}</router-link>
						</dd>
					</dl>
					<dl class="searchList" v-if="searchList">
						<dd v-for="( item, index ) in searchListName " :key="index">
							<router-link :to="{name:item}">{{ item }}</router-link>
						</dd>
					</dl>
				</div>
				<div class="suggest">
					<a href="#">京东第一温泉度假村</a>
					<a href="#">99旅馆连锁</a>
					<a href="#">尚可呦快捷酒店</a>
					<a href="#">7天连锁酒店</a>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data () {
    return {
      isContent: '',
      isFocus: false,
      hotPlaceList: [],
      searchListName: ['火锅', '重庆火锅', '酸辣粉']
    }
  },
  computed: {
    hotPlace () {
      return this.isFocus && !this.isContent
    },
    searchList () {
      return this.isFocus && this.isContent
    }
  },
  methods: {
    focus () {
			this.isFocus = true;
			api.searchHotWords().then( (response) => {
				this.hotPlaceList = response.data.data
			})
    },
    blur () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
		},
		input(){
			api.search().then( (response) => {
				this.searchListName = response.data.data.list.filter( ele => {
					return ele.indexOf(this.isContent) > -1;
				})
			})
		}
	}
}
</script>
<style lang="scss">
  @import "@/assets/css/public/header/search.scss";
</style>
