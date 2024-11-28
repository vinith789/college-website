document.addEventListener('DOMContentLoaded', function() {
  const toggleBar = document.querySelector('.toggle-icon');
  const closeBar = document.querySelector('.close-icon');
  const navbar = document.querySelector('.navbar');

  toggleBar.addEventListener('click', function() {
    navbar.style.display = 'block';
    toggleBar.style.display = 'none';
    closeBar.style.display = 'block';
  });

  closeBar.addEventListener('click', function() {
    navbar.style.display = 'none';
    closeBar.style.display = 'none';
    toggleBar.style.display = 'block';
  });

  // Reset navbar and toggle bar visibility on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 770) {
      navbar.style.display = 'block'; // Always show navbar above 770px
      toggleBar.style.display = 'none';
      closeBar.style.display = 'none';
    } else {
      navbar.style.display = 'none'; // Hide navbar below 770px
      toggleBar.style.display = 'block'; // Show toggle bar below 770px
      closeBar.style.display = 'none';
    }
  });
});

// card content

document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.card');
  let currentCardIndex = 0;
  const displayTime = 10000;//time
  const video = document.getElementById('background-video');
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  // Card is loaded
  function showNextCard() {
    cards.forEach((card, index) => {
      card.classList.remove('show');
      card.classList.add('hide');
    });
    // Card show hide
    const currentCard = cards[currentCardIndex];
    currentCard.classList.remove('hide');
    currentCard.classList.add('show');

    currentCardIndex = (currentCardIndex + 1) % cards.length;

    setTimeout(showNextCard, displayTime);
  }

  showNextCard();

  video.addEventListener('ended', function() {
    currentCardIndex = 0;
    showNextCard();
  });

  navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
  });
});
