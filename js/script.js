const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.cloud')

const jump = () =>{
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 800)
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudPosition = +window.getComputedStyle(cloud).right.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom= `${marioPosition}px`;

        mario.src= './media/over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        cloud.style.animation = 'none';
        cloud.style.right = `${cloudPosition}px`;

        clearInterval(loop);
    }
    } ,10)

document.addEventListener('keydown', jump);