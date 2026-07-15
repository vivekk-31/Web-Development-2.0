console.log('Let us begin.');

let audio = new Audio();
let songs = [{ name: "Tum se Hi", file: "songs/Tum_Se_Hi_(Jab_We_Met)_320_Kbps.mp3", coverImage: "CoverImages/TumSeHi Cover.jpg" },
{ name: "Tune Jo Na Kaha", file: "songs/Tune Jo Na Kaha - Mohit Chauhan.mp3", coverImage: "CoverImages/TuneJoNaKaha Cover.jpg" },
{ name: "Faasle", file: "songs/Faasle.mp3", coverImage: "CoverImages/Faasle Cover.jpg" },
{ name: "Hain Junoon", file: "songs/Hai Junoon.mp3", coverImage: "CoverImages/HaiJunoon Cover.jpg" },
{ name: "Hamein Tumse Hua Hain Pyaar", file: "songs/Hamein Tumse Hua Pyar Ab Tumhare Hawale Watan Sathiyo 320 Kbps.mp3", coverImage: "CoverImages/HameinTumseHuaHainPyaar Cover.jpg" },
{ name: "O Meri Jaan", file: "songs/O Meri Jaan Life In A Metro 320 Kbps.mp3", coverImage: "CoverImages/OMeriJaan Cover.jpg" },
{ name: "Yahi Hota Pyaar", file: "songs/Yahi Hota Pyaar Namastey London 320 Kbps.mp3", coverImage: "CoverImages/YahiHotaPyaar Cover.jpg" },
{ name: "Ye Ishq Hain", file: "songs/Ye Ishq Hai Jab We Met 320 Kbps.mp3", coverImage: "CoverImages/YeIshqHain Cover.jpg" },
{ name: "Khuda Bhi", file: "songs/Khuda Bhi Ek Paheli Leela 320 Kbps.mp3", coverImage: "CoverImages/KhudaBhi Cover.jpg" },
]

let currentSongIndex;
let pause = `<svg class="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z"/></svg>`

let play = `<svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/></svg>`


window.addEventListener('load', () => {
    playpause.innerHTML = `${play}`
    currentSongIndex = 0;
    loadSong(0)
});

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (audio.paused) {
            playSong()
            playpause.innerHTML = `${pause}`
        } else {
            pauseSong()
            playpause.innerHTML = `${play}`
        }
    }
})


var songsDisplay = document.querySelector(".songsDisplay")
songs.forEach((currentItem, index) => {
    console.log(index)

    let cards = document.createElement("div");
    cards.className = "card"
    let coverImage = document.createElement("div")
    coverImage.className = "coverImage"
    let img = document.createElement("img")
    img.src = currentItem.coverImage;
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
        currentSongIndex = index;
        loadSong(currentSongIndex)
        if (audio.paused) {
            playSong()
            playpause.innerHTML = `${pause}`
        }
        else {
            pauseSong()
            playpause.innerHTML = `${play}`
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
        playpause.innerHTML = `${pause}`
    }
    else {
        pauseSong()
        playpause.innerHTML = `${play}`
    }
})

let previous = document.querySelector(".left")
previous.addEventListener("click", () => {
    previousSong()
})

let next = document.querySelector(".right")
next.addEventListener("click", () => {
    nextSong()
})

let tracker = document.querySelector(".tracker");

let seekbar = document.querySelector(".seekbar");
let seekbarWidth = seekbar.clientWidth;
console.log("Seekbar width: " + seekbarWidth)
seekbar.addEventListener("click", (e) => {
    let clickPosition = e.offsetX;
    console.log('Clicked at width position:', clickPosition);
    let percentage = clickPosition / seekbarWidth;
    let seconds = percentage * audio.duration;
    console.log(seconds);
    tracker.style.width = `${percentage}%`
    audio.currentTime = seconds;
    audio.addEventListener("ended", () => {
        nextSong();
    })
})

let playback = audio.addEventListener("timeupdate", () => {
    tracker.style.width = `${(audio.currentTime / audio.duration) * 100}%`
    console.log((audio.currentTime / audio.duration) * 100)

    audio.addEventListener("ended", () => {
        nextSong();
    })
})



function playSong() {
    audio.play()
    timeDisplay()
}

function pauseSong() {
    audio.pause()
}

function previousSong() {
    if (currentSongIndex === 0) {
        loadSong(songs.length - 1)
        playSong()
        currentSongIndex = songs.length - 1;
    }
    else {
        currentSongIndex--;
        loadSong(currentSongIndex)
        playSong()
    }
}

function nextSong() {
    if (currentSongIndex === songs.length - 1) {
        loadSong(0)
        playSong()
        currentSongIndex = 0;
    }
    else {
        currentSongIndex++;
        loadSong(currentSongIndex)
        playSong()
    }
}

function timeDisplay() {
    let currentTime = document.querySelector(".currentTime")
    audio.addEventListener('timeupdate', () => {
        console.log("Current Time is: " + `${(audio.currentTime / audio.duration) * 100}`)
        let min = Math.floor(audio.currentTime / 60)
        let sec = Math.floor(audio.currentTime % 60)

        const formattedMins = min.toString().padStart(2, 0);
        const formattedSecs = sec.toString().padStart(2, 0);
        currentTime.innerHTML = `${formattedMins}:${formattedSecs}`


    })

    let duration = document.querySelector(".duration")
    audio.addEventListener('timeupdate', () => {
        let min = Math.floor(audio.duration / 60)
        let sec = Math.floor(audio.duration % 60)

        const formattedMins = min.toString().padStart(2, 0);
        const formattedSecs = sec.toString().padStart(2, 0);
        duration.innerHTML = `${formattedMins}:${formattedSecs}`
    })
}
