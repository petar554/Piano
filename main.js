const keys = document.querySelectorAll('.key');

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    console.log(event);

    audio.play();
    audio.currentTime = 0;
    key.classList.add('play');
}

function removeSound(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('play')
}

/* transitionend event is fired when a CSS transition has completed.*/
keys.forEach(i => i.addEventListener('transitionend', removeSound));
window.addEventListener('keydown', playSound);
