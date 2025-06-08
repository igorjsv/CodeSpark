
fetch('http://localhost:3000/depoimentos')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('depoimentos');
    if (!container) return;
    data.forEach(dep => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <p class="estrelas">${'★'.repeat(dep.estrelas)}</p>
        <p><em>“${dep.comentario}”</em></p>
        <p><strong>— ${dep.nome}</strong></p>
      `;
      container.appendChild(card);
    });
  });
