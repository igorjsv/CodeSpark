
let currentIndex = 0;

function slideCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.carousel-track .avaliacao-card');
  const cardWidth = cards[0].offsetWidth + 16;
  const visibleCards = 5;

  if (direction === 'next' && currentIndex < cards.length - visibleCards) {
    currentIndex++;
  } else if (direction === 'prev' && currentIndex > 0) {
    currentIndex--;
  }

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
