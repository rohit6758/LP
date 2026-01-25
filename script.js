// Function to handle slide transitions and start music
function nextSlide(slideNumber) {
    const music = document.getElementById('bg-music');
    
    // This part forces the music to play as soon as she taps the screen
    if (music) {
        music.play().catch(error => {
            console.log("Autoplay prevented, waiting for interaction.");
        });
    }

    document.querySelectorAll('.life-slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    document.getElementById('life' + slideNumber).classList.add('active');
}
// Function to Mute/Unmute
function toggleMute() {
    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('mute-btn');
    
    if (audio.muted) {
        audio.muted = false;
        btn.innerHTML = "🔊";
    } else {
        audio.muted = true;
        btn.innerHTML = "🔇";
    }
}

// Letter Modal Logic
function openLetter() {
    document.getElementById('letter-modal').style.display = 'flex';
}

function closeLetter() {
    document.getElementById('letter-modal').style.display = 'none';
}