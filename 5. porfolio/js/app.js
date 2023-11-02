// const audio = document.querySelector('.audio'),
// button = document.querySelector('.buttonisplay'),
// nav_button = document.querySelector('nav_button')

// let num = 0;

// function play () {
//     button.src = "pause.svg"
//     audio.play()
// }
// function pause () {
//     button.src = "play.svg"
//     audio.play()
// }
// nav_button.addEventListener("click", () => {
//     num++;
//     if (num%2 !== 0 ){
//         play()
//     }
//     else if (num%2 === 0) {
//         pause()
//     }

// })
const bt1 = document.querySelector('bt1');
const bt2 = document.querySelector('bt2');
const bt3 = document.querySelector('bt3');
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

const revimg1 = () => {
    const bt1 = document.getElementsByClassName('bt1')
    bt1.src = './img/pause.svg'
}