<script setup lang='ts'>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Test from '@/components/Test.vue';
const router = useRouter();
const route = useRoute();
</script>

<template>
    Index nè
    <Test />
</template>

