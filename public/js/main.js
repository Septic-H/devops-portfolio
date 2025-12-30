// Project card spotlight
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        card.style.setProperty('--spotlight-color', 'rgba(0, 76, 84, 0.25)');
    });
});

// Profile card tilt effect
const profileWrapper = document.querySelector('.profile-card-wrapper');
if (profileWrapper) {
    const card = profileWrapper.querySelector('.profile-card');
    
    profileWrapper.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const width = rect.width;
        const height = rect.height;
        
        const percentX = (x / width) * 100;
        const percentY = (y / height) * 100;
        const centerX = percentX - 50;
        const centerY = percentY - 50;
        
        profileWrapper.style.setProperty('--pointer-x', `${percentX}%`);
        profileWrapper.style.setProperty('--pointer-y', `${percentY}%`);
        profileWrapper.style.setProperty('--pointer-from-center', Math.min(Math.hypot(centerX, centerY) / 50, 1));
        profileWrapper.style.setProperty('--pointer-from-left', percentX / 100);
        profileWrapper.style.setProperty('--pointer-from-top', percentY / 100);
        profileWrapper.style.setProperty('--rotate-x', `${-(centerX / 8)}deg`);
        profileWrapper.style.setProperty('--rotate-y', `${centerY / 8}deg`);
        profileWrapper.style.setProperty('--card-opacity', '1');
    });

    profileWrapper.addEventListener('mouseleave', () => {
        profileWrapper.style.setProperty('--rotate-x', '0deg');
        profileWrapper.style.setProperty('--rotate-y', '0deg');
        profileWrapper.style.setProperty('--pointer-x', '50%');
        profileWrapper.style.setProperty('--pointer-y', '50%');
        profileWrapper.style.setProperty('--card-opacity', '0');
    });
}
