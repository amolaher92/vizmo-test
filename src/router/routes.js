import Home from '../views/Home.vue'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: { title: 'About' }
    },
    {
        path: '/simple-todo',
        name: 'SimpleBlogs',
        component: () => import('../views/SimpleBlogs.vue'),
        meta: { title: 'Simple Blogs' }
    }
]

export default routes;