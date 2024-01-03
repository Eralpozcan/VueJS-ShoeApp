<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';
const isDark = ref(false);

const toggleDarkMode = () => {
  const root = document.documentElement;
  if (isDark.value) {
    root.classList.remove('dark');
    isDark.value = false;
  } else {
    root.classList.add('dark');
    isDark.value = true;
  }
};

const changeTranslations = () => {

}

onMounted(() => {
  const root = document.documentElement;
  if (root.classList.contains('dark')) {
    isDark.value = true;
  }
});
</script>

<template>
<header class="bg-white border-b-2 rounded-sm border-gray-400 px-4 py-2.5 dark:bg-gray-800 border-">
  <div class="flex items-center mx-auto max-w-screen justify-between">
    <a href="/" class="flex items-center space-x-2">
      <img src="../assets/logo.svg" class="mr-3 h-6 sm:h-9" alt="Shoe Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Wonka's Shoe</span>
    </a>
    <div class="flex items-center space-x-4">
      <a href="#" class="hover:text-gray-700">Men</a>
      <a href="#" class="hover:text-gray-700">Women</a>
    </div>
    <div class="flex items-center space-x-4">
      <button type="button" class="topbar-item" @click="toggleDarkMode">
        <i :class="['pi', { 'pi-moon': isDark, 'pi-sun': !isDark }]"></i>
      </button>
      <div class="relative inline-block text-left dropdown">
        <button aria-label="Cart">
          <i class="pi pi-shopping-cart"></i>
        </button>
        <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
          <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" role="menu">
            <div class="px-4 py-3">
              <p class="text-sm font-medium leading-5 text-gray-900 truncate">All Cart</p>
            </div>
            <div class="py-1">
              <a href="" tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Example Item</a>
            </div>
            <div class="py-1">
              <a href="" tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Go to Payment</a>
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
            <div class="flex px-2 py-2 bg-gray-300 justify-center">
              <p class="text-sm leading-5">Change Language</p>
            </div>
            <div class="py-1">
              <span tabindex="0" class="text-gray-700 flex justify-center w-full px-2 py-2 text-sm leading-5 text-left" :class="[{'opacity-70': true }]" role="menuitem">Turkish</span>
              <span tabindex="0" class="text-gray-700 flex justify-center w-full px-2 py-2 text-sm leading-5 text-left" role="menuitem">English</span>
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
