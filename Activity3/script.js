
document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".navigation a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            links.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

});