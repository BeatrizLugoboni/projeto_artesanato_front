<template>
    <v-row>
        <v-col cols="3" v-for="(product, index) in products" :key="index">
            <ProductCard :product="product" />
        </v-col>
    </v-row>
</template>
<script>
import { getProducts } from '@/repositories/productRepository';

export default {
    data() {
        return {
            products: []
        }
    },
    components: {
        ProductCard: () => import('@/components/ProductCard.vue')
    },
    methods: {
        fetchProducts() {
            getProducts()
                .then((response) => {
                    this.products = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },

    created() {
        this.fetchProducts();
    }
};
</script>
<style scoped></style>