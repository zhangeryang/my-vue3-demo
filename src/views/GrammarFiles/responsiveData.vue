<template>
    <div class="title">响应式数据</div>
    <div class="panel">
        <h1>ref</h1> 
        <div>定义简单数据，ref扩号里是变量的初始值，通过给value属性添加 getter/setter 来实现对数据的劫持</div>
        <el-input v-model="value1"/>
        <div>{{value1}}</div>
    </div>

    <div class="panel">
        <h1>reactive</h1>
        <div>定义复杂数据，使用Proxy代理对象来实现对对象内部所有数据的劫持</div>
    </div>
</template>

<script lang="ts">
    //https://www.jianshu.com/p/910963d5fb01
    import { defineComponent, ref, reactive, onMounted, toRefs } from "vue";

    export default defineComponent({
        name: '',
        components: {
        },
        setup() {
            const value1 = ref("默认数据");
            const state = reactive({
                name: "测试",
                age: 15,
            })

            onMounted(() => {

            })

            return {
                value1,
                ...toRefs(state), //可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性， 因为对一个响应式对象直接解构后的数据将不再有响应式
            }
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
        h1 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 16px;
            font-weight: 700;
        }

        li {
            padding: 10px 0;
        }
    }
</style>
