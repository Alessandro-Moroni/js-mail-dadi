let userEmail = prompt('Inserisci la tua email');
const email = ['rossi@gmail.com', 'verdi@gmail.com', 'bianchi@gmail.com'];

let verifica = false;

for (let i = 0; i < email.length; i++){

  if(userEmail == email[i]){
    verifica = true;
    console.log(userEmail);
  }
}

if(verifica){
  alert('Email corretta');
  document.getElementById('user').innerHTML = `
<p>
  La tua email <strong> ${userEmail} </strong> è corretta.
</p>
`;
}else{
  alert('Email non corretta, riprovare');
  const bt1 = document.querySelector('.bt1');
  bt1.classList.add('d-none');
}

const bt1 = document.querySelector('.bt1');

bt1.addEventListener('click',function(){
  
  const dadoUser = (Math.ceil(Math.random() * 6));
  const dadoPC = (Math.ceil(Math.random() * 6));
  let result;
  
  if(dadoUser > dadoPC){
    result = `Hai vinto te! con ${dadoUser} a ${dadoPC}`;
  }else if(dadoUser < dadoPC){
    result = `Ha vinto il Computer! con ${dadoUser} a ${dadoPC}`;
  }else{
    result = `Il risultato è pari! con ${dadoUser} a ${dadoPC}`;
  }
  
  document.getElementById('result').innerHTML = result;
});



