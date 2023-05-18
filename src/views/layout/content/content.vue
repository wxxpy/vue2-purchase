<template>
  <div>  
      <div class="header">
          <div class="open">
              <span  v-if="!isCollapse" class="iconfont icon-right-indent" @click="changMenu"></span>
              <span  v-else class="iconfont icon-left-indent" @click="changMenu"></span>
          </div>
      </div>
   <router-view></router-view>
   </div>
</template>

<script>
export default {
    props:['isCollapse'],
    methods:{
        changMenu(){
            this.$emit('changShow')
        }
    }

}
</script>

<style lang="less" scoped>

.header{    
    color: #fff;
    height:50px;
    line-height: 50px;
    background-color: #1e78bf;
    .open{
        .iconfont{
            font-size: 22px;
            cursor: pointer;
        }
        
    }
}
</style>