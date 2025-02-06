fetch("./data/destinations.json")
    .then(res => res.json())
    .then(data => console.log(data.destinations));