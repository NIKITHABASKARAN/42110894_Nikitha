const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.plus-icon');

  // Handle button click
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Close all other FAQ items
    faqItems.forEach((faq) => {
      const otherButton = faq.querySelector('.faq-question');
      const otherAnswer = faq.querySelector('.faq-answer');
      const otherIcon = faq.querySelector('.plus-icon');

      // Close all expanded items
      otherButton.setAttribute('aria-expanded', 'false');
      otherAnswer.style.display = 'none';
      otherIcon.style.transform = 'rotate(0deg)';
    });

    // Toggle current FAQ only if not already expanded
    if (!isExpanded) {
      button.setAttribute('aria-expanded', 'true');
      answer.style.display = 'block';
      icon.style.transform = 'rotate(45deg)';
    }
  });
});
