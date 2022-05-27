function trocar(){
    if (document.querySelector('#fec').classList.contains('abrir')){
    document.querySelector('#fec').classList.remove('abrir');
    document.querySelector('#fec').classList.add('fechar');
 } else {
     document.querySelector('#fec').classList.remove('fechar');
     document.querySelector('#fec').classList.add('abrir');
  }
 }