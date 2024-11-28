const tabs = document.querySelectorAll('.tab_btn');
const allContent = document.querySelectorAll('.content');
const line = document.querySelector('.line');

// Set line position based on active tab
function setLinePosition(activeTab) {
  line.style.width = activeTab.offsetWidth + 'px';
  line.style.left = activeTab.offsetLeft + 'px';
}

// Initialize on page load
window.addEventListener('load', () => {
  const activeTab = document.querySelector('.tab_btn.active');
  setLinePosition(activeTab);
});

// Handle tab switching
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => tab.classList.remove('active'));
    tab.classList.add('active');
    setLinePosition(tab);

    const targetContent = tab.dataset.tab;
    allContent.forEach((content) => {
      content.classList.remove('active');
      if (content.id === targetContent) {
        content.classList.add('active');
      }
    });
  });
});

// Adjust line position on window resize
window.addEventListener('resize', () => {
  const activeTab = document.querySelector('.tab_btn.active');
  setLinePosition(activeTab);
});
