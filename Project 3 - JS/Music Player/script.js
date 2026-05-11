console.log('Let us begin.');
let audio = new Audio();
let songs = [{name:"Tum se Hi", file:"songs/Tum_Se_Hi_(Jab_We_Met)_320_Kbps.mp3"},
    {name:"Tune Jo Na Kaha", file:"songs/Tune Jo Na Kaha - Mohit Chauhan.mp3"}
]

var card = document.querySelector(".card");

card.addEventListener("click", ()=>{
    console.log("Song is clicked")

    loadSong(0)
    playSong()
})

function loadSong(index){
    audio.src = songs[index].file;
    audio.load()
}

function playSong(){
    audio.play();
}
