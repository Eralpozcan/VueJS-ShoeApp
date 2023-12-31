<script setup>
import { ref, onMounted } from 'vue';
import Card from '@/components/Card.vue';
import { ProductService } from '@/service/ProductService';

const productsList = ref([])

onMounted(async () => {
  const fetchedProducts = await ProductService.getProducts()
  productsList.value = fetchedProducts
})
</script>

<template>
  <main class="flex flex-wrap justify-center ">
    <div v-for="product in productsList" :key="product.id" class="flex-column mx-2 my-2">
      <Card :data="product" />
    </div>
  </main>
</template>
