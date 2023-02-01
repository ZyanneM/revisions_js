let bouton = document.querySelector('.btn');

// 3 manières de délarer des variables

var a = 'toto'
//hoisting fait remonter toutes les variables en haut de l'éxécution
const b = 'tata'
let c = 'titi'
//on ne peut accéder à la variable que si elle a été initialisée

//déclarer une fonction dans une variable permet d'éviter le hoisting

function UpdateText () {
    // Create an "li" node:
const node = document.createElement("li");

// Create a text node:
const textnode = document.createTextNode("Plutôt donut ou cupcake ?");

// Append the text node to the "li" node:
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("demo").appendChild(node);
    
}

// pour afficher une image aléatoire
function DisplayRandomImg () {
    document.getElementById('jolie-image').src = "/image" + Math.floor(Math.random() * 6) + ".jpg";

}

// bouton.addEventListener("click", UpdateText);

  const stagiaires = ['cupcake vanille', 'donut chocolat', 'muffin caramel', 'cupcake cerise', 'donut vanille', 'muffin chocolat noir', 'cupcake chantilly'];
  //afficher chaque prénom en console via fonction

//   const formateur = {
//     prenom : "Gregory",
//     age : 
//   }


function DisplayMenu () {
//essayer d'afficher la liste d'un item du menu au clic

    // Create an "li" node:
const node = document.createElement("li");


// Append the text node to the "li" node:
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("trymap").appendChild(node);
    
}

