<template>
    <v-card @click="show">
        <v-img :src="product.image" height="200px"></v-img>
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-subtitle>{{ product.price }}</v-card-subtitle>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon color="primary" @click="addToFavorites">
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon color="primary" @click="addToBasket">
                <v-icon>mdi-basket</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToBasket() {
            console.log('Adicionado ao carrinho')
        },
        addToFavorites() {
            console.log('Adicionado ao favoritos')
        },
        show() {
            this.$router.push({ name: 'Produto', params: { id: this.product.id } })
        }
    }
}
</script>

<style></style>