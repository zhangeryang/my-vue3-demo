import { Router } from 'vue-router';

export const injectVueRouterHook = (router: Router) => {
    router.beforeEach(async (to, from, next) => {
        
    });
};