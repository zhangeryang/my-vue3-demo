import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { injectVueRouterHook } from './router.hook';

const router = createRouter({
    history: createWebHistory(), // 路由模式
    routes
});

injectVueRouterHook(router);

export default router;