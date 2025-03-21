export const defaultSeoConfig = {
	title: "TABYS Trading LTD - Бизнес между Казахстаном и Южной Кореей",
	description: "TABYS Trading LTD - ваш надежный партнер в бизнесе между Казахстаном и Южной Кореей. Экспорт, импорт, юридические услуги, медицинский и культурный туризм, инвестиции.",
	ogImage: "/logo.png",
	ogType: "website",
	twitterCard: "summary_large_image",
};

export function useCustomSeoMeta(config = {}) {
	const seoConfig = { ...defaultSeoConfig, ...config };

	useSeoMeta({
		title: seoConfig.title,
		ogTitle: seoConfig.title,
		description: seoConfig.description,
		ogDescription: seoConfig.description,
		ogImage: seoConfig.ogImage,
		ogType: seoConfig.ogType,
		twitterCard: seoConfig.twitterCard,
	});
}
