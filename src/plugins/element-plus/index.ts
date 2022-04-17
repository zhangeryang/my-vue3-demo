import { App } from 'vue';

// Element-plus全局配置
export const loadElementPlus = (app: App<Element>) => {
    app.config.globalProperties.$ELEMENT = {
        // size: 'small'
    };
};
