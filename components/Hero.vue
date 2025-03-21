<template>
  <section class="relative h-screen bg-black text-white">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/seoul-skyline.jpg'); opacity: 0.6;"></div>
    <div class="container mx-auto px-4 h-full flex items-center relative z-10">
      <div class="max-w-2xl">
        <h1 class="text-5xl font-bold mb-6">
          <span class="text-gold">TABYS</span> Trading LTD
        </h1>
        <p class="text-xl mb-8">
          Ваш надежный партнер в бизнесе между Казахстаном и Южной Кореей
        </p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink to="/services" class="btn-primary">
            Наши услуги
          </NuxtLink>
          <NuxtLink to="/contacts" class="btn-secondary">
            Связаться с нами
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn-primary {
  @apply px-6 py-3 bg-gold text-black font-bold rounded hover:bg-opacity-90 transition;
}

.btn-secondary {
  @apply px-6 py-3 border-2 border-gold text-gold font-bold rounded hover:bg-gold hover:text-black transition;
}
</style> 