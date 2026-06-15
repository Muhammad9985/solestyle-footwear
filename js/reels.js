// ===== Reels JavaScript =====

const reelProducts = [
    {
        id: 1,
        name: "Nike Air Max 270",
        desc: "Experience ultimate comfort with the Air Max 270. Featuring the tallest Air unit yet for a super soft ride.",
        price: 150,
        oldPrice: 180,
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=900&fit=crop",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=900&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=900&fit=crop"
        ],
        likes: 1243,
        shares: 89
    },
    {
        id: 2,
        name: "Adidas Ultraboost 22",
        desc: "Run with incredible energy return. Ultraboost delivers the ultimate in responsive cushioning.",
        price: 190,
        oldPrice: 220,
        images: [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=900&fit=crop",
            "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=900&fit=crop"
        ],
        likes: 2156,
        shares: 156
    },
    {
        id: 3,
        name: "Puma RS-X Reinvention",
        desc: "Bold. Loud. The RS-X Reinvention takes street style to the next level with chunky proportions.",
        price: 110,
        oldPrice: 140,
        images: [
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=900&fit=crop",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=900&fit=crop",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=900&fit=crop"
        ],
        likes: 876,
        shares: 45
    },
    {
        id: 4,
        name: "New Balance 574",
        desc: "The iconic 574 silhouette. Classic suede and mesh upper with ENCAP midsole technology.",
        price: 85,
        oldPrice: 100,
        images: [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=900&fit=crop",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=900&fit=crop"
        ],
        likes: 1567,
        shares: 112
    },
    {
        id: 5,
        name: "Nike Air Force 1",
        desc: "The radiance lives on in the AF1. Clean, classic, and endlessly fresh since 1982.",
        price: 95,
        oldPrice: 110,
        images: [
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=900&fit=crop",
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=900&fit=crop",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=900&fit=crop"
        ],
        likes: 3421,
        shares: 267
    },
    {
        id: 6,
        name: "Jordan Retro 4",
        desc: "The legend continues. Retro styling meets modern comfort in this timeless silhouette.",
        price: 200,
        oldPrice: 250,
        images: [
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=900&fit=crop",
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=900&fit=crop"
        ],
        likes: 4532,
        shares: 389
    }
];

// ===== Initialize Reels =====
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.reels-container');
    if (!container) return;

    // Render reels
    container.innerHTML = reelProducts.map((product, index) => `
        <div class="reel-item" data-index="${index}">
            <div class="reel-image-slider" data-reel-index="${index}">
                <div class="reel-slider-track">
                    ${product.images.map((img, imgIdx) => `
                        <div class="reel-slide ${imgIdx === 0 ? 'active' : ''}">
                            <img src="${img}" alt="${product.name}" class="reel-bg">
                        </div>
                    `).join('')}
                </div>
            </div>
            ${product.images.length > 1 ? `
                <button class="reel-slider-arrow reel-slider-prev" onclick="slideReelImage(${index}, -1)"><i class="fas fa-chevron-left"></i></button>
                <button class="reel-slider-arrow reel-slider-next" onclick="slideReelImage(${index}, 1)"><i class="fas fa-chevron-right"></i></button>
                <div class="reel-slider-dots">
                    ${product.images.map((_, imgIdx) => `<span class="reel-dot ${imgIdx === 0 ? 'active' : ''}" onclick="goToReelSlide(${index}, ${imgIdx})"></span>`).join('')}
                </div>
            ` : ''}
            
            <div class="reel-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-price">
                    $${product.price}
                    <span class="old-price">$${product.oldPrice}</span>
                </div>
                <a href="product-detail.html?id=${product.id}" class="shop-now-btn">
                    <i class="fas fa-shopping-bag me-2"></i>Shop Now
                </a>
            </div>

            <div class="reel-actions">
                <div class="action-item" onclick="shareReel(${index})">
                    <div class="action-icon">
                        <i class="fas fa-share"></i>
                    </div>
                    <span class="action-count">${formatCount(product.shares)}</span>
                </div>
                <div class="action-item" onclick="addToCartFromReel(${product.id})">
                    <div class="action-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <span class="action-count">Buy</span>
                </div>
            </div>
        </div>
    `).join('');

    // Init touch swipe for image sliders
    initImageSliderSwipe();

    // Create progress dots
    createProgressDots();

    // Initialize scroll listener
    initScrollListener();

    // Hide loading screen
    setTimeout(() => {
        const loading = document.querySelector('.reel-loading');
        if (loading) loading.classList.add('hidden');
        
        // Apply correct mobile height after render
        if (typeof setVH === 'function') setVH();
    }, 1000);

    // Hide swipe indicator after first scroll
    container.addEventListener('scroll', () => {
        const indicator = document.querySelector('.swipe-indicator');
        if (indicator) indicator.style.opacity = '0';
    }, { once: true });
});

// ===== Progress Dots =====
function createProgressDots() {
    const progressContainer = document.querySelector('.reel-progress');
    if (!progressContainer) return;

    progressContainer.innerHTML = reelProducts.map((_, index) => 
        `<div class="dot ${index === 0 ? 'active' : ''}"></div>`
    ).join('');
}

