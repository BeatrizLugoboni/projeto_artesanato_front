<template>
  <v-app>
    <AppBar />
    <AppLayout />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    AppBar: () => import('@/components/AppBar.vue'),
    AppLayout: () => import('@/components/AppLayout.vue'),
  },
};
</script>
