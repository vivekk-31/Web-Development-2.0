console.log('Let us begin.');

let audio = new Audio();
let songs = [{ name: "Tum se Hi", file: "songs/Tum_Se_Hi_(Jab_We_Met)_320_Kbps.mp3" },
{ name: "Tune Jo Na Kaha", file: "songs/Tune Jo Na Kaha - Mohit Chauhan.mp3" },
{ name: "Faasle", file: "songs/Faasle.mp3" },
{ name: "Hain Junoon", file: "songs/Hai Junoon.mp3" }
]

window.addEventListener('load', () => {
   playpause.innerHTML = `<svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/></svg>`
});


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
    songTitle.appendChild(title)
    cards.appendChild(songTitle)

    cards.addEventListener("click", () => {
        loadSong(index)
        if (audio.paused) {
            playSong()
            playpause.innerHTML = `<svg class="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z"/></svg>`
        }
        else {
            pauseSong()
            playpause.innerHTML = `<svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/></svg>`
        }
    })

    songsDisplay.appendChild(cards);

});


function loadSong(index) {
    audio.src = songs[index].file;
    audio.load()
}

let playpause = document.querySelector(".playpause");
playpause.style.display = "block"
playpause.addEventListener("click", () => {
    if (audio.paused) {
        playSong()
        playpause.innerHTML = `<svg class="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z"/></svg>`
    }
    else if (audio.paused == false) {
        pauseSong()
        playpause.innerHTML = `<svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/></svg>`
    }
})


function playSong() {
    audio.play()
}

function pauseSong() {
    audio.pause()
}
