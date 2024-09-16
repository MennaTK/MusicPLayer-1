
// Songs list
const songs = [
    {
        path: "./media files/Ariana Grande - we can't be friends (wait for your love) (lyric visualizer).mp3",
        displayName: "We Can't Be Friends",
        cover: "https://i.pinimg.com/736x/92/d8/8a/92d88abbe8a2a015e472ff71380ef705.jpg",
        artistName : "Ariana Grande"
    }
    ,
    {
        path: "./media files/James Arthur - Can I Be Him (Lyric Video).mp3",
        displayName: "Can I Be Him",
        cover: "https://i.pinimg.com/736x/b9/48/f0/b948f08f24825bdb4ce46341b035e30d.jpg",
        artistName : "James Arthur"
    }
    ,
    {
        path: "./media files/米津玄師  - Lemon  Kenshi Yonezu.mp3",
        displayName: "Lemon",
        cover: "https://i.pinimg.com/564x/20/da/32/20da32cceee1e48d3e0045064f5e2ade.jpg",
        artistName : "Kenshi Yonezu"
    }
]

// initiate the sond index to zero
let currentSongIndex = 0;


function loadSong(index) {

    const audio = document.getElementById('mediaFile');
    const source = document.getElementById('audioSource');
    const songName = document.getElementById('displayName');
    const artistName = document.getElementById('artistName');
    
    source.src = songs[index].path;
    songName.textContent = songs[index].displayName;
    artistName.textContent = songs[index].artistName;

    // Change the background image of the cover div
    document.getElementById('cover').style.backgroundImage = `url('${songs[index].cover}')`;
    
    // Load and play the new song
    audio.load();
    audio.play();
}

// Function to let the first song play by default
window.onload = function() {
    loadSong(currentSongIndex);
    
};

// Function to go to the next song
function nextSong() {
    // Increment the index, loop back to 0 if reached the end of the list
    if(currentSongIndex < songs.length - 1){
        currentSongIndex = currentSongIndex + 1;
    }else{
        currentSongIndex = 0;
    }

    // Load the next song
    loadSong(currentSongIndex);
}

// Function to go to the previous song
function prevSong() {
    // Decrement the index, loop back if at the index equals zero
    if(currentSongIndex < songs.length && currentSongIndex > 0){
        currentSongIndex = currentSongIndex - 1;
    }else{
        currentSongIndex = songs.length - 1;
    }

    // Load the previous song
    loadSong(currentSongIndex);
}
