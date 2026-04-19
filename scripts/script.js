window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);
});

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

window.addEventListener("load", () => {
    delay(2500).then(() => {
        const modal = new bootstrap.Modal(document.getElementById('newsletterModal'));
        modal.show();
    });
});