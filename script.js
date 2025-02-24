let currentPage = 1;
const pages = document.querySelectorAll('.page');

function showPage(pageNumber) {
    // Reset all pages to be invisible
    pages.forEach(page => page.style.transform = 'translateY(100vh)');
    
    // Show the selected page
    pages[pageNumber - 1].style.transform = 'translateY(0)';
}

// You can also call showPage(1) to load the first page by default if desired.
showPage(1);
