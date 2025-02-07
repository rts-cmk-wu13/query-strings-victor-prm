fetch("./data/destinations.json")
    .then(res => res.json())
    .then(data => createGrid(data));


function createGrid(d) {
    let rootElm = document.querySelector(".content-container");
    let itemGrid = document.createElement("section");
    itemGrid.classList.add("item-grid");
    rootElm.append(itemGrid);

    itemGrid.innerHTML += d.destinations.map(item => createCard(item)).join("");
}

function createCard(d) {
    //let flag = getFlagEmoji(d.destination,`test${d.id}`)
    let flag = getFlagEmoji(d.destination)
    return `<article class="destination-card">
                <div class="destination-card__img-container">
                    <div class="destination-card__img-container__header fxcol">
                    <h2 class="destination-card__title">${d.title}</h2>
                    <p class="destination-card__destination">${d.destination}</p>
                    <p class="test${d.id}">${flag}</p>

                </div>
                    <img src="./img/${d.image}" alt="" class="destination-card__img">
                </div>
                <div class="destination-card__content-container">
                    <button class="destination-card__like-button">Like</button>
                    <a href="detail.html?id=${d.id}}" class="destination-card__more-link">More</a>
                </div>
            </article>`
}





function getFlagEmoji(countryName, css) {
    countryName = countryName.toLowerCase();
    let flag;
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(resp => resp.json())
        .then(json => {
            let code = json[0].cca2;
            return code;
        }).then(code => {
            //console.log(code)
            flag = getFlagbyCode(code);
            //console.log(flag)
            //document.querySelector(`.${css}`).innerHTML += flag;
            return String(flag);
        })
        
}

function getFlagbyCode(str) {
    //console.log(str)
    let codePoints = str.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
    //console.log(codePoints)
    return String.fromCodePoint(...codePoints);
}
