import { App } from 'vue';
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'

// Element-plus全局配置
export const loadElementPlus = (app: App<Element>) => {
    app.use(ElementPlus, { locale })
};
