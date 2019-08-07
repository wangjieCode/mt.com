<template>
  <div class="m-life">
    <el-row class="nav">
      <li>
        <a href="#" class="takeout">美团外卖</a>
      </li>
      <li class>
        <a href="#">猫眼电影</a>
      </li>
      <li>
        <a href="#">美团酒店</a>
      </li>
      <li>
        <a href="#" class="apartment">民宿／公寓</a>
      </li>
      <li>
        <a href="#" class="business">商家入驻</a>
      </li>
      <li>
        <a href="#">美团公益</a>
      </li>
    </el-row>
    <el-row class="nav2">
      <el-col :span="14">
        <slider/>
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt>
          </h4>
          <p class="m-life-login-name">Hi! 你好</p>
          <p>
            <router-link :to="{name:'register'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p>
            <router-link :to="{name:'login'}">
              <el-button round>立即登陆</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <div class="item download-app">
            <div class="qrcode-box">
              <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
            </div>
            <p class="app-name">美团APP手机版</p>
            <p class="sl">
              <span class="red">1元起</span>
              <span class="gary">吃喝玩乐</span>
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import slider from "./slider";
export default {
  components: {
    slider
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>
