const btnMobile = document.getElementById('sandwich');

function toggleMenu(){
    const navbar = document.getElementById('nav-bar');
    navbar.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);