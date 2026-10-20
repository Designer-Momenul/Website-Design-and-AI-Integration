
/*=============== SHOW MENU ===============*/
// Grab the hamburger icon and menu list elements from the DOM
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle the active classes on click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Optional: Close mobile menu automatically when clicking any link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

//   PORTFOLIO DESIGN 

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update Active Class status on buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    // Reveal matching items
                    card.classList.remove('hidden');
                    // Small delay to trigger a smooth entry animation
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Fade out and collapse non-matching items
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    card.classList.add('hidden');
                }
            });
        });
    });
});


