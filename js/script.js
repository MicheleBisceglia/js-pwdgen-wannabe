//chiedere all'utente il suo nome
const username = prompt("Scrivi qui il tuo nome")
console.log(username);

//chiedere all'utente il suo cognome
const usersurname = prompt("Scrivi qui il tuo cognome")
console.log(usersurname);

//chiedere all'utente il suo colore preferito
const color = prompt("Scrivi qui il tuo colore preferito")
console.log(color);

//Creare la password
const message = `La tua nuova password è ${username}${usersurname}${color}21`;
console.log(message);

//Scrivere la password sulla pagina
document.getElementById('password').innerHTML = message ;