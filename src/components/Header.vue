<script setup>
import { ref, onMounted } from 'vue';

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
<header>
  <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <a href="/" class="flex items-center">
        <img src="../assets/logo.svg" class="mr-3 h-6 sm:h-9" alt="Shoe Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Wonka's Shoe Shop</span>
      </a>
      <div class="flex items-center lg:order-2">
        <button type="button" class="topbar-item" @click="toggleDarkMode">
            <i :class="['pi', { 'pi-moon': isDark, 'pi-sun': !isDark }]"></i>
        </button>
      </div>
      <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a href="/men" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Men</a>
          </li>
          <li>
            <a href="/women" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Women</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

</template>

