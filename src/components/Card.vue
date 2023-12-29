<template>
  <Card style="width: 25em">
    <template #header>
      <img alt="user header" src="../assets/logo.svg" />
    </template>
    <template #title> Advanced Card </template>
    <template #subtitle> Card subtitle </template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
        deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
        neque
        quas!
      </p>
    </template>
    <template #footer>
      <Button label="Add to Cart" icon="pi pi-shopping-cart" class="w-full" />
    </template>
  </Card>
</template>

<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';



</script>