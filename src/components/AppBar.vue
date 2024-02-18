<template>
    <v-app-bar absolute app elevation="2" color="primary">
        <v-toolbar-title>
            <span>
                Artesanato
            </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-basket</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <ProductDialog />
    </v-app-bar>
</template>
<script>
export default {
    data() {
        return {}
    },
    components: {
        ProductDialog: () => import('@/components/ProductDialog.vue')
    }
};
</script>
<style scoped></style>