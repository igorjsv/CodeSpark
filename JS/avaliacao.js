
let jaEnviado = false;

function enviarAvaliacao() {
  if (jaEnviado) {
    console.log('Já enviado. Ignorando...');
    return;
  }

  const nome = document.getElementById('avaliador-nome').value.trim();
  const estrelas = parseInt(document.getElementById('avaliador-estrelas').value);
  const comentario = document.getElementById('avaliador-comentario').value.trim();

  console.log('Dados coletados:', { nome, estrelas, comentario });

  if (!nome || !estrelas || !comentario || estrelas < 1 || estrelas > 5) {
    alert("Preencha tudo corretamente.");
    return;
  }

  jaEnviado = true;
  console.log('Enviando avaliação...');

  fetch('http://localhost:3000/depoimentos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, estrelas, comentario })
  }).then(() => {
    console.log('Redirecionando para a home...');
    window.location.replace('../HTML/home.html');
  }).catch(() => {
    console.log('Erro, mas forçando redirecionamento...');
    window.location.replace('../HTML/home.html');
  });
}
