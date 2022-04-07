// definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

// creo array nel quale inserisco gli oggetti in questione(membri del team)
let teamArray = [
    {
        immagine : 'wayne-barnett-founder-ceo.jpg',
        nome : 'Wayne Barnett',
        jobTitle : 'Founder & CEO'
    },
    {
        immagine : 'angela-caroll-chief-editor.jpg',
        nome : 'Angela Carrol',
        jobTitle : 'Chief Editor'
    },
    {
        immagine : 'walter-gordon-office-manager.jpg',
        nome : 'Walter Gordon',
        jobTitle : 'Office Manager'
    },
    {
        immagine : 'angela-lopez-social-media-manager.jpg',
        nome : 'Angela Lopez',
        jobTitle : 'Social Media Manager'
    },
    {
        immagine : 'scott-estrada-developer.jpg',
        nome : 'Scott Estrada',
        jobTitle : 'Developer'
    },
    {
        immagine : 'barbara-ramos-graphic-designer.jpg',
        nome : 'Barbara Ramos',
        jobTitle : 'Graphic Designer'
    }
];
let teamContainer = document.querySelector('.team-container');
// tramite ciclo for faccio ciclare gli oggetti contenuti negli arrai e creo elementi da stampare nell'html
printCard()
function printCard(){
    
    for(let i = 0 ; i < teamArray.length;i++){
        let teamCard = document.createElement('div');
        teamCard.setAttribute('class','team-card');

        let cardImage = document.createElement('div');
        cardImage.setAttribute('class','card-image');
        cardImage.innerHTML+=
        `<img src="./img/${teamArray[i].immagine}" alt="${teamArray[i].nome}">`;

        let cardText = document.createElement('div');
        cardText.setAttribute('class','card-text');
        cardText.innerHTML+= 
        `<h3>${teamArray[i].nome}</h3>
        <p>${teamArray[i].jobTitle}</p>`;

        teamCard.append(cardImage);
        teamCard.append(cardText);
        console.log(teamCard);
        teamContainer.append(teamCard)
    }
}
// prendo i valori degli input tramite il click sul bottone con una funzione

let addMemberButton = document.getElementById('addMemberButton');

addMemberButton.addEventListener('click',addMemberFunction);

function addMemberFunction(){
    let name = document.getElementById('name').value;
    console.log(name)
    let role = document.getElementById('role').value;
    console.log(role);
    let image = document.getElementById('image').value;
    console.log(image);
    let newMember = {
        immagine : image,
        nome : name,
        jobTitle : role
    }   
    teamArray.push(newMember); 
    console.log(teamArray);
    teamContainer.innerHTML ='';
    printCard()
}




