<template>
  <Card style="width: 25em">
    <template #header>
      <img class="w-32 h-48 mx-auto border-round" alt="user header" src="../assets/logo.svg" />
    </template>
    <template #title> 
      <div class="text-xl">
        Advanced Card
      </div>
    </template>
    <template #subtitle> Card subtitle </template>
    <template #content>
      <Rating v-model="value" readonly :cancel="false"> </Rating>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
        deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
        neque
        quas!
      </p>
    </template>
    <template #footer>
      <Button rounded label="Add to Cart" icon="pi pi-shopping-cart" class="w-full" />
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Rating from 'primevue/rating';

const value = ref(4);


</script>