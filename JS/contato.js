function enviaContato(event) {
  event.preventDefault();
  let msg = document.getElementById('msgContato');
  msg.style.color = '#20b320';
  msg.innerText = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
  setTimeout(() => { msg.innerText = ''; }, 5000);
  document.getElementById('contatoForm').reset();
  return false;
}