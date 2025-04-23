
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
        key.classList.remove('play');
    });
});

const ruler = document.querySelector('.time');
function runRuler(){
	const timeNow = new Date();
	const hours = String(timeNow.getHours()).padStart(2, 0)
	const minutes = String(timeNow.getMinutes()).padStart(2, 0)
	const seconds = String(timeNow.getSeconds()).padStart(2, 0)
	ruler.textContent = `${hours}:${minutes}:${seconds}`
}

runRuler();
setInterval(runRuler, 1000);

