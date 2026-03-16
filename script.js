let player;

// This function is required by the YouTube API to initialize the player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'kw4tT7SCmaY', // The ID for Afreen Afreen
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': 'kw4tT7SCmaY'
        }
    });
}

function transitionTo(sectionId) {
    const popup = document.getElementById('popup');
    const targetSection = document.getElementById(sectionId);
    const music = document.getElementById('bday-music');

    if (!targetSection) return;

    // Play the song!
    if (music) {
        music.play().catch(error => {
            console.log("Music play failed:", error);
        });
    }

    // Fade out effect
    popup.style.transition = "opacity 0.5s ease";
    popup.style.opacity = "0";

    setTimeout(() => {
        popup.style.display = 'none';
        targetSection.classList.remove('hidden');
        targetSection.style.display = 'block';
        targetSection.style.opacity = '1';
        window.scrollTo(0, 0);
    }, 500);
}

function revealMessage() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#87ceeb', '#ffffff', '#ff85a2']
        });
    }
    transitionTo('message-page');
}

function customAction() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
    transitionTo('second-message-page');
}

function goBack() {
    location.reload();
}
function revealMessage() {
    // Confetti effect
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#87ceeb', '#ffffff', '#ff85a2']
        });
    }
    transitionTo('message-page');
}

function customAction() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
    transitionTo('second-message-page');
}

function goBack() {
    location.reload();
}