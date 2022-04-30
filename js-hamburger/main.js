                // --- TASK --- \\
// Mostrare / nascondere il menu principale.
                // - SOLUTION - \\
// 1. Quando clicco sull'icona dell'hamburger menù, viene mostrato il menù nascosto;

// 1.1 richiamo gli elementi interessati attraverso id e li salvo (dichiaro?) in alcune variabili;
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const hamburgerMenu = document.getElementById("hamburger-menu");

// 1.2 imposto la variabile "in ascolto" in attesa dell'evento "click";
openMenu.addEventListener("click",
    function() {
        // 1.3 all'evento "click", cambio la proprietà CSS 'display' dell'elemento da mostrare dandogli valore 'block', rendendolo visibile;
        hamburgerMenu.style.display = "block";
    }
);


// 2. quando clicco sull'icona X nel menù nascosto (ora visibile), lo stesso viene di nuovo occultato.

// 2.1 imposto la variabile "in ascolto" in attesa dell'evento "click";
closeMenu.addEventListener("click",
    function() {
        // 2.2 all'evento "click", cambio la proprietà CSS 'display' dell'elemento da occultare dandogli valore 'none', rendendolo invisibile;
        hamburgerMenu.style.display = "none";
    }
);