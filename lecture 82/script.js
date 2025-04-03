// Sample song data with real album covers and preview URLs
const songs = [
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
        audio: "https://p.scdn.co/mp3-preview/c3e8d727ea9655c26e3c16093979bfbc3b858968"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        image: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
        audio: "https://p.scdn.co/mp3-preview/84462d8e1e4d0f9e5ccd06f0da390f65843774a2"
    },
    {
        title: "Bad Guy",
        artist: "Billie Eilish",
        image: "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e",
        audio: "https://p.scdn.co/mp3-preview/6cca52f01e382c1df62a5720f3a391ce4c135d39"
    },
    {
        title: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        image: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431",
        audio: "https://p.scdn.co/mp3-preview/8c98f33b4a16e3d1002d4ce0bdd60cae3f6e0eee"
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        image: "https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946",
        audio: "https://p.scdn.co/mp3-preview/a690531c5ed2c2f8b6d645a93b24c67497e578e6"
    },
    {
        title: "As It Was",
        artist: "Harry Styles",
        image: "https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14"
    },
    {
        title: "Starboy",
        artist: "The Weeknd, Daft Punk",
        image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"
    },
    {
        title: "Shivers",
        artist: "Ed Sheeran",
        image: "https://i.scdn.co/image/ab67616d0000b273ef24c3fdbf856340d55cfeb2"
    },
    {
        title: "Heat Waves",
        artist: "Glass Animals",
        image: "https://i.scdn.co/image/ab67616d0000b2739e495fb707973f3390850eea"
    },
    {
        title: "Anti-Hero",
        artist: "Taylor Swift",
        image: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5"
    }
];

let currentlyPlaying = null;

function createSongCard(song, index) {
    return `
        <div class="song-card" onclick="playSong(${index})">
            <div class="song-image-container">
                <img src="${song.image}" alt="${song.title}" class="song-image">
                <div class="play-icon">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
            <audio id="audio-${index}" src="${song.audio}"></audio>
        </div>
    `;
}

function playSong(index) {
    const audio = document.getElementById(`audio-${index}`);
    
    // If there's a song currently playing, stop it
    if (currentlyPlaying && currentlyPlaying !== audio) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
        const allCards = document.querySelectorAll('.song-card');
        allCards.forEach(card => card.classList.remove('playing'));
    }

    // Toggle play/pause for clicked song
    if (audio.paused) {
        audio.play();
        currentlyPlaying = audio;
        audio.parentElement.classList.add('playing');
    } else {
        audio.pause();
        audio.currentTime = 0;
        currentlyPlaying = null;
        audio.parentElement.classList.remove('playing');
    }
}

function renderSongs() {
    const container = document.getElementById('songsContainer');
    container.innerHTML = songs.map((song, index) => createSongCard(song, index)).join('');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', renderSongs);