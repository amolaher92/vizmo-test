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
        name: 'SimpleTodo',
        component: () => import('../views/SimpleTodos.vue'),
        meta: { title: 'Simple Todo' }
    }
]

export default routes;