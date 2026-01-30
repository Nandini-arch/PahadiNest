document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    const bookingConfirmation = document.getElementById('booking-confirmation');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const checkIn = document.getElementById('check-in').value;
            const checkOut = document.getElementById('check-out').value;

            if (name && email && checkIn && checkOut) {
                // Hide the form
                bookingForm.classList.add('hidden');

                // Show the confirmation message
                bookingConfirmation.classList.remove('hidden');

                // Simulate a delay and then reset the form
                setTimeout(() => {
                    bookingForm.reset();
                    bookingForm.classList.remove('hidden');
                    bookingConfirmation.classList.add('hidden');
                }, 5000); // 5 seconds
            } else {
                alert('Please fill out all the required fields.');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
