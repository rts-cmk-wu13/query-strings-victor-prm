fetch("./data/destinations.json")
    .then(res => res.json())
    .then(data => createGrid(data));

let uniqueArray = [];
function createGrid(d) {
    let rootElm = document.querySelector(".content-container");
    let mainHeadline = document.createElement("h1");
    mainHeadline.classList.add("title-main");
    mainHeadline.innerHTML = "Our Wonderful Apartments";

    let itemGrid = document.createElement("section");
    itemGrid.classList.add("item-grid");

    rootElm.append(mainHeadline,itemGrid);
    itemGrid.innerHTML += d.destinations.map(item => {
        return createCard(item);
    }).join("");

    
    //const unique = [...new Set(data.map(item => item.group))];
    //console.log(unique);

    function createCard(d) {
        //findUniqueFacilities(d);
      
        let semiUniqueID = d.destination+d.id;
        return `<article class="destination-card card">
                    <div class="destination-card__img-container">
                        <div class="destination-card__img-container__header fxcol">
                        <h2 class="destination-card__title">${d.title}</h2>
                        <p class="destination-card__destination">${d.destination} <span class="flag${d.id}">${getFlagEmoji(d.destination,`flag${d.id}`)}</span></p>
                    </div>
                        <img src="./img/${d.image}" alt="" class="destination-card__img">
                    </div>
                    <div class="destination-card__content-container fxrow">
                        <button class="destination-card__like-button like-button" onclick="handleFavorite(${semiUniqueID})"><i class="${handleLikeIcon(semiUniqueID)}" id="${semiUniqueID}"></i></button>
                        <a href="detail.html?id=${d.id}" class="destination-card__more-link">More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>`
    }

}

function getFlagEmoji(countryName, css) {
    countryName = countryName.toLowerCase();
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(resp => resp.json())
        .then(json => {
            let code = json[0].cca2;
            //console.log(code)
            let flag = getFlagbyCode(code);
            document.querySelector(`.${css}`).innerHTML = flag;
        }) 
}

function getFlagbyCode(str) {
    //console.log(str)
    let codePoints = str.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
    //console.log(codePoints)
    return String.fromCodePoint(...codePoints);
}

function findUniqueFacilities(d){
    d.facilities.forEach(e => {
        if (!uniqueArray.includes(e)) uniqueArray.push(e)
     })
    console.log(uniqueArray)
}
