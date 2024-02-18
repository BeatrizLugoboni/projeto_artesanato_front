const routes = [
    {
        path: '/',
        name: 'Produtos',
        component: () => import('@/views/ProductView.vue')
    },
    {
        path: '/product/:id',
        name: 'Produto',
        component: () => import('@/views/ShowProduct.vue')
    },
];

export default routes;