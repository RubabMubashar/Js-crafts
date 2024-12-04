function showContent(contentId) {
    // Hide all content sections
    const allContents = document.querySelectorAll('.content');
    allContents.forEach(content => content.classList.remove('active'));
  
    // Show the selected content
    const contentToShow = document.getElementById(contentId);
    contentToShow.classList.add('active');
  
    // Remove the active class from all tabs
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('active'));
  
    // Add the active class to the clicked tab
    const activeTab = document.getElementById(contentId.replace('content', 'tab'));
    activeTab.classList.add('active');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showContent('content1');
  });
  