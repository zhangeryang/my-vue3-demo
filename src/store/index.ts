import { createLogger, createStore } from 'vuex';

const store = createStore({
    state: {},
    actions: {
        
    },
    mutations: {
        
    },
    modules: {
        
    },
    plugins: import.meta.env.NODE_ENV !== 'production' ? [createLogger()] : []
});

export default store;