function gen() {
    fetch("https://dog.ceo/api/breed/terrier/russell/images/random")
    .then(adat => adat.json())
    .then(res => {
        document.getElementById("kep").src=res.message;
        
    }
        )
}
function gen2() {
    fetch("https://dog.ceo/api/breed/beagle/images/random")
    .then(adat => adat.json())
    .then(res => {
        document.getElementById("kep").src=res.message;
        
    }
        )
}

function gen3() {
    fetch("https://dog.ceo/api/breed/spanishwaterdog/images/random")
    .then(adat => adat.json())
    .then(res => {
        document.getElementById("kep").src=res.message;
        
    }
        )
}

function gen4() {
    fetch("https://dog.ceo/api/breed/englishhound/images/random")
    .then(adat => adat.json())
    .then(res => {
        document.getElementById("kep").src=res.message;
        
    }
        )
}

function gen5() {
    fetch("https://dog.ceo/api/breed/afghanhound/images/rando")
    .then(adat => adat.json())
    .then(res => {
        document.getElementById("kep").src=res.message;
        
    }
        )
}


