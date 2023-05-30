function gen() {
    fetch("https://dog.ceo/api/breed/terrier/russell/images/random")
    .then(adat => adat.json())
    .then(res => {
        document.getElementById("kep").src=res.message;
        
    }
        )
}