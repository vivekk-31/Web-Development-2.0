console.log('Let us begin.');
let audio = new Audio('songs/Tum_Se_Hi_(Jab_We_Met)_320_Kbps.mp3')

let song = document.querySelector('.coverImage')

function playMyusic(){
audio.play()
}

song.addEventListener('click', playMyusic)
