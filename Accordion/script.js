function toggleAccordion(button) {
    const item = button.parentElement;
    const content = item.querySelector('.accordion-content');
  
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      content.style.maxHeight = null;
    } else {
      document.querySelectorAll('.accordion-item').forEach((child) => {
        child.classList.remove('active');
        child.querySelector('.accordion-content').style.maxHeight = null;
      });
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }
  