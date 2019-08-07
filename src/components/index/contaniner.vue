<template>
  <div class="m-istyle">
    <dl @mouseover="over" :nav="nav">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active:kind === 'all'}"
        data-type=""
      >{{ item }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="( item, index ) in list" :key="index">
        <el-card :body-style="{padding:0}" shadow="never">
          <img :src="item.image" alt class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class>
              <span class="current-price-wrapper">
                <span class="price-symol numfont">￥</span>
                <span class="current-price numfont">{{item.sub_info.current_price}}</span>
              </span>
              <span class="old-price">门市价￥{{item.sub_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "https://p0.meituan.net/bbia/d166c04ecdf18c055195bc87963254a3581920.png@460w_260h_1e_1c",
          title: "COSTA COFFEE（新国瑞店）",
          sub_title:
            "8英寸欧式水果生日蛋糕--领先推出蛋糕店送货上门贴心服务的理念,同城3公里可免费配送到家！1个，约8英寸，圆型",
          sub_info: {
            current_price: 18,
            old_price: 36
          },
          address: "从文们"
        },
        {
          image:
            "https://p0.meituan.net/msmerchant/4dba47af54a247e33e8e514546e9045d319669.jpg@460w_260h_1e_1c",
          title: "COSTA COFFEE（新国瑞店）",
          sub_title:
            "8英寸欧式水果生日蛋糕--领先推出蛋糕店送货上门贴心服务的理念,同城3公里可免费配送到家！1个，约8英寸，圆型",
          sub_info: {
            current_price: 18,
            old_price: 36
          },
          address: "从文们"
        }
      ]
    };
  },
  props: ["nav"],
  methods: {
    over(e) {
      this.kind = e.target.getAttribute("data-type");
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>