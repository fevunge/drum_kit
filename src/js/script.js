window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('play');

    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
    audio.addEventListener('ended', () => {
        key.classList.remove('play');
    });
});

