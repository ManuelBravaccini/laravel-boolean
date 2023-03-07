import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import BooksList from './pages/BooksList.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/books',
            name: 'books',
            component: BooksList
        },
    ]
});
export { router };