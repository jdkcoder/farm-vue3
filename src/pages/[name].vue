<template>
    Params nè {{ $route.params.name }}
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang='scss'>
</style>