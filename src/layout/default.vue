<template>
  <div class="layout-default">
    <el-container class="m-header">
      <el-header height="">
				<my-header />
			</el-header>
      <el-main>
				<router-view></router-view>
			</el-main>
      <el-footer height="">
				<my-footer />
			</el-footer>
    </el-container>
  </div>
</template>
<script>
import MyHeader from '@/components/header/index'
import MyFooter from '@/components/footer/index'

export default {
  components: {
    MyHeader,
    MyFooter
  },
  data () {
    return {
      value: true
    }
  }
}
</script>
<style lang="sass">
	@import "@/assets/css/public/layout.scss"
</style>
