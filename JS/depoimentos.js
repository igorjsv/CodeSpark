
fetch('http://localhost:3000/depoimentos')
  .then(res => res.json())
  .then(data => {
    const track = document.getElementById('depoimentos');
    if (!track) return;

    data.forEach(dep => {
      const card = document.createElement('div');
      card.classList.add('avaliacao-card');
      card.innerHTML = `
        <div class="stars">${'★'.repeat(dep.estrelas)}</div>
        <p>“${dep.comentario}”</p>
        <span>— ${dep.nome}</span>
      `;
      track.appendChild(card);
    });

    let currentIndex = 0;
    const cardWidth = 270;

    function updateCarousel() {
      const isMobile = window.innerWidth <= 600;
      if (isMobile) {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      } else {
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      }
    }

    document.querySelector('.carousel-nav.prev').innerHTML = '‹';
    document.querySelector('.carousel-nav.next').innerHTML = '›';

    document.querySelector('.carousel-nav.prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + data.length) % data.length;
      updateCarousel();
    });

    document.querySelector('.carousel-nav.next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % data.length;
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  });
