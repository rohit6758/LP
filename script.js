// Function to handle slide transitions and start music
function nextSlide(slideNumber) {
    // Start music on first interaction (required by browsers)
    const music = document.getElementById('bg-music');
    if (music && music.paused) {
        music.play();
    }
    
    // Hide all slides
    document.querySelectorAll('.life-slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    const activeSlide = document.getElementById('life' + slideNumber);
    if (activeSlide) {
        activeSlide.classList.add('active');
    }
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