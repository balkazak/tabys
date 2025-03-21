<template>
  <div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition group">
    <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition">
      <Icon :name="icon" class="text-black text-2xl" />
    </div>
    <h3 class="text-xl font-bold text-center mb-4">{{ title }}</h3>
    <p class="text-gray-600 text-center">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
  description: String
});
</script> 