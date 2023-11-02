const bt1 = document.querySelector('bt1');

const audio = document.getElementById('audio');

num = 0

const onPlay = () => {
    num += 1
    if (num % 2 === 0) {
        audio.play()
    }

    else if (num % 2 > 0) {
        audio.pause()
    }

}