// ===== Scroll Listener =====
function initScrollListener() {
    const container = document.querySelector('.reels-container');
    if (!container) return;

    let scrollTimeout;
    container.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollTop = container.scrollTop;
            const reelHeight = window.innerHeight;
            const activeIndex = Math.round(scrollTop / reelHeight);
            updateProgressDots(activeIndex);
        }, 50);
    });
}

function updateProgressDots(activeIndex) {
    const dots = document.querySelectorAll('.reel-progress .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

// ===== Like Toggle =====
function toggleLike(element, index) {
    const icon = element.querySelector('.action-icon');
    const countEl = element.querySelector('.action-count');
    
    if (icon.classList.contains('liked')) {
        icon.classList.remove('liked');
        reelProducts[index].likes--;
    } else {
        icon.classList.add('liked');
        reelProducts[index].likes++;
        // Add heart animation
        icon.style.transform = 'scale(1.3)';
        setTimeout(() => icon.style.transform = '', 200);
    }
    
    countEl.textContent = formatCount(reelProducts[index].likes);
}

// ===== Share =====
function shareReel(index) {
    const product = reelProducts[index];
    if (navigator.share) {
        navigator.share({
            title: product.name,
            text: product.desc,
            url: window.location.href
        });
    } else {
        // Fallback - copy link
        navigator.clipboard?.writeText(window.location.href);
        showReelToast('Link copied to clipboard!');
    }
}

// ===== Add to Cart from Reel =====
function addToCartFromReel(productId) {
    const product = reelProducts.find(p => p.id === productId);
    if (product) {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cartItems.find(item => item.id === product.id);
        if (existing) {
            existing.quantity++;
        } else {
            cartItems.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: 1,
                size: '',
                color: ''
            });
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateReelCartBadge();
        showReelToast(`${product.name} added to cart!`);
    }
}

// ===== Bookmark =====
function bookmarkReel(element) {
    const icon = element.querySelector('.action-icon');
    icon.classList.toggle('liked');
    showReelToast(icon.classList.contains('liked') ? 'Saved!' : 'Removed from saved');
}

// ===== Utility Functions =====
function formatCount(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function updateReelCartBadge() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.querySelector('.cart-btn .badge');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

function showReelToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.95);
        color: #1a1a2e;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 0.85rem;
        font-weight: 500;
        z-index: 9999;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        animation: slideUp 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    const container = document.querySelector('.reels-container');
    if (!container) return;

    if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        slideCurrentReel(-1);
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        slideCurrentReel(1);
    }
});

// ===== Image Slider Functions =====
const reelSlideIndexes = {};

function slideReelImage(reelIndex, direction) {
    const product = reelProducts[reelIndex];
    if (!product || product.images.length <= 1) return;

    if (reelSlideIndexes[reelIndex] === undefined) reelSlideIndexes[reelIndex] = 0;

    let newIndex = reelSlideIndexes[reelIndex] + direction;
    if (newIndex < 0) newIndex = product.images.length - 1;
    if (newIndex >= product.images.length) newIndex = 0;

    goToReelSlide(reelIndex, newIndex);
}

function goToReelSlide(reelIndex, slideIndex) {
    reelSlideIndexes[reelIndex] = slideIndex;

    const reelItem = document.querySelector(`.reel-item[data-index="${reelIndex}"]`);
    if (!reelItem) return;

    const track = reelItem.querySelector('.reel-slider-track');
    track.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Update dots
    const dots = reelItem.querySelectorAll('.reel-dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === slideIndex));
}

function slideCurrentReel(direction) {
    const container = document.querySelector('.reels-container');
    if (!container) return;
    const scrollTop = container.scrollTop;
    const reelHeight = window.innerHeight;
    const activeReelIndex = Math.round(scrollTop / reelHeight);
    slideReelImage(activeReelIndex, direction);
}

// ===== Touch Swipe for Image Slider =====
function initImageSliderSwipe() {
    const reelItems = document.querySelectorAll('.reel-item');

    reelItems.forEach((reel) => {
        let startX = 0;
        let startY = 0;
        let diffX = 0;
        let diffY = 0;
        let directionLocked = false;
        let isHorizontal = false;

        reel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            diffX = 0;
            diffY = 0;
            directionLocked = false;
            isHorizontal = false;
        }, { passive: true });

        reel.addEventListener('touchmove', (e) => {
            diffX = e.touches[0].clientX - startX;
            diffY = e.touches[0].clientY - startY;

            // Lock direction after 10px of movement
            if (!directionLocked && (Math.abs(diffX) > 10 || Math.abs(diffY) > 10)) {
                directionLocked = true;
                isHorizontal = Math.abs(diffX) > Math.abs(diffY) * 2;
            }
        }, { passive: true });

        reel.addEventListener('touchend', () => {
            // Only trigger image slide if it was clearly a horizontal swipe
            if (directionLocked && isHorizontal && Math.abs(diffX) > 60) {
                const reelIndex = parseInt(reel.dataset.index);
                if (diffX < 0) {
                    slideReelImage(reelIndex, 1);
                } else {
                    slideReelImage(reelIndex, -1);
                }
            }
            // Otherwise do nothing - let the vertical scroll handle it naturally
            diffX = 0;
            diffY = 0;
            directionLocked = false;
            isHorizontal = false;
        }, { passive: true });
    });
}
