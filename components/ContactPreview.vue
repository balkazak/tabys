<template>
  <section class="py-20 bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-4xl font-bold mb-6">
          <span class="text-gold">Свяжитесь</span> с нами
        </h2>
        <p class="text-gray-700">
          Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время для консультации
        </p>
      </div>
      
      <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label for="name" class="block text-gray-700 mb-2">Имя</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gold"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gold"
                required
              />
            </div>
          </div>
          
          <div class="mb-6">
            <label for="phone" class="block text-gray-700 mb-2">Телефон</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gold"
            />
          </div>
          
          <div class="mb-6">
            <label for="service" class="block text-gray-700 mb-2">Интересующая услуга</label>
            <select 
              id="service" 
              v-model="form.service" 
              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gold"
            >
              <option value="">Выберите услугу</option>
              <option value="export-import">Экспорт и Импорт</option>
              <option value="legal">Юридические и переводческие услуги</option>
              <option value="medical-tourism">Медицинский туризм</option>
              <option value="cultural-tourism">Культурный туризм</option>
              <option value="business-consulting">Консалтинг по бизнесу</option>
              <option value="investments">Инвестиционные проекты</option>
            </select>
          </div>
          
          <div class="mb-6">
            <label for="message" class="block text-gray-700 mb-2">Сообщение</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="4" 
              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gold"
              required
            ></textarea>
          </div>
          
          <div class="text-center">
            <button type="submit" class="px-8 py-3 bg-gold text-black font-bold rounded hover:bg-opacity-90 transition">
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
});

async function submitForm() {
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    });
    
    alert('Ваша заявка успешно отправлена!');
    
    form.name = '';
    form.email = '';
    form.phone = '';
    form.service = '';
    form.message = '';
  } catch (error) {
    alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.');
  }
}
</script> 