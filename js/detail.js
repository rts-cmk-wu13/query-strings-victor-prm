let searchParams = new URLSearchParams(window.location.search)
//console.log(searchParams);
let getID = searchParams.get("id");
//console.log(getID);
fetch(`./data/${getID}.json`)
    .then(res => res.json())
    .then(data => createDetail(data));


function createDetail(d) {
    //console.log(d)
    let rootElm = document.querySelector(".content-container");

    let detailSection = document.createElement("section");
    detailSection.classList.add("item-detail", "card");

    let semiUniqueID = d.destination + d.id;
    detailSection.id = semiUniqueID;

    detailSection.innerHTML += createDetailCard(d,semiUniqueID);

    rootElm.append(detailSection)
}

function createDetailCard(d, semiUniqueID) {
    return `<div class="item-detail__image-container">
                <div class="item-detail__button-container fxrow">
                    <a href="index.html"><i class="fas fa-arrow-left"></i> Back</a>
                    <button class="destination-card__like-button like-button" onclick="handleFavorite('${semiUniqueID}')"><i class="${handleLikeIcon(semiUniqueID)}"></i></button>
                </div>
                <img src="./img/${d.image}" alt="" class="item-detail__image">
                
            </div>
            <div class="item-detail__content-container fxcol">
                <h1>${d.title}</h1>
                <h2>${d.subtitle}</h2>
                <p><i class="fa-solid fa-location-dot"></i> ${d.destination}</p>
                <p>${d.text}</p>
                <ul>
                    ${d.facilities.map(facility => createListItem(facility)).join("")}
                </ul>
                
            </div>
    `
}

function createListItem(d) {
    return `<li>${d}</li>`
}