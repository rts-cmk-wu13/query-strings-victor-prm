let searchParams = new URLSearchParams(window.location.search)
//console.log(searchParams);
let getID = searchParams.get("id");
//console.log(getID);
fetch(`./data/${getID}.json`)
    .then(res => res.json())
    .then(data => console.log(data));