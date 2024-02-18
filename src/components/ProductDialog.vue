<template>
    <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="secundary" v-bind="attrs" v-on="on">
                <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span>Adicionar Produto</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Nome" solo dense v-model="product.name"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Descrição" solo dense v-model="product.description"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Preço" solo dense v-model="product.price"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-file-input truncate-length="15" label="Imagem" solo dense :prepend-icon="''"
                            prepend-inner-icon="mdi-paperclip" v-model="product.image"></v-file-input>
                        <!-- <v-text-field label="Imagem" solo dense></v-text-field> -->
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="save" :loading="loading">Salvar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { createProduct } from '@/repositories/productRepository'
export default {
    data() {
        return {
            loading: false,
            dialog: false,
            product: {
                name: '',
                description: '',
                price: null,
                image: null
            }
        }
    },
    methods: {
        save() {
            this.loading = true
            const formData = new FormData()
            formData.append('name', this.product.name)
            formData.append('description', this.product.description)
            formData.append('price', this.product.price)
            formData.append('image', this.product.image)
            createProduct(formData).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                this.loading = false
                this.dialog = false
                this.$router.go(0)
            })
        }
    }
}
</script>
<style></style>