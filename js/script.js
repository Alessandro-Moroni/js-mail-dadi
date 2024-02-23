let userEmail = prompt('Inserisci la tua email');
const email = ['rossi@gmail.com', 'verdi@gmail.com', 'bianchi@gmail.com'];

for (let i = 0; i < email.length; i++){

  if(userEmail == email[i]){
    console.log(userEmail);
  }
}



// document.getElementById('user').innerHTML = `
// <p>
//   La tua email <strong> ${userEmail} </strong> è corretta.
// </p>
// `

