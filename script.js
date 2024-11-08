// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        alert('Message sent! Thank you for reaching out.');
    });
});