let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function handleFavorite(id) {
    let selector = document.querySelector(`#${id}`);
    if (!checkIfItemIsSaved(id, favorites)) {
        favorites.push(id);
        selector.dataset.selected = true;
    } else {
        favorites = favorites.filter(item => item != id)
        selector.dataset.selected = false;
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    handleLikeIcons();
}

function handleLikeIcons() {
    let likeButtons = document.querySelectorAll(".like-button i");

    likeButtons.forEach(icon => {

        if (icon.dataset.selected === "true") {
            icon.className = "fa fa-heart";
        } else {
            icon.className = "fa fa-heart-o";
        }
    }
    )
}

function renderLikeIcon(id) {
    return `<button class="destination-card__like-button like-button" onclick="handleFavorite('${id}')"><i data-selected="${checkIfItemIsSaved(id, favorites)}" id="${id}"></i></button>`
}

function checkIfItemIsSaved(id, array) {
    return array.includes(id) ? true : false;
}

function mapFacilitiesIcons(fac) {
    let iconMaps = [
        {
            facility: "Free parking on the premises",
            iconCode: "fas fa-parking"
        },
        {
            facility: "Kitchen",
            iconCode: "fas fa-apple-alt"
        },
        {
            facility: "Wi-Fi",
            iconCode: "fas fa-wifi"
        },
        {
            facility: "Beach Access",
            iconCode: "fas fa-umbrella-beach"
        },
        {
            facility: "Garage",
            iconCode: "fas fa-car"
        },
        {
            facility: "TV",
            iconCode: "fas fa-tv"
        },
        {
            facility: "Iron/ironing board",
            iconCode: "fas fa-tshirt"
        },
        {
            facility: "Fireplace",
            iconCode: "fas fa-fire-alt"
        },
        {
            facility: "Spa",
            iconCode: "fas fa-spa"
        },
        {
            facility: "Swimming Pool",
            iconCode: "fas fa-swimming-pool"
        },
        {
            facility: "Breakfast",
            iconCode: "fas fa-coffee"
        },
        {
            facility: "Shampoo",
            iconCode: "fas fa-pump-soap"
        },
        {
            facility: "A/C",
            iconCode: "fas fa-fan"
        }
    ]
    console.log(fac)
    let iconObject = iconMaps.map(f => {
        if (f.facility == fac) {
            return f.iconCode
        }
    });
    return iconObject.join("");
}


/**
 * Finds a flag emoji corresponding to a given country code
 * @param {string} str - Country Code to find flag emoji by
 */

function getFlagbyCode(str) {
    //console.log(str)
    let codePoints = str.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
    //console.log(codePoints)
    return String.fromCodePoint(...codePoints);
}

