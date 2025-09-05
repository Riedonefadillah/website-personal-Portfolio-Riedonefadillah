let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('.fas.fa-bars')
    navbar.classList.toggle('active')
}

const audio = document.getElementById('backsound');
const btn = document.getElementById('soundControl');
const icon = btn.querySelector('.fas.fa-volume-mute');

btn.addEventListener('click',() => {
    audio.muted = !audio.muted;
    if(audio.muted){
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    } else{
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    }
})

// const music = document.getElementById('backsound');
// const startMusic = () => {
//     music.play();
//     document.removeEventListener('click', startMusic);
// };
// document.addEventListener('click', startMusic)