<template>
  <header class="bg-black text-white py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="flex items-center">
        <Logo />
      </div>
      
      <nav class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="hover:text-gold transition">Главная</NuxtLink>
        <NuxtLink to="/about" class="hover:text-gold transition">О нас</NuxtLink>
        <NuxtLink to="/services" class="hover:text-gold transition">Услуги</NuxtLink>
        <NuxtLink to="/investments" class="hover:text-gold transition">Инвестиции</NuxtLink>
        <NuxtLink to="/contacts" class="hover:text-gold transition">Контакты</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-gold transition">Блог</NuxtLink>
      </nav>
      
      <div class="flex items-center space-x-4">
        <button class="language-switcher">RU</button>
        <button class="language-switcher">EN</button>
        <button class="language-switcher">KR</button>
        <button class="md:hidden" @click="toggleMobileMenu">
          <span class="block w-6 h-0.5 bg-white mb-1"></span>
          <span class="block w-6 h-0.5 bg-white mb-1"></span>
          <span class="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </div>
    
    <div v-if="mobileMenuOpen" class="md:hidden bg-black py-4">
      <div class="container mx-auto px-4 flex flex-col space-y-4">
        <NuxtLink to="/" class="text-white hover:text-gold transition">Главная</NuxtLink>
        <NuxtLink to="/about" class="text-white hover:text-gold transition">О нас</NuxtLink>
        <NuxtLink to="/services" class="text-white hover:text-gold transition">Услуги</NuxtLink>
        <NuxtLink to="/investments" class="text-white hover:text-gold transition">Инвестиции</NuxtLink>
        <NuxtLink to="/contacts" class="text-white hover:text-gold transition">Контакты</NuxtLink>
        <NuxtLink to="/blog" class="text-white hover:text-gold transition">Блог</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<style scoped>
.language-switcher {
  @apply px-2 py-1 text-sm border border-gold rounded hover:bg-gold hover:text-black transition;
}
</style> 