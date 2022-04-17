/**
 * 路由模块配置
 */ 

export default [
    { path: '/', redirect: '/homePage' },
    {
        path: '/homePage',
        component: () => import('@/views/HomePage/index.vue'),
        meta: {
            passAuth: true
        }
    },
];