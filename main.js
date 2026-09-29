function showPage(page) {
    const pages = document.querySelectorAll(".content");

    pages.forEach(content => {
        content.style.display = "none";
    });

    document.getElementById(page).style.display = "block";
}

showPage("home");