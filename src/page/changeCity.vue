<template>
  <div class="page-changeCity">
    <el-row>
      <span class="name">省份选择：</span>
      <province
        :value="value"
        title="省份"
        :list="list"
        :isShow="showProvnice"
        @show_active="showActive1"
      />
      <province
        :value="value"
        title="城市"
        :list="list"
        :isShow="showCity"
        @show_active="showActive2"
      />
      <span>直接搜索: </span>
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"	
      >
        <el-option
          v-for="item in seachList"
          :key="item"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </el-row>
    <el-row>
			<hot-city :title="title" :cityList="cityList" />
		</el-row>
    <el-row>
			<hot-city :title="'最近访问'" :cityList="timeCity" />
		</el-row>
    <el-row>城市列表</el-row>
  </div>
</template>
<script>
import province from "@/components/chengeCity/province";
import hotCity from "@/components/chengeCity/hotCity";
export default {
  data() {
    return {
      list: ["黑龙江", "四川", "北京", "山西"],
      value: "省份",
      showProvnice: false,
			showCity: false,
			seachList:["黑龙江", "四川", "北京", "山西"],
			title:'热门城市',
			cityList:['北京','上海','广州','深圳','天津','西安','重庆','杭州','南京','武汉','成都'],
			timeCity:['北京','上海','广州',]
    };
  },
  components: {
		province,
		hotCity
  },
  methods: {
    showActive1(flag) {
      this.showProvnice = flag;
      if (flag) {
        this.showCity = false;
      }
    },
    showActive2(flag) {
      this.showCity = flag;
      if (flag) {
        this.showProvnice = false;
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
</style>
