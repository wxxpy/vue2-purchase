<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#112f50"
      text-color="#fff"
      active-text-color="#ffd04b" router :collapse="isCollapse"> 
      <el-menu-item >
        <span slot="title">采购管理系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
           <i class="el-icon-location"></i>
          <span>产品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/product/list">
          <i class="el-icon-setting"></i>
          产品列表</el-menu-item>
          <el-menu-item index="/product/category">
          <i class="el-icon-setting"></i>
          产品分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
           <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/colletc">
          <i class="el-icon-setting"></i>
          订单列表</el-menu-item>
          <el-menu-item index="/order/qingdan">
          <i class="el-icon-setting"></i>
          汇总清单</el-menu-item>
          <el-menu-item index="/order/audit">
          <i class="el-icon-setting"></i>
          订单审核</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
           <i class="el-icon-location"></i>
          <span>广告分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/advertise/list">
          <i class="el-icon-setting"></i>
          广告列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">系统管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props:['isCollapse']
}
</script>

<style lang="less" scoped>
.el-menu {
  border-right: 0;
   /deep/ .is-active{
    background-color: #1e78bf !important;
    color: #fff !important;
  }
}
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>