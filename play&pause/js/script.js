const playPauseBtn = document.querySelector('.play-pause-btn')
const videoPlayBtn = document.querySelector('.main-container')

playPauseBtn.addEventListener('click' , (even) =>{
    const blueBtn = playPauseBtn.lastElementChild
    const btn = videoPlayBtn.firstElementChild
    if(blueBtn.classList.toggle('playAndPause')) return btn.play()
    btn.pause();
})
