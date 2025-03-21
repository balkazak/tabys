<template>
  <section class="py-20 bg-black text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16">
        <span class="text-gold">Инвестиционные</span> проекты
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-900 rounded-lg overflow-hidden group">
          <div class="relative h-64 overflow-hidden">
            <img src="/images/real-estate.jpg" alt="Недвижимость в Корее" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-2xl font-bold mb-2">Недвижимость в Корее</h3>
              <p class="text-gray-300">Покупка, продажа и аренда недвижимости</p>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-400 mb-4">
              Мы поможем вам найти и приобрести недвижимость в Южной Корее для личного использования или инвестиций. Наши эксперты проведут полное сопровождение сделки.
            </p>
            <NuxtLink to="/investments/real-estate" class="text-gold hover:underline">Узнать больше →</NuxtLink>
          </div>
        </div>
        
        <div class="bg-gray-900 rounded-lg overflow-hidden group">
          <div class="relative h-64 overflow-hidden">
            <img src="/images/business.jpg" alt="Бизнес в Корее" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-2xl font-bold mb-2">Бизнес в Корее</h3>
              <p class="text-gray-300">Создание и развитие бизнеса</p>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-400 mb-4">
              Мы предлагаем консалтинговые услуги по созданию собственного бизнеса в Корее, включая регистрацию компании, получение необходимых разрешений и лицензий.
            </p>
            <NuxtLink to="/investments/business" class="text-gold hover:underline">Узнать больше →</NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink to="/investments" class="px-6 py-3 bg-gold text-black font-bold rounded hover:bg-opacity-90 transition">
          Все инвестиционные проекты
        </NuxtLink>
      </div>
    </div>
  </section>
</template> 