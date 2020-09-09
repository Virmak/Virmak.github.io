document.addEventListener('DOMContentLoaded', () => {

    const typewriterElements = document.querySelectorAll('.typewriter');

    for (const element of typewriterElements) {
        const elementText = element.innerHTML;
        element.innerHTML = '';
        element.style.display = 'block';
        typeWrite(element, elementText, 0);
    }

    
    const cursor = document.querySelector('.cursor');
    toggleCursor(cursor)

});

function typeWrite(element, text, position) {
    if (position < text.length - 1) {
        Math.random()
        setTimeout(() => typeWrite(element, text, position + 1), Math.floor(Math.random() * 30) + 10  )
    }
    element.innerHTML += text[position];
}

function toggleCursor(cursor) {
    if (cursor.style.opacity == 1) {
        cursor.style.opacity = 0;
    } else {
        cursor.style.opacity = 1;
    }
    setTimeout(() => toggleCursor(cursor), 500)
}
