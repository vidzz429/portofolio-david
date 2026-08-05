document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (menuToggle && mobileMenu && menuIcon) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.className = 'fa-solid fa-bars text-xl';
            } else {
                menuIcon.className = 'fa-solid fa-xmark text-xl';
            }
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.className = 'fa-solid fa-bars text-xl';
            });
        });
    }

    // 2. WhatsApp Form Dispatcher (Update untuk Joki/Tugas)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Mengambil input nama, jenis tugas, dan isi pesan
            const nameInput = document.getElementById('form-name');
            const taskTypeInput = document.getElementById('form-task-type');
            const messageInput = document.getElementById('form-message');

            const name = nameInput ? nameInput.value.trim() : 'Pengunjung Web';
            const taskType = taskTypeInput ? taskTypeInput.value.trim() : 'Tugas/Project';
            const message = messageInput ? messageInput.value.trim() : '';

            if (!message) {
                alert('Silakan tuliskan isi pesan atau detail tugas Anda.');
                return;
            }

            // Format pesan otomatis ke WhatsApp
            const textMessage = `Halo David, Saya ${name}.%0A*Jenis Kebutuhan:* ${taskType}%0A%0A*Detail Pesan:*%0A${message}`;
            const waUrl = `https://wa.me/6285723780454?text=${textMessage}`;

            // Buka link WhatsApp di tab baru
            window.open(waUrl, '_blank');
        });
    }
});