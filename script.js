// Функция для открытия модального окна
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Закрытие модальных окон при клике вне окна
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
