<template>
    <v-row class="mt-8">
        <v-col cols="6">
            <v-card rounded height="400">
                <v-img height="100%" width="100%" :src="product.image"></v-img>
            </v-card>
        </v-col>
        <v-col cols="6">
            <h1>{{ product.name }}</h1>
            <h3>{{ product.description }}</h3>
            <h2>{{ productPrice }}</h2>
            <v-btn icon color="primary" @click="addToFavorites">
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon color="primary" @click="addToBasket">
                <v-icon>mdi-basket</v-icon>
            </v-btn>
            <v-btn icon color="primary" @click="editProduct">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon color="primary" @click="deleteProduct">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-col>

    </v-row>
</template>

<script>
import { getProduct } from '@/repositories/productRepository';
export default {
    data() {
        return {
            product: {
                name: '',
                description: '',
                price: 0,
                image: null
            }
        }
    },
    methods: {
        fetchProduct() {
            getProduct(this.$route.params.id).then((response) => {
                this.product = response.data
            }).catch((error) => {
                console.log(error)
            })
            // console.log(this.$route.params.id);
        },
        addToBasket() {
            console.log('Adicionado ao carrinho')
        },
        addToFavorites() {
            console.log('Adicionado ao favoritos')
        },
        editProduct() {
            console.log('Editado')
        },
        deleteProduct() {
            console.log('Produto deletado')
        }

    },
    created() {
        this.fetchProduct();
    },
    computed: {
        productPrice() {
            if (this.product.price) {
                return parseFloat(this.product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            }
            return this.product.price
        }
    }
}
</script>
<style></style>