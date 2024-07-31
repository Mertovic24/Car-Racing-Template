document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.querySelector('.game-area');
    const car = document.querySelector('.car');
    let carLeft = 50;
    let roadSpeed = 5;

    function moveCar(e) {
        if (e.key === 'ArrowLeft' && carLeft > 0) {
            carLeft -= 10;
        } else if (e.key === 'ArrowRight' && carLeft < 100) {
            carLeft += 10;
        }
        car.style.left = carLeft + '%';
    }

    document.addEventListener('keydown', moveCar);

    function moveRoad() {
        const road = document.querySelector('.road');
        let roadY = parseInt(window.getComputedStyle(road).getPropertyValue('top'));
        roadY += roadSpeed;
        if (roadY > 500) {
            roadY = -500;
        }
        road.style.top = roadY + 'px';
    }

    setInterval(moveRoad, 20);
});
