function flipPages(selectedPage) {
    let pages = Array.from(document.querySelectorAll('.page')).reverse(); // Reverse to flip top pages first
    let index = pages.indexOf(selectedPage);

    pages.forEach((page, i) => {
        if (i <= index) {
            page.classList.add('flipped');
        } else {
            page.classList.remove('flipped');
        }
    });
}
