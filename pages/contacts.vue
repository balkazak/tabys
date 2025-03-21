<template>
	<div>
		<section class="py-20 bg-gray-100">
			<div class="container mx-auto px-4">
				<h1 class="text-5xl font-bold mb-12 text-center"><span class="text-gold">Связаться</span> с нами</h1>

				<div class="max-w-4xl mx-auto mb-16">
					<p class="text-lg text-center">Свяжитесь с нами любым удобным способом, и наши специалисты ответят на все ваши вопросы.</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					<!-- Phone -->
					<div class="bg-white rounded-lg shadow-lg p-8 text-center">
						<div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
							<Icon name="phone" class="text-black" size="text-2xl" />
						</div>
						<h3 class="text-xl font-bold mb-4">Телефон</h3>
						<p class="text-gray-700 mb-2">Для звонков из Казахстана:</p>
						<p class="text-xl font-bold mb-4">+82 10 1234 5678</p>
						<p class="text-gray-700 mb-2">Для звонков из Кореи:</p>
						<p class="text-xl font-bold">010-1234-5678</p>
					</div>

					<!-- Email -->
					<div class="bg-white rounded-lg shadow-lg p-8 text-center">
						<div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
							<Icon name="mail" class="text-black" size="text-2xl" />
						</div>
						<h3 class="text-xl font-bold mb-4">Email</h3>
						<p class="text-gray-700 mb-2">Для общих вопросов:</p>
						<p class="text-xl font-bold mb-4">info@tabystrading.com</p>
						<p class="text-gray-700 mb-2">Для бизнес-предложений:</p>
						<p class="text-xl font-bold">business@tabystrading.com</p>
					</div>

					<!-- Address -->
					<div class="bg-white rounded-lg shadow-lg p-8 text-center">
						<div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
							<Icon name="map-pin" class="text-black" size="text-2xl" />
						</div>
						<h3 class="text-xl font-bold mb-4">Адрес</h3>
						<p class="text-gray-700 mb-2">Наш офис в Сеуле:</p>
						<p class="text-xl font-bold mb-4">Gangnam-gu, Seoul, South Korea</p>
						<p class="text-gray-700 mb-2">Время работы:</p>
						<p class="text-xl font-bold">Пн-Пт: 9:00 - 18:00</p>
					</div>
				</div>

				<!-- Contact Form -->
				<div class="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
					<div class="md:flex">
						<div class="md:w-1/2 bg-black p-8 md:p-12">
							<h2 class="text-3xl font-bold mb-6 text-white">Напишите нам</h2>
							<p class="text-gray-300 mb-8">Заполните форму, и наш специалист свяжется с вами в ближайшее время для консультации.</p>

							<div class="space-y-6">
								<div>
									<label for="name" class="block text-sm font-medium text-gray-300 mb-1">Ваше имя</label>
									<input type="text" id="name" class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-gold focus:outline-none" placeholder="Введите ваше имя" />
								</div>

								<div>
									<label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
									<input type="email" id="email" class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-gold focus:outline-none" placeholder="Введите ваш email" />
								</div>

								<div>
									<label for="phone" class="block text-sm font-medium text-gray-300 mb-1">Телефон</label>
									<input type="tel" id="phone" class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-gold focus:outline-none" placeholder="Введите ваш телефон" />
								</div>

								<div>
									<label for="message" class="block text-sm font-medium text-gray-300 mb-1">Сообщение</label>
									<textarea
										id="message"
										rows="4"
										class="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-gold focus:outline-none"
										placeholder="Введите ваше сообщение"></textarea>
								</div>

								<button class="w-full px-6 py-3 bg-gold text-black font-bold rounded hover:bg-opacity-90 transition">Отправить сообщение</button>
							</div>
						</div>

						<div class="md:w-1/2">
							<!-- Map placeholder - in production, replace with actual Google Maps embed -->
							<div class="h-full min-h-[400px] bg-gray-200 flex items-center justify-center">
								<div class="text-center p-8">
									<Icon name="map" class="text-gray-400 mb-4" size="text-6xl" />
									<p class="text-gray-600 font-bold">Карта Google Maps</p>
									<p class="text-gray-500 text-sm mt-2">В рабочей версии здесь будет интерактивная карта</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- FAQ -->
				<div class="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16">
					<h2 class="text-3xl font-bold mb-8 text-center">Часто задаваемые вопросы</h2>

					<div class="space-y-6">
						<div class="border-b border-gray-200 pb-6">
							<h3 class="text-xl font-bold mb-3">Как начать сотрудничество с TABYS Trading?</h3>
							<p class="text-gray-700">
								Для начала сотрудничества свяжитесь с нами по телефону, email или через форму на сайте. Наш специалист проведет первичную консультацию и предложит оптимальные варианты сотрудничества.
							</p>
						</div>

						<div class="border-b border-gray-200 pb-6">
							<h3 class="text-xl font-bold mb-3">Какие документы нужны для инвестиций в Южную Корею?</h3>
							<p class="text-gray-700">
								Для инвестиций в Южную Корею обычно требуются паспорт, документы, подтверждающие происхождение средств, и в некоторых случаях бизнес-план. Точный перечень документов зависит от типа
								инвестиций и суммы.
							</p>
						</div>

						<div class="border-b border-gray-200 pb-6">
							<h3 class="text-xl font-bold mb-3">Сколько времени занимает оформление экспортных документов?</h3>
							<p class="text-gray-700">
								Оформление экспортных документов обычно занимает от 3 до 10 рабочих дней, в зависимости от типа товара и требуемых сертификатов. Наши специалисты помогут ускорить этот процесс.
							</p>
						</div>

						<div class="border-b border-gray-200 pb-6">
							<h3 class="text-xl font-bold mb-3">Работаете ли вы с частными лицами или только с компаниями?</h3>
							<p class="text-gray-700">
								Мы работаем как с компаниями, так и с частными лицами. Для частных лиц мы предлагаем услуги по медицинскому и культурному туризму, а также инвестиционные возможности.
							</p>
						</div>

						<div>
							<h3 class="text-xl font-bold mb-3">Есть ли у вас представительство в Казахстане?</h3>
							<p class="text-gray-700">
								Да, у нас есть представительство в Алматы. Вы можете связаться с нашими представителями в Казахстане для первичной консультации и решения оперативных вопросов.
							</p>
						</div>
					</div>
				</div>

				<!-- Call to Action -->
				<div class="bg-black text-white rounded-lg shadow-lg overflow-hidden">
					<div class="p-8 md:p-12 text-center">
						<h2 class="text-3xl font-bold mb-6">Готовы начать сотрудничество?</h2>
						<p class="text-gray-300 mb-8 max-w-2xl mx-auto">Свяжитесь с нами сегодня, и мы поможем вам реализовать ваши бизнес-идеи и инвестиционные планы в Южной Корее.</p>
						<a href="tel:+821012345678" class="border border-gold px-8 py-3 bg-gold font-bold rounded hover:bg-opacity-90 transition"> Позвонить нам </a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
