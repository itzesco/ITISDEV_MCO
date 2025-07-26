document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuButton.querySelector('i');
    let isOpen = false;

    function openMenu() {
        mobileMenu.style.visibility = 'visible';
        mobileMenu.style.height = mobileMenu.scrollHeight + 'px';
        mobileMenu.style.opacity = '1';
        menuIcon.className = 'fas fa-times text-xl';
        isOpen = true;
    }

    function closeMenu() {
        mobileMenu.style.height = '0';
        mobileMenu.style.opacity = '0';
        menuIcon.className = 'fas fa-bars text-xl';
        isOpen = false;
        setTimeout(() => {
            if (!isOpen) {
                mobileMenu.style.visibility = 'hidden';
            }
        }, 300);
    }

    mobileMenuButton.addEventListener('click', function () {
        isOpen ? closeMenu() : openMenu();
    });

    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (event) {
        if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            if (isOpen) closeMenu();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});