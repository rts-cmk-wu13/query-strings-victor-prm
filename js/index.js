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

    rootElm.append(mainHeadline, itemGrid);
    itemGrid.innerHTML += d.destinations.map(item => {
        return createCard(item);
    }).join("");

    handleLikeIcons();

    function createCard(d) {
        //findUniqueFacilities(d);

        let semiUniqueID = d.destination + d.id;
        return `<article class="destination-card card">
                    <div class="destination-card__img-container">
                        <div class="destination-card__img-container__header fxcol">
                        <h2 class="destination-card__title">${d.title}</h2>
                        <p class="destination-card__destination">${d.destination} <span class="flag${d.id}">${getFlagEmoji(d.destination, `flag${d.id}`)}</span></p>
                    </div>
                        <img src="./img/${d.image}" alt="" class="destination-card__img">
                    </div>
                    <div class="destination-card__content-container fxrow">
                        ${renderLikeIcon(semiUniqueID)}
                        <a href="detail.html?id=${d.id}" class="destination-card__more-link">More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>`
    }
}

/**
 * Fetches a country code froom a given country name, and returns a corresponding flag emoji
 * @param {string} countryName - Country Name to query for country code for
 * @param {string} selector - CSS selector of where to place the flag emoji
 */

function getFlagEmoji(countryName, selector) {
    countryName = countryName.toLowerCase();
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(resp => resp.json())
        .then(json => {
            let code = json[0].cca2;
            //console.log(code)
            let flag = getFlagbyCode(code);
            document.querySelector(`.${selector}`).innerHTML = flag;
        })
}

function findUniqueFacilities(d) {
    d.facilities.forEach(e => {
        if (!uniqueArray.includes(e)) uniqueArray.push(e)
    })
    console.log(uniqueArray)
}
