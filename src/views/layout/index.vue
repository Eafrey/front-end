<template>
    <div class="container">
        <div class="header">
            <div class="title">
                Eafrey
            </div>
            <Menu
                    class="menu-bar"
                    background-color="#FFF"
                    mode="horizontal"
                    :router=true
                    text-color='#303133'
                    active-text-color="FFF">
                <MenuItem index="/home">主页</MenuItem>
                <MenuItem index="/articles">文章</MenuItem>
                <MenuItem index="/catalog">分类</MenuItem>
                <MenuItem index="/about">关于</MenuItem>
            </Menu>
        </div>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
    import { Menu, MenuItem } from 'element-ui';
    
    export default {
        name: 'layout',
        components: {
            Menu,
            MenuItem
        }
    }
</script>

<style lang="scss" scoped>
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
                font-size: 24px;
                margin-left: 20px;
                flex-grow: 1;
                font-weight: 500;
            }
        }

        .content {
            margin-top: 60px;
            flex-grow: 1;
            background-color: $background-color-base;
        }
    }
</style>

