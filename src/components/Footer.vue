<script setup>
const socialData = [
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: 'pi-facebook' },
  { name: 'Github', href: 'https://www.github.com/Eralpozcan', icon: 'pi-github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/eralpozcan/', icon: 'pi-linkedin' },
]
</script>

<template>
<footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
    <div class="mx-auto ">
        <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">Wonka's</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <button v-for="social in socialData" :key="social.icon" type="button">
                    <a :class="['pi', social.icon,]" :href="social.href" target="_blank" rel='noopener noreferrer'></a>
                </button>
            </div>
        </div>
    </div>
</footer>
</template>