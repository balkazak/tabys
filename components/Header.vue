<template>
	<header class="bg-black text-white fixed w-full z-50">
		<div class="container mx-auto px-4">
			<div class="flex justify-between items-center py-4">
				<!-- Logo -->
				<NuxtLink to="/" class="flex items-center">
					<img src="/logo.png" alt="Logo" class="w-10 h-10 mr-3" />
					<span class="text-2xl font-bold"><span class="text-gold">TABYS</span> <span class="text-white">TRADING</span></span>
				</NuxtLink>

				<!-- Desktop Navigation -->
				<nav class="hidden md:flex space-x-8">
					<NuxtLink to="/" class="hover:text-gold transition">Главная</NuxtLink>
					<NuxtLink to="/about" class="hover:text-gold transition">О компании</NuxtLink>
					<NuxtLink to="/services" class="hover:text-gold transition">Услуги</NuxtLink>
					<NuxtLink to="/investments" class="hover:text-gold transition">Инвестиции</NuxtLink>
					<NuxtLink to="/blog" class="hover:text-gold transition">Блог</NuxtLink>
					<NuxtLink to="/contacts" class="hover:text-gold transition">Контакты</NuxtLink>
				</nav>

				<!-- Mobile Menu Button -->
				<button @click="toggleMobileMenu" class="md:hidden focus:outline-none">
					<svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					<svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Mobile Navigation -->
			<div v-if="mobileMenuOpen" class="md:hidden py-4">
				<nav class="flex flex-col space-y-4">
					<NuxtLink to="/" class="hover:text-gold transition" @click="closeMobileMenu">Главная</NuxtLink>
					<NuxtLink to="/about" class="hover:text-gold transition" @click="closeMobileMenu">О компании</NuxtLink>
					<NuxtLink to="/services" class="hover:text-gold transition" @click="closeMobileMenu">Услуги</NuxtLink>
					<NuxtLink to="/investments" class="hover:text-gold transition" @click="closeMobileMenu">Инвестиции</NuxtLink>
					<NuxtLink to="/blog" class="hover:text-gold transition" @click="closeMobileMenu">Блог</NuxtLink>
					<NuxtLink to="/contacts" class="hover:text-gold transition" @click="closeMobileMenu">Контакты</NuxtLink>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { ref } from "vue";

	const mobileMenuOpen = ref(false);

	function toggleMobileMenu() {
		mobileMenuOpen.value = !mobileMenuOpen.value;
	}

	function closeMobileMenu() {
		mobileMenuOpen.value = false;
	}
</script>

<style scoped>
	/* Add any additional styling here */
</style>
