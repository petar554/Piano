function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    audio.play();
    audio.currentTime = 0;
    key.classList.add('play');
}


window.addEventListener('keydown', playSound);
