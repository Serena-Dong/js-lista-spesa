const targetElement = document.getElementById('result');


//creo l'array
const groceryList = ['eggs', 'milk', 'butter'];

//definisco il valore di i
let i = 0;

let theList = '<ul>';

//creo il loop definendo la condizione di eseguire il codice finché il valore di "i" non sarà minore del numero degli emelenti dell'array 
while (i < groceryList.length){
    theList += `<li>${groceryList[i]} </li>`;
    i++;
}

theList += '</ul>';

//stampo in pagina
console.log(theList);
targetElement.innerHTML = theList;
