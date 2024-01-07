<template>
  <Card style="width: 25em">
    <template #header>
      <img class="w-32 h-48 mx-auto border-round" alt="user header" :src="getImages" />
    </template>
    <template #title> 
      <div class="text-xl">
        {{ getName }}
      </div>
    </template>
    <template #subtitle>
      <div class="text-xl">
        {{ props.data.price }} $
      </div> 
    </template>
    <template #content>
      <Rating v-model="ratingValues" readonly :cancel="false"></Rating>
      <p class="m-0">
        {{ getDesc }}
      </p>
    </template>
    <template #footer>
      <Button rounded :label="$t('add_to_cart')" icon="pi pi-shopping-cart" class="w-full" @click="addCartItem(data)"></Button>
    </template>
  </Card>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Rating from 'primevue/rating';
import { useI18n } from 'vue-i18n';

const selectedColor = ref(null); 
const { locale } = useI18n();
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const getName = computed(() => {
  if (locale.value === 'en') return props.data.name.en
  else return props.data.name.tr
})
const getDesc = computed(() => {
  if (locale.value === 'en') return props.data.description.en
  else return props.data.description.tr
})
const getDefaultColor = computed(() => {
  const colorData = JSON.parse(JSON.stringify(props.data.availableColor))
  return colorData[0]
})
const getAvaibleImage = computed(() => {
  const ImageData = JSON.parse(JSON.stringify(props.data.images))
  return ImageData
})
const ratingValues = computed(() => {
  const ratingData = JSON.parse(JSON.stringify(props.data.rating))
  return ratingData
})

const getImages = computed(() => {
  if (selectedColor.value === null) return getAvaibleImage.value[getDefaultColor.value]
  else {
    const selectedColorData = getAvaibleImage.value.filter((item) => item === selectedColor.value)
    return selectedColorData[0]
  }
})
const addCartItem = (data) => {
  const cartPayload = {
    id: data.id,
    name: data.name,
    price: data.price,
    totalPrice: data.price,
    image: data.images[JSON.parse(JSON.stringify(props.data.availableColor))[0]], // Should be refactor
  }
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cartItems.find((item) => item.id === cartPayload.id);
  if (item) {
    item.quantity += 1;
    item.totalPrice = item.quantity * item.price;
  } else cartItems.push({ ...cartPayload, quantity: 1 });
  localStorage.setItem('cart', JSON.stringify(cartItems));
};
</script>