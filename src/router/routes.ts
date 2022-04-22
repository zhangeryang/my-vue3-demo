/**
 * 路由模块配置
 */ 

export default [
    { path: '/', redirect: '/homePage' },
    {
        path: '/homePage',
        component: () => import('@/views/HomePage/index.vue'),
        meta: {}
    },
    {
        path: '/initDoc',
        component: () => import('@/views/initDoc/index.vue'),
        meta: {}
    },
    {
        path: '/setup',
        component: () => import('@/views/GrammarFiles/setup.vue'),
        meta: {}
    },
    
];