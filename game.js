let player = document.querySelector('.player');
let obstacle = document.querySelector('.obstacle');
let refreshBtn = document.querySelector('.refresh');
let score = document.querySelector('.score');
score.innerHTML = 0;

function jumpFunction() {
    if (player.classList != 'jumpAnimation') {
        player.classList.add('jumpAnimation');
        score.innerHTML++;
        
    }
    setTimeout(() => {
        player.classList.remove('jumpAnimation');
    }, 600);
}

document.body.addEventListener('keydown', (event) => {
    if (event.key == ' ') {
        jumpFunction();
    }
}
)
let isDead = setInterval(function() {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if (obstacleLeft < 20 && obstacleLeft > 0 && playerTop >= 130) {
        score = 0;
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none';
        alert(`Przegrałeś! Kliknij F5 aby spróbować ponownie.`, document.addEventListener('click', () => {window.location.reload()}));
    }
}, 10);

refreshBtn.addEventListener('click', () => {
    window.location.reload();
});