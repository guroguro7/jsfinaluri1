document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
  
      header.addEventListener('click', function() {
        const isOpen = item.classList.contains('open');
  
        accordionItems.forEach(item => {
          item.classList.remove('open');
          item.querySelector('.accordion-content').style.display = 'none';
        });
  
        if (!isOpen) {
          item.classList.add('open');
          content.style.display = 'block';
        }
      });
    });
  });
  