<template>
	<div>
		<Hero />

		<section class="py-20 bg-white">
			<div class="container mx-auto px-4">
				<h2 class="text-4xl font-bold text-center mb-8"><span class="text-gold">Наши</span> услуги</h2>
				<p class="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8">
					TABYS Trading LTD предлагает полный спектр услуг для развития бизнеса и культурных связей между Казахстаном и Южной Кореей.
				</p>

				<ServiceIconGrid />

				<div class="text-center mt-12">
					<NuxtLink to="/services" class="px-8 py-3 bg-gold text-black font-bold rounded hover:bg-opacity-90 transition"> Все услуги </NuxtLink>
				</div>
			</div>
		</section>

		<AboutPreview />
		<Services />
		<Testimonials />
		<LatestNews />
		<ContactCTA />
	</div>
</template>

<script setup>
	// Import components
</script>
