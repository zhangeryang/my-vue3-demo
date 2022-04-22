<template>
    <div class="title">项目搭建</div>
    <div class="panel">
        <h1>1. 使用 vite 快速构建项目</h1> 
        <p>npm init vite@latest //可选择是否集成 TS</p>
    </div>

    <div class="panel">
        <h1>2. 安装相关依赖</h1> 
        <p>element-plus router vuex axios sass</p>
    </div>

    <div class="panel">
        <h1>3. 配置环境变量</h1> 
        <h2>3.1 项目启动报错</h2>
        <div>
            错误：Failed to resolve vue/compiler-sfc. 
            原因：版本不一致
            解决方案：重装 compiler-sfc 
            https://blog.csdn.net/yotomato/article/details/124016528
        </div>
    </div>

    <div class="panel">
        <h1>4. 相关配置</h1>
    </div>

</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: '',
        components: {
        },
        setup() {
            // code
        }
    })
</script>



<style scoped lang="scss">
    .title {
        font-size: 30px;
        font-weight: 700;
    }
    .panel{ 
        text-align: left;
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        // border: 1px dashed #ccc;
        h1 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 16px;
            font-weight: 700;
            // margin-bottom: 16px;
            // text-align: left;
        }
    }
    
</style>
