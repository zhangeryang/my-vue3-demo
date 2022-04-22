<template>
    <div class="homepage">
        <h1>vue3 相关学习</h1>
        <div class="model basic">
            <h2>基础</h2>
            <template v-for="(item, index) in modules.basic" :key="index">
                <el-button type="primary" @click="handleClick(item)">{{item.name}}</el-button>
            </template>
        </div>
        
        <div class="model advanced">
            <h2>进阶</h2>
            <template v-for="(item, index) in modules.advanced" :key="index">
                <el-button type="primary" @click="handleClick(item)">{{item.name}}</el-button>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: "",
    components: {
    },
    setup() {
        const modules = {
            "basic": [
                { name: "项目搭建", path: "/initDoc" },
                { name: "setup", path: "/setup" },
            ],
            "advanced": [
                { name: "vue2 VS vue3", path: "" }
            ]
        }

        const $router = useRouter()

        const handleClick = (item: any) => {
            const { path } = item
            $router.push({ path })
        }

        return {
            modules,
            handleClick
        }
    },
})
</script>


<style scoped lang="scss">
    .homepage {
        h1 {
            font-size: 30px;
            font-weight: 700;
            margin-bottom: 30px;
        }

        h2 {
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 16px;
            text-align: left;
        }

        .model {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            border: 1px dashed #ccc;
        }
    }
</style>
