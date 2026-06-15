// ===== Main JavaScript =====

// Sample Product Data with real shoe images
const products = [
    { id: 1, name: "Nike Air Max 270", category: "Men", brand: "Nike", price: 150, oldPrice: 180, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", rating: 4.5, reviews: 128, badge: "Trending", sizes: [7, 8, 9, 10, 11], colors: ["#000000", "#ffffff", "#FF6B35"] },
    { id: 2, name: "Adidas Ultraboost 22", category: "Men", brand: "Adidas", price: 190, oldPrice: 220, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop", rating: 4.8, reviews: 256, badge: "New", sizes: [7, 8, 9, 10, 11, 12], colors: ["#000000", "#004E89", "#ffffff"] },
    { id: 3, name: "Puma RS-X Reinvention", category: "Women", brand: "Puma", price: 110, oldPrice: 140, image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop", rating: 4.3, reviews: 89, badge: "Sale", sizes: [5, 6, 7, 8, 9], colors: ["#6f42c1", "#ffffff", "#000000"] },
    { id: 4, name: "New Balance 574", category: "Women", brand: "New Balance", price: 85, oldPrice: 100, image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop", rating: 4.6, reviews: 167, badge: "", sizes: [5, 6, 7, 8, 9, 10], colors: ["#28a745", "#6c757d", "#000000"] },
    { id: 5, name: "Nike Air Force 1", category: "Kids", brand: "Nike", price: 95, oldPrice: 110, image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop", rating: 4.7, reviews: 312, badge: "Popular", sizes: [3, 4, 5, 6], colors: ["#ffffff", "#000000", "#FF6B35"] },
    { id: 6, name: "Adidas Stan Smith", category: "Casual", brand: "Adidas", price: 80, oldPrice: 95, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop", rating: 4.4, reviews: 198, badge: "", sizes: [7, 8, 9, 10, 11], colors: ["#ffffff", "#28a745"] },
    { id: 7, name: "Nike Pegasus 39", category: "Sports", brand: "Nike", price: 130, oldPrice: 160, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", rating: 4.6, reviews: 145, badge: "New", sizes: [7, 8, 9, 10, 11], colors: ["#004E89", "#FF6B35", "#000000"] },
    { id: 8, name: "Clarks Oxford", category: "Formal", brand: "Clarks", price: 120, oldPrice: 150, image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=400&fit=crop", rating: 4.2, reviews: 76, badge: "Sale", sizes: [7, 8, 9, 10, 11, 12], colors: ["#000000", "#5c3d2e"] }
];

// ===== Cart Functionality =====
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartBadge();
    }

    addItem(product, quantity = 1, size = '', color = '') {
        const existingItem = this.items.find(item => 
            item.id === product.id && item.size === size && item.color === color
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
                size: size,
                color: color
            });
        }

        this.save();
        this.updateCartBadge();
        this.showToast(`${product.name} added to cart!`);
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.save();
        this.updateCartBadge();
    }

    updateQuantity(index, quantity) {
        if (quantity <= 0) {
            this.removeItem(index);
        } else {
            this.items[index].quantity = quantity;
            this.save();
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    clear() {
        this.items = [];
        this.save();
        this.updateCartBadge();
    }

    updateCartBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        const count = this.getItemCount();
        badges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    showToast(message) {
        const toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast show align-items-center text-white bg-success border-0';
        toast.setAttribute('role', 'alert');
        toast.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    <i class="fas fa-check-circle me-2"></i>${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Initialize cart
const cart = new ShoppingCart();

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
});

// Back to top click
document.addEventListener('click', (e) => {
    if (e.target.closest('.back-to-top')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ===== Add to Cart from Product Cards =====
document.addEventListener('click', (e) => {
    if (e.target.closest('.add-to-cart-btn')) {
        const btn = e.target.closest('.add-to-cart-btn');
        const productId = parseInt(btn.dataset.productId);
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.addItem(product);
            btn.innerHTML = '<i class="fas fa-check me-1"></i> Added!';
            btn.style.background = '#28a745';
            btn.style.color = '#fff';
            btn.style.borderColor = '#28a745';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-shopping-cart me-1"></i> Add to Cart';
                btn.style.background = '';
                btn.style.color = '';
                btn.style.borderColor = '';
            }, 2000);
        }
    }
});

// ===== Render Products Grid =====
function renderProducts(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = productList.map(product => `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="product-card">
                <div class="product-img">
                    <a href="product-detail.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}">
                    </a>
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <div class="product-actions">
                        <button class="action-btn" title="Wishlist"><i class="fas fa-heart"></i></button>
                        <button class="action-btn" title="Quick View"><i class="fas fa-eye"></i></button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h6 class="product-name"><a href="product-detail.html?id=${product.id}">${product.name}</a></h6>
                    <div class="product-rating">
                        ${generateStars(product.rating)}
                        <span>(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        $${product.price}
                        ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ''}
                    </div>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        <i class="fas fa-shopping-cart me-1"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - rating < 1) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// ===== Cart Page Rendering =====
function renderCartPage() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummaryContainer = document.getElementById('cart-summary');
    const emptyCart = document.getElementById('empty-cart');

    if (!cartItemsContainer) return;

    if (cart.items.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        if (cartSummaryContainer) cartSummaryContainer.style.display = 'none';
        return;
    }

    if (emptyCart) emptyCart.style.display = 'none';
    if (cartSummaryContainer) cartSummaryContainer.style.display = 'block';

    cartItemsContainer.innerHTML = cart.items.map((item, index) => `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-md-2 col-3">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                </div>
                <div class="col-md-4 col-9">
                    <h6 class="mb-1">${item.name}</h6>
                    <small class="text-muted">${item.size ? 'Size: ' + item.size : ''}</small>
                </div>
                <div class="col-md-3 col-6 mt-2 mt-md-0">
                    <div class="quantity-control">
                        <button onclick="updateCartQty(${index}, ${item.quantity - 1})">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button onclick="updateCartQty(${index}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <div class="col-md-2 col-3 mt-2 mt-md-0">
                    <strong class="text-primary">$${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
                <div class="col-md-1 col-3 mt-2 mt-md-0 text-end">
                    <button class="btn btn-sm btn-outline-danger" onclick="removeCartItem(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Update summary
    const subtotal = cart.getTotal();
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

function updateCartQty(index, quantity) {
    cart.updateQuantity(index, quantity);
    renderCartPage();
}

function removeCartItem(index) {
    cart.removeItem(index);
    renderCartPage();
}

// ===== Checkout Functionality =====
function renderCheckoutSummary() {
    const container = document.getElementById('checkout-items');
    if (!container) return;

    container.innerHTML = cart.items.map(item => `
        <div class="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
            <div class="d-flex align-items-center">
                <img src="${item.image}" alt="${item.name}" style="width:50px;height:50px;object-fit:cover;border-radius:8px" class="me-3">
                <div>
                    <h6 class="mb-0 fs-6">${item.name}</h6>
                    <small class="text-muted">Qty: ${item.quantity}</small>
                </div>
            </div>
            <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
        </div>
    `).join('');

    const subtotal = cart.getTotal();
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkout-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
}

// ===== Form Validation =====
function initCheckoutForm() {
    const form = document.getElementById('checkout-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        // Generate order number
        const orderNumber = 'ORD-' + Date.now().toString().slice(-8);
        localStorage.setItem('lastOrder', orderNumber);
        cart.clear();
        window.location.href = 'order-confirmation.html';
    });
}

// ===== Product Detail Page =====
function initProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = products.find(p => p.id === productId) || products[0];

    // Update page content
    const titleEl = document.getElementById('detail-product-name');
    if (titleEl) titleEl.textContent = product.name;

    const priceEl = document.getElementById('detail-product-price');
    if (priceEl) priceEl.innerHTML = `$${product.price} ${product.oldPrice ? `<span class="old-price" style="font-size:1.2rem;color:#6c757d;text-decoration:line-through;font-weight:400">$${product.oldPrice}</span>` : ''}`;

    const mainImg = document.getElementById('detail-main-img');
    if (mainImg) mainImg.src = product.image;

    const ratingEl = document.getElementById('detail-rating');
    if (ratingEl) ratingEl.innerHTML = `${generateStars(product.rating)} <span class="ms-2 text-muted">(${product.reviews} reviews)</span>`;

    // Add to cart button
    const addBtn = document.getElementById('detail-add-to-cart');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const sizeBtn = document.querySelector('.size-btn.active');
            const size = sizeBtn ? sizeBtn.textContent : '';
            cart.addItem(product, 1, size);
        });
    }

    // Size selector
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Color selector
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Quantity controls
    const qtyInput = document.getElementById('detail-qty');
    if (qtyInput) {
        document.getElementById('qty-minus')?.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if (val > 1) qtyInput.value = val - 1;
        });
        document.getElementById('qty-plus')?.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            qtyInput.value = val + 1;
        });
    }
}

// ===== Thumbnail Gallery =====
document.addEventListener('click', (e) => {
    if (e.target.closest('.thumbnails img')) {
        const thumb = e.target.closest('.thumbnails img');
        const mainImg = document.getElementById('detail-main-img');
        if (mainImg) {
            mainImg.src = thumb.src;
            document.querySelectorAll('.thumbnails img').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        }
    }
});

// ===== Initialize Page Functions =====
document.addEventListener('DOMContentLoaded', () => {
    // Load shared footer
    loadFooter();

    // Render trending products on homepage
    renderProducts('trending-products', products);
    
    // Render all products on products page
    renderProducts('all-products', products);

    // Cart page
    renderCartPage();

    // Checkout page
    renderCheckoutSummary();
    initCheckoutForm();

    // Product detail page
    initProductDetail();

    // Order confirmation
    const orderNumEl = document.getElementById('order-number');
    if (orderNumEl) {
        orderNumEl.textContent = localStorage.getItem('lastOrder') || 'ORD-00000001';
    }
});

// ===== Load Footer =====
function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            placeholder.outerHTML = html;
        })
        .catch(() => {
            // Fallback if fetch fails
            placeholder.innerHTML = '<footer class="footer"><div class="container"><div class="footer-bottom text-center"><p class="mb-0">&copy; 2026 Mr-Software. All rights reserved.</p></div></div></footer>';
        });
}
