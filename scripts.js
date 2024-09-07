document.getElementById('products-tab').addEventListener('click', () => {
    showSection('product-section');
});

document.getElementById('cart-tab').addEventListener('click', () => {
    showSection('cart-section');
});

document.getElementById('contact-tab').addEventListener('click', () => {
    showSection('contact-section');
});

document.getElementById('home-tab').addEventListener('click', () => {
    showSection('home-section');
});

// Show a section and hide others with animations
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        if (section.id === sectionId) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Simulate adding items to cart
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        let cartCount = parseInt(document.getElementById('cart-count').textContent);
        document.getElementById('cart-count').textContent = cartCount + 1;
        alert('Item added to cart!');
    });
});
