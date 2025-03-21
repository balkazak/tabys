export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  try {
    // Here you would typically send an email
    // For example, using nodemailer or another email service
    
    // For now, we'll just log the form data
    console.log('Contact form submission:', body);
    
    // In a real implementation, you would send an email to tabystrading@naver.com
    // with the form data
    
    return { success: true };
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return createError({
      statusCode: 500,
      statusMessage: 'Failed to process contact form'
    });
  }
}); 