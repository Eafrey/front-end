<template>
    <div class="container">
    <div class="header">
        <div class="title">
            Eafrey
        </div>
        <el-menu 
            class="menu-bar" 
            background-color="#FFF" 
            mode="horizontal" 
            router=true 
            text-color='#303133'
            active-text-color="FFF">
            <el-menu-item index="/home">主页</el-menu-item>
            <el-menu-item index="/articles">文章</el-menu-item>
            <el-menu-item index="/catalog">分类</el-menu-item>
            <el-menu-item index="/about">关于</el-menu-item>
        </el-menu>
    </div>
    <router-view class="content"></router-view> 
    </div>
</template>

<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: white;
      z-index: $header-z-index;
      border-bottom: solid 1px $border-color-base;

      .title {
          text-align: left;
          font-weight: 600;
          color: $color-text-primary;
          font-size: 32px;
          margin-left: 20px;
          flex-grow: 1;
          font-weight: 500;
      }
  }

  .content {
      margin-top: 60px;
      flex-grow: 1;
  }
}
</style>

