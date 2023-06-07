function gen1() {
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
    fetch("https://dog.ceo/api/breed/Briard/images/random")
    .then(adat => adat.json())
    .then(res => {
        document.getElementById("kep").src=res.message;
        
    }
        )
}

function gen4() {
    fetch("https://dog.ceo/api/breed/Akita/images/random")
    .then(adat => adat.json())
    .then(res => {
        document.getElementById("kep").src=res.message;
        
    }
        )
}

function gen5() {
    fetch("https://dog.ceo/api/breed/Dalmatian/images/random")
    .then(adat => adat.json())
    .then(res => {
        document.getElementById("kep").src=res.message;
        
    }
        )
}


