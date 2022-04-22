<template>
    <div class="title">项目搭建</div>
    <div class="panel">
        <h1>1. 组合式API</h1> 
        <p></p>
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
        h1 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 16px;
            font-weight: 700;
        }
    }
</style>
