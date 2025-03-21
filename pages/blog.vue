<template>
  <div>
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl font-bold mb-12 text-center">
          <span class="text-gold">Наш</span> блог
        </h1>
        
        <div class="max-w-4xl mx-auto mb-16">
          <p class="text-lg text-center">
            Актуальные новости, полезные статьи и экспертные мнения о бизнесе, 
            инвестициях и жизни в Южной Корее.
          </p>
        </div>
        
        <!-- Featured Article -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div class="md:flex">
            <div class="md:w-1/2">
              <img src="/images/korea-business-news.jpg" alt="Бизнес в Корее" class="w-full h-full object-cover" />
            </div>
            <div class="md:w-1/2 p-8 md:p-12">
              <div class="flex items-center mb-4">
                <span class="bg-gold text-black text-sm font-bold px-3 py-1 rounded mr-3">Бизнес</span>
                <span class="text-gray-500 text-sm">12 мая 2024</span>
              </div>
              <h2 class="text-3xl font-bold mb-4">Перспективные отрасли для инвестиций в Южной Корее в 2024 году</h2>
              <p class="text-gray-700 mb-6">
                Южная Корея продолжает привлекать иностранных инвесторов своей стабильной экономикой и 
                инновационным подходом к бизнесу. В этой статье мы рассмотрим наиболее перспективные 
                отрасли для инвестиций в 2024 году.
              </p>
              <NuxtLink to="/blog/investment-sectors-2024" class="text-gold font-bold hover:underline">
                Читать далее →
              </NuxtLink>
            </div>
          </div>
        </div>
        
        <!-- Blog Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Article 1 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/seoul-real-estate.png" alt="Недвижимость в Сеуле" class="w-full h-48 object-cover" />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="bg-gold text-black text-sm font-bold px-3 py-1 rounded mr-3">Недвижимость</span>
                <span class="text-gray-500 text-sm">5 мая 2024</span>
              </div>
              <h3 class="text-xl font-bold mb-3">Рынок недвижимости Сеула: тенденции и прогнозы</h3>
              <p class="text-gray-700 mb-4">
                Анализ текущей ситуации на рынке недвижимости Сеула и прогнозы экспертов на ближайшие годы.
              </p>
              <NuxtLink to="/blog/seoul-real-estate" class="text-gold font-bold hover:underline">
                Читать далее →
              </NuxtLink>
            </div>
          </div>
          
          <!-- Article 2 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/korean-startups.jpg" alt="Корейские стартапы" class="w-full h-48 object-cover" />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="bg-gold text-black text-sm font-bold px-3 py-1 rounded mr-3">Стартапы</span>
                <span class="text-gray-500 text-sm">28 апреля 2024</span>
              </div>
              <h3 class="text-xl font-bold mb-3">10 перспективных корейских стартапов 2024 года</h3>
              <p class="text-gray-700 mb-4">
                Обзор самых интересных и перспективных стартапов Южной Кореи, в которые стоит инвестировать.
              </p>
              <NuxtLink to="/blog/korean-startups-2024" class="text-gold font-bold hover:underline">
                Читать далее →
              </NuxtLink>
            </div>
          </div>
          
          <!-- Article 3 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/korean-culture.jpg" alt="Корейская культура" class="w-full h-48 object-cover" />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="bg-gold text-black text-sm font-bold px-3 py-1 rounded mr-3">Культура</span>
                <span class="text-gray-500 text-sm">15 апреля 2024</span>
              </div>
              <h3 class="text-xl font-bold mb-3">Особенности деловой культуры Южной Кореи</h3>
              <p class="text-gray-700 mb-4">
                Что нужно знать о корейской деловой культуре, чтобы успешно вести бизнес с корейскими партнерами.
              </p>
              <NuxtLink to="/blog/korean-business-culture" class="text-gold font-bold hover:underline">
                Читать далее →
              </NuxtLink>
            </div>
          </div>
          
          <!-- Article 4 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/korean-medical.jpg" alt="Медицина в Корее" class="w-full h-48 object-cover" />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="bg-gold text-black text-sm font-bold px-3 py-1 rounded mr-3">Медицина</span>
                <span class="text-gray-500 text-sm">8 апреля 2024</span>
              </div>
              <h3 class="text-xl font-bold mb-3">Медицинский туризм в Южной Корее: преимущества и возможности</h3>
              <p class="text-gray-700 mb-4">
                Почему все больше людей выбирают Южную Корею для лечения и какие клиники считаются лучшими.
              </p>
              <NuxtLink to="/blog/medical-tourism-korea" class="text-gold font-bold hover:underline">
                Читать далее →
              </NuxtLink>
            </div>
          </div>
          
          <!-- Article 5 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/korean-export.jpg" alt="Экспорт из Кореи" class="w-full h-48 object-cover" />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="bg-gold text-black text-sm font-bold px-3 py-1 rounded mr-3">Экспорт</span>
                <span class="text-gray-500 text-sm">1 апреля 2024</span>
              </div>
              <h3 class="text-xl font-bold mb-3">Топ-10 товаров для экспорта из Южной Кореи</h3>
              <p class="text-gray-700 mb-4">
                Обзор наиболее востребованных корейских товаров на международном рынке и особенности их экспорта.
              </p>
              <NuxtLink to="/blog/korean-export-goods" class="text-gold font-bold hover:underline">
                Читать далее →
              </NuxtLink>
            </div>
          </div>
          
          <!-- Article 6 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/korean-visa.jpg" alt="Виза в Корею" class="w-full h-48 object-cover" />
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="bg-gold text-black text-sm font-bold px-3 py-1 rounded mr-3">Визы</span>
                <span class="text-gray-500 text-sm">25 марта 2024</span>
              </div>
              <h3 class="text-xl font-bold mb-3">Как получить бизнес-визу в Южную Корею: пошаговая инструкция</h3>
              <p class="text-gray-700 mb-4">
                Подробное руководство по оформлению бизнес-визы в Южную Корею для предпринимателей и инвесторов.
              </p>
              <NuxtLink to="/blog/business-visa-korea" class="text-gold font-bold hover:underline">
                Читать далее →
              </NuxtLink>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
        <div class="flex justify-center">
          <div class="flex space-x-2">
            <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gold text-black font-bold">1</a>
            <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gold hover:text-black">2</a>
            <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gold hover:text-black">3</a>
            <span class="w-10 h-10 flex items-center justify-center">...</span>
            <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gold hover:text-black">8</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template> 