<template>
  <section class="py-20 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-16">
        <span class="text-gold">Наши</span> услуги
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          title="Экспорт и Импорт" 
          icon="globe" 
          description="Организация поставок товаров между Казахстаном и Южной Кореей"
        />
        <ServiceCard 
          title="Юридические и переводческие услуги" 
          icon="scale-balance" 
          description="Профессиональная юридическая поддержка и переводы документов"
        />
        <ServiceCard 
          title="Медицинский туризм" 
          icon="hospital" 
          description="Организация лечения в лучших клиниках Южной Кореи"
        />
        <ServiceCard 
          title="Культурный туризм" 
          icon="landmark" 
          description="Экскурсии и культурные программы в Южной Корее"
        />
        <ServiceCard 
          title="Консалтинг по бизнесу в Корее" 
          icon="briefcase" 
          description="Помощь в создании и развитии бизнеса в Южной Корее"
        />
        <ServiceCard 
          title="Инвестиционные проекты" 
          icon="chart-line" 
          description="Недвижимость и инвестиционные возможности в Корее"
        />
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink to="/services" class="px-6 py-3 bg-gold text-black font-bold rounded hover:bg-opacity-90 transition">
          Подробнее об услугах
        </NuxtLink>
      </div>
    </div>
  </section>
</template> 