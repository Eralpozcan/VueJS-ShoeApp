<template>
  <Card style="width: 25em">
    <template #header>
      <img class="w-32 h-48 mx-auto border-round" alt="user header" :src="availableDefaultImage" />
    </template>
    <template #title> 
      <div class="text-xl">
        {{ getName }}
      </div>
    </template>
    <template #subtitle> Card subtitle </template>
    <template #content>
      <Rating v-model="props.data.rating" readonly :cancel="false"> </Rating>
      <p class="m-0">
        {{ getDesc }}
      </p>
    </template>
    <template #footer>
      <Button rounded label="Add to Cart" icon="pi pi-shopping-cart" class="w-full" />
    </template>
  </Card>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Rating from 'primevue/rating';
import { useI18n } from 'vue-i18n';


const { locale } = useI18n();
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const availableDefaultImage = ref(props.data.images[0])


const getName = computed(() => {
  if (locale.value === 'en') {
    return props.data.name.en;
  } else return props.data.name.tr;
})
const getDesc = computed(() => {
  if (locale.value === 'en') {
    return props.data.description.en;
  } else return props.data.description.tr;
})




</script>