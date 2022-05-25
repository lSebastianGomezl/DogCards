const url = 'https://random.dog/woof.json';

const main = document.querySelector('main');


const bnt = document.getElementById('btn-generate');



const getCharacters =() =>{
    fetch(url)
    .then(response => response.json())
    .then(data => {(data[0])

    const containerCard = document.createElement('div');
    containerCard.classList.add('card');

    // const imgDog = document.createElement('img');
    // imgDog.classList.add('img-card');

    const imgCharacter = document.createElement('img');
    imgCharacter.classList.add('img-card');
    imgCharacter.setAttribute('src',data.url);
    imgCharacter.setAttribute('alt',data.url);
    containerCard.appendChild(imgCharacter);


    containerCard.appendChild(imgCharacter);
    main.appendChild(containerCard);
})


// function createImg(listDogs){


// }

}
bnt.addEventListener('click', getCharacters);
