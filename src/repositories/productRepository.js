import http from '@/plugins/http'

export const getProducts = () => {
    return http.get('/product')
}
export const createProduct = (product) => {
    return http.post('/product', product)
}

export const getProduct = (id) => {
    return http.get(`/product/${id}`)
}

export default {
    getProducts
}