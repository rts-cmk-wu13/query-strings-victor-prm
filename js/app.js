function handleFavorite(d) {
    let id = d.id;
    console.log("data", d)
    let favoriteString = localStorage.getItem("favorites") || "";

    if (!favoriteString.includes(`${id}`)) {
        favoriteString += `${id},`;
    } else {
        favoriteString = favoriteString.replace(`${id},`,"")
    }
    
    localStorage.setItem("favorites", favoriteString);
    //let selector = document.querySelector(`#${id} .like-button i`);
    let selector = document.querySelector(`#${id}`);
    console.log(selector)
    selector.className = handleLikeIcon(id); 
}


function handleLikeIcon(id){
    let favoriteString = localStorage.getItem("favorites") || "";
    if(favoriteString.includes(id)){
        return "fa fa-heart"
    }else{
        return "fa fa-heart-o"
    }
}
