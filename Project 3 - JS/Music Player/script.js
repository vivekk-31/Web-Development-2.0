console.log('Let us begin.');
let audio = new Audio();
let songs = [{ name: "Tum se Hi", file: "songs/Tum_Se_Hi_(Jab_We_Met)_320_Kbps.mp3" },
{ name: "Tune Jo Na Kaha", file: "songs/Tune Jo Na Kaha - Mohit Chauhan.mp3" },
{ name: "Faasle", file: "songs/Faasle.mp3" },
{ name: "Hain Junoon", file: "songs/Hai Junoon.mp3" }
]

var songsDisplay = document.querySelector(".songsDisplay")
songs.forEach((currentItem, index) => {
    console.log(index)

    let cards = document.createElement("div");
    cards.className = "card"
    let coverImage = document.createElement("div")
    coverImage.className = "coverImage"
    let img = document.createElement("img")
    img.src = "songs/cover.jpg"
    img.alt = "coverImage"
    coverImage.appendChild(img)
    let songTitle = document.createElement("div")
    songTitle.className = "songTitle"
    let title = document.createElement("p")
    title.className = "title"
    songTitle.appendChild(title)
    title.innerText = currentItem.name;
    cards.appendChild(coverImage)
    coverImage.appendChild(img)
    songTitle.appendChild(cards)

    // let card = document.querySelector(".card")
    cards.addEventListener("click", () => {
        loadSong(index)
        playSong()
    })

    songsDisplay.appendChild(cards);

});




function loadSong(index) {
    audio.src = songs[index].file;
    audio.load()
}

function playSong() {
    audio.play();
}
