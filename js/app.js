let title, arrow, paragraph;

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        handleAccordionClick(accordion);
    });
});

function handleAccordionClick(accordion) {
    toggleClasses(title, arrow, paragraph);
    
    title = getTitle(accordion);
    arrow = getArrow(title);
    paragraph = getParagraph(accordion);

    toggleClasses(title, arrow, paragraph);
}

function getTitle(accordion) {
    return accordion.querySelector('.subTitulo') || accordion;
}

function getArrow(title) {
    return title.querySelector('.arrow');
}

function getParagraph(accordion) {
    return accordion.querySelector('.parrafo');
}

function toggleClasses(title, arrow, paragraph) {
    if (title && arrow && paragraph) {
        title.classList.toggle('tituloColor');
        arrow.classList.toggle('arrowRotary');
        paragraph.classList.toggle('parrafoMostrar');
    }
}

