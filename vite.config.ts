import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


// 解决 path 报错
// https://www.csdn.net/tags/NtzaQg0sMDEzNzItYmxvZwO0O0OO0O0O.html
// https://blog.csdn.net/weixin_46926182/article/details/123590492
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    envPrefix: 'VUE_',
    resolve: {
        alias: {
            '@': `${path.resolve(__dirname, 'src')}`,
            '@c': `${path.resolve(__dirname, 'src/components')}`
        }
    },
    plugins: [
        vue()
    ]
})
