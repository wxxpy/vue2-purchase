<template>
  <div class="layout">
    <div class="menu">
      <Menu :isCollapse="isCollapse"></Menu>
    </div>
    <div class="content" :class="{small:isCollapse}">
      <Content @changShow="changShow" :isCollapse="isCollapse"></Content>
    </div>
  </div>
</template>

<script>
import Menu from './menu/menu.vue'
import Content from './content/content.vue'
export default {
  components:{
    Menu,
    Content
  },
  data(){
    return{
      isCollapse:false
    }
  },
  methods:{
    changShow(){
      this.isCollapse=!this.isCollapse
    }
  }

}
</script>

<style lang='less' scoped>
.layout{
 
  .menu{
    // width: 200px;
    background-color: #112f50;
    position: fixed;
    left: 0;
    top: 0;
    bottom:0;
  }
  .content{
    
   padding-left:200px;
  
  }
  .small{
  padding-left: 64px;
  transition: all 0.2s;
}
}


</style>