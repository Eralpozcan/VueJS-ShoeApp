<script setup>
import { ref, computed, onMounted } from 'vue';
import Button from 'primevue/button';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n();
const isDark = ref(false);
const cartItems = ref(JSON.parse(localStorage.getItem('cart')) || []);

const toggleDarkMode = () => {
  const root = document.documentElement;
  isDark.value = !isDark.value;
  root.classList.toggle('dark', isDark.value);
};

const changeTranslations = (newLocale) => {
  locale.value = newLocale;
}
// Refactor this function
const getName = (name) => {
  if (locale.value === 'en') return name.en
  else return name.tr
}

const openCart = () => {
  cartItems.value = JSON.parse(localStorage.getItem('cart'))
}

const updateCartItems = (updatedCartItems) => {
  localStorage.setItem('cart', JSON.stringify(updatedCartItems))
  cartItems.value = updatedCartItems;
}

const modifyCartItemQuantity = (id, amount) => {
  const updatedCartItems = cartItems.value.map((item) => {
    if (item.id === id) {
      item.quantity += amount;
      item.totalPrice = item.quantity * item.price;
    }
    return item;
  });
  updateCartItems(updatedCartItems);
}

const increaseQuantity = (id) => {
  modifyCartItemQuantity(id, 1);
}

const decreaseQuantity = (id) => {
  const item = cartItems.value.find((item) => item.id === id);
  if (item.quantity > 1) modifyCartItemQuantity(id, -1);
}
const deleteCartItem = (id) => {
  const updatedCartItems = cartItems.value.filter((item) => item.id !== id);
  updateCartItems(updatedCartItems);
}
const isCartItems = computed(() => {
  return cartItems.value.length > 0;
})
const calculateTotalPrice = computed(() => {
  const totalPrice = cartItems.value.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0)
  return totalPrice;
})

onMounted(() => {
  const root = document.documentElement;
  isDark.value = root.classList.contains('dark');
});
</script>

<template>
<header class="bg-white border-b-2 rounded-sm border-gray-400 px-4 py-2.5 dark:bg-gray-800 border-">
  <div class="flex items-center mx-auto max-w-screen justify-between">
    <a href="/" class="flex items-center space-x-2">
      <img src="../assets/logo.svg" class="h-6 sm:h-9" alt="Shoes Logo" />
    </a>
    <div class="flex items-center space-x-4 mr-96 ml-10">
      <RouterLink to="/men" class="hover:text-gray-700"> {{ $t('category.men') }}</RouterLink>
      <RouterLink to="/women" class="hover:text-gray-700"> {{ $t('category.women') }}</RouterLink>
    </div>
    <div class="flex items-center space-x-4">
      <button type="button" class="topbar-item" @click="toggleDarkMode">
        <i :class="['pi', { 'pi-moon': isDark, 'pi-sun': !isDark }]"></i>
      </button>
      <div class="relative inline-block text-left dropdown" @click="openCart">
        <button aria-label="Cart">
          <i class="pi pi-shopping-cart"></i>
        </button>
        <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
          <div class="absolute right-0 w-80 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" role="menu">
            <div class="px-4 py-3">
              <p class="text-sm font-medium leading-5 text-gray-900 truncate justify-center"> {{ $t('all_cart_items') }}</p>
            </div>
            <div class="py-1 flex-col" v-for="cart in cartItems" :key="cart.id">
              <div class="flex items-center">
                <img class="w-12 h-12 object-cover mr-4" :src="cart.image" alt="">
                <p class="text-sm font-medium leading-5 text-gray-900 truncate overflow-hidden overflow-ellipsis whitespace-nowrap w-32">{{ getName(cart.name) }}</p>
                <p class="text-sm leading-5 text-gray-500 truncate">{{ cart.totalPrice }} $</p>
                <div class="ml-2 w-16">
                  <button @click="decreaseQuantity(cart.id)"><i class="pi pi-minus-circle"></i></button>
                  <span class="text-lg font-sans ml-1 mr-1">{{ cart.quantity }}</span>
                  <button @click="increaseQuantity(cart.id)"><i class="pi pi-plus-circle"></i></button>
                </div>
                <button class="absolute right-0 mr-2 text-red-500" @click="deleteCartItem(cart.id)">
                  <i class="pi pi-trash"></i>
                </button>
              </div>
            </div>
            <div class="py-1" v-if="isCartItems">
              <div class="flex justify-between px-4 py-2 text-sm leading-5">
                <span class="font-medium text-gray-900">{{ $t('totalPrice')}}</span>
                <span class="text-gray-500">{{ calculateTotalPrice }} $</span>
              </div>
              <a href="" tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">{{ $t('go_to_Payment')}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="relative inline-block text-left dropdown">
        <button aria-label="Language">
          <i class="pi pi-language"></i>
        </button>
        <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
          <div class="absolute right-0 w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" role="menu">
            <div class="py-1">
              <span tabindex="0" class="text-gray-700 flex justify-center w-full px-2 py-2 text-sm leading-5 text-left" :class="[{'opacity-70': lang === locale }]" role="menuitem" v-for="lang in availableLocales" :key="lang" @click="changeTranslations(lang)"> {{ $t(`locale_${lang}`) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

</template>

<style scoped>
.dropdown:focus-within .dropdown-menu {
  opacity:1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
