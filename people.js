const nameSurname = require("./names");
const hobbies = require("./hobbies");

function people () {
  return {
    fullName: nameSurname('nome ', 'cognome'),
    hobbies: hobbies('nuoto', 'giardinaggio', 'lettura')
  }
    
}
console.log(people());
