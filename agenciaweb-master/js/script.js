document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 4; i++) {
      let button = document.getElementById('button' + i);
      let contato = document.getElementById('contato');
      let content = document.querySelector('.card' + i + '-content');
  
      button.addEventListener('click', function() {
        if (content.style.display === 'none') {
          content.style.display = 'block';
         
          button.textContent = 'Ler menos';
        } else {
          content.style.display = 'none';
          contato.removeAttribute("contato");
          button.textContent = 'Ler mais';
        }
      });
    }
  });
  