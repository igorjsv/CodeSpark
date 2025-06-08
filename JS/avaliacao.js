
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById('popup-avaliacao');
  const formOrcamento = document.querySelector('form');
  const formAvaliacao = document.getElementById('form-avaliacao');

  if (formOrcamento && popup) {
    formOrcamento.addEventListener('submit', function (e) {
      e.preventDefault();
      popup.style.display = "flex";
    });
  }

  formAvaliacao.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('avaliador-nome').value;
    const estrelas = parseInt(document.getElementById('avaliador-estrelas').value);
    const comentario = document.getElementById('avaliador-comentario').value;

    fetch('http://localhost:3000/depoimentos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, estrelas, comentario })
    }).then(() => {
      popup.style.display = "none"; // fecha popup de avaliação
      document.body.innerHTML += `
        <div id="popup-final" style="position:fixed; top:0; left:0; width:100%; height:100%; background:#00000099; display:flex; justify-content:center; align-items:center;">
          <div style="background:white; padding:20px; border-radius:8px; text-align:center;">
            <p>Obrigado pelo feedback!</p>
            <a href='home.html'>
              <button style="margin-top:12px; padding:8px 16px; background:#44CCCC; color:white; border:none; border-radius:6px;">
                Voltar para o início
              </button>
            </a>
          </div>
        </div>`;
    });
  });
});
