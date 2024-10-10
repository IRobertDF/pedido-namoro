const noButton = document.getElementById('no');

noButton.addEventListener('click', () => {
    // Mover o botão "Não" para uma nova posição aleatória
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

document.getElementById('yes').addEventListener('click', () => {
    alert('Uhul! Fiquei muito feliz! ❤️');
});
