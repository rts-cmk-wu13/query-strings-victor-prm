//OLD VERSION, Before learning about JSON.stringify and JSON.parse

/* function handleFavorite(d) {
    let id = d.id;
    let favoriteString = localStorage.getItem("favorites") || "";

    if (!favoriteString.includes(`${id}`)) {
        favoriteString += `${id},`;
    } else {
        favoriteString = favoriteString.replace(`${id},`, "")
    }

    localStorage.setItem("favorites", favoriteString);
    //let selector = document.querySelector(`#${id} .like-button i`);
    let selector = document.querySelector(`#${id}`);
    console.log(selector)
    selector.className = handleLikeIcon(id);
} */

function handleFavorite(d){
    let id = d.id;
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    if (!favorites.includes(id)) {
        favorites.push(id);
    } else {
        favorites = favorites.filter(item => item != id)
    }
    
    localStorage.setItem("favorites", JSON.stringify(favorites));
    
    let selector = document.querySelector(`#${id}`);
    console.log(selector)
    selector.className = handleLikeIcon(id);
}


function handleLikeIcon(id) {
    let favoriteString = localStorage.getItem("favorites") || "";
    if (favoriteString.includes(id)) {
        return "fa fa-heart"
    } else {
        return "fa fa-heart-o"
    }
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
        if(f.facility == fac){
            return f.iconCode
        }
    });
    return iconObject.join("");
}
