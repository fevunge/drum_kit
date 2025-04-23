
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('play');
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e) => {
        const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('play');
    });
});

keys.forEach(key => {
    key.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'transform') return;
        console.log(e.propertyName);
        key.classList.remove('play');
    });
});
