// navbar data
fetch('./components/navbar.html')
.then(response => response.text())
.then(data => {
  document.querySelector('#header-container').innerHTML = data;
});

// get scrollbar data
const row = document.getElementById('category-row');

fetch('./datas/scrollbar.json')
.then(response => response.json())
.then(data => {

    data.forEach(category => {

        const card = document.createElement('div');

        card.classList.add(
            'category-item',
            'text-center'
        );

        card.innerHTML = `
            <div class="category-image-placeholder">
                <img src="${category.image}" alt="${category.name}">
            </div>

            <h6 class="mt-3 mb-1 category-name">
                ${category.name}
            </h6>

            <small class="text-muted item-count">
                ${category.items}+ items
            </small>
        `;

        row.appendChild(card);

    });

});

// loading animation
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);
});

// pop up modal window
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