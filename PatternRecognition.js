document.addEventListener("DOMContentLoaded", () => {
    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark');

        const isDarkMode = body.classList.contains('dark');
        document.cookie = `darkMode=${isDarkMode};`
    }

    window.addEventListener('load', () => {
        const cookie = document.cookie;
        if (cookie.includes('darkMode=true')) {
        document.body.classList.add('dark');
        }
    });

    document.querySelector(".btn").addEventListener('click', () => {
        document.getElementById('dark-mode-icon').toggleDarkMode(); // doesn't work
    })
})