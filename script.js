// Открытие модальных окон
const modalBtns = document.querySelectorAll('.modal-btn');
modalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block'; // Показываем модальное окно
    });
});

// Закрытие модальных окан
const closeBtns = document.querySelectorAll('.close-btn');
closeBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-close');
        document.getElementById(modalId).style.display = 'none'; // Закрываем модальное окно
    });
});

// Закрытие модального окна, если кликнуть вне его
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
