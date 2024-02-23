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
`
}else{
  alert('Email non corretta, riprovare');
}






