document.addEventListener('DOMContentLoaded', () => {

    const bookButton = document.querySelector('.booking-inputs button');

    bookButton.addEventListener('click', () => {
        alert('Welcome to AOX Cinemas! The booking system will be available soon.');
    });

    console.log("AOX Cinemas header loaded successfully!");
});