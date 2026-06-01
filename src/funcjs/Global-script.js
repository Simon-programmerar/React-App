import $ from 'jquery'

// Förstoring av länkar i navigationen
export function funcGlobal(){
    const nav = document.querySelectorAll('.nav ul li a');

    nav.forEach(link => {   
        link.addEventListener('mouseover', () => {
            link.style.fontWeight = "bolder"
            link.style.transform = 'scale(1.15)'
            link.style.transition = '0.2s ease'
        })
        link.addEventListener('mouseout', () => {
            link.style.fontWeight = "bold"
            link.style.transform = 'scale(1)'
            link.style.transition = '0.2s ease'
        })
    })
} 

// Fungerande sökfunktion

const searchTerm = [
    { keywords: ['start', 'vargen', 'hem', 'evenemang', 'nyheter', 'upplev vargen'], webpage: './' },
    { keywords: ['restaurang', 'äta', 'meny', 'lunch', 'middag'], webpage: './Restaurang' },
    { keywords: ['bokning', 'boka', 'boende', 'skidor', 'liftpass', 'liftkort', 'sova'], webpage: './Bokning' },
    { keywords: ['allservice', 'snickeri', 'skottning', 'underhåll', 'stuga', 'skoter', 'konsultation'], webpage: './Allservice' },
    { keywords: ['om oss', 'om', 'about', 'vargen', 'fjällanläggning', 'vemdalen', 'uppleva'], webpage: './Om-oss' },
]

export function searchOnEnter(event) {
    if (event.key === "Enter") {
        filterLinks(event);
    }
}
    
function filterLinks(event) {
    const searchInput = event.target.value.toLowerCase().trim();
    searchForWebpage(searchInput);
}

function goToWebpage(webpage) {
    window.location.href = webpage;

}

function searchForWebpage(searchInput) {
    for (let i = 0; i < searchTerm.length; i++) {
        const currentPage = searchTerm[i];

        for (let j = 0; j < currentPage.keywords.length; j++) {
            const keyword = currentPage.keywords[j];
            
            if (keyword.includes(searchInput)) {
                goToWebpage(currentPage.webpage);
                return;
            }
        }
    }
}

$(document).ready(function(){
    $(document).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#expand-up').fadeIn(); 
        } else {
            $('#expand-up').fadeOut();
    }
    });

    $('#expand-up').click(function () {
        $('html, body').animate({scrollTop: 0}, 600)
    });
});


