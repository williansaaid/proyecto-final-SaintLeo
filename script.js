const btnTheme = document.getElementById('btnTheme');
const body = document.documentElement;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    btnTheme.textContent = 'Modo Claro';
}

btnTheme.addEventListener('click', () => {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        btnTheme.textContent = 'Modo Oscuro';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        btnTheme.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark');
    }
});

const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const greetingElement = document.getElementById('greetingMessage');
if (greetingElement) {
    const hour = new Date().getHours();
    let greeting = '';

    if (hour < 12) {
        greeting = '¡Buenos días! Este es el Proyecto Final de la asignatura de Diseño web y recs informático COM-333ES-AVOL1.';
    } else if (hour < 18) {
        greeting = '¡Buenas tardes! Este es el Proyecto Final de la asignatura de Diseño web y recs informático COM-333ES-AVOL1.';
    } else {
        greeting = '¡Buenas noches! Este es el Proyecto Final de la asignatura de Diseño web y recs informático COM-333ES-AVOL1.';
    }
    greetingElement.textContent = greeting;
}

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});