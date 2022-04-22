<template>
    <div class="title">setup</div>
    <div class="panel">
        <h1>1. 组合式API</h1> 
        <ul>setup选项在创建组件之前执行，由于在执行setup时，组件实例尚未创建，因此在setup中没有this，这也意味着，除了props外，setup中无法访问组件的状态、计算属性、方法等任何属性。</ul>

        <ul>setup选项是一个函数，它接受两个参数：props 和 context，返回的内容将暴露给组件模板、计算属性、方法、生命周期钩子等
            <li>props: 包含props配置声明且传入了的所有属性的对象</li>
            <li>attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs</li>
            <li>slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots</li>
            <li>emit: 用来分发自定义事件的函数, 相当于 this.$emit</li>
        </ul>
        
    </div>

    <div class="panel">
        <h1>2. setup 语法糖</h1>
    </div>
</template>

<script lang="ts">
    import { defineComponent, onMounted } from "vue";

    export default defineComponent({
        name: '',
        components: {
        },
        setup(props, context) {
            // setup(props, context) / setup(props, {attrs, slots, emit})

            // props: 包含props配置声明且传入了的所有属性的对象
            // attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
            // slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
            // emit: 用来分发自定义事件的函数, 相当于 this.$emit


            onMounted(() => {
                console.log(props, "1111")
                console.log(context, "2222")
                
            })

            return {

            }
        }
    })
</script>


<!-- setup 语法糖-->
<script lang="ts" setup>
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
