# 👟 SoleStyle — Footwear E-Commerce Website

A modern, fully responsive footwear e-commerce website with an admin panel and TikTok/Instagram Reels-style product feed. Built with pure HTML, CSS, JavaScript, and Bootstrap 5 — no frameworks, no backend required for the demo.

![SoleStyle Preview](https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=400&fit=crop)

## 🚀 Live Demo

> Frontend demo — ready to integrate with any backend (PHP, Node.js, etc.)

---

## ✨ Features

### Customer-Facing Store
- 🏠 **Homepage** — Hero section with auto-scrolling product background, featured categories, trending products, reels preview, newsletter signup
- 🛍️ **Product Listing** — Sidebar filters (category, price, size, brand, color), sorting, grid/list view, pagination
- 📄 **Product Detail** — Image gallery, size & color selector, quantity control, reviews, related products
- 🛒 **Shopping Cart** — Add/remove items, quantity controls, price summary, coupon code (localStorage powered)
- 💳 **Checkout** — Customer details form (Name, Address, Email, Mobile, Alternate Mobile), Cash on Delivery (COD) payment
- ✅ **Order Confirmation** — Success page with order tracking steps
- 📱 **Product Reels** — TikTok/Instagram-style full-screen vertical scroll feed with horizontal image slider per product

### Admin Panel
- 📊 **Dashboard** — Stats cards (orders, revenue, products, customers), charts area, recent orders
- 📦 **Products Management** — CRUD operations, add/edit modal, search & filter
- 🛒 **Orders Management** — View orders, update status (Pending → Processing → Shipped → Delivered → Cancelled)
- 👥 **Customers Management** — Customer list with detail view
- 🏷️ **Categories Management** — Add/edit/delete categories
- 📋 **Inventory Management** — Stock levels, low stock alerts, update stock

### Technical Highlights
- ✅ Fully responsive & mobile-first design
- ✅ Bootstrap 5 + Font Awesome 6 + Google Fonts (Poppins)
- ✅ CSS scroll-snap for Reels vertical scrolling
- ✅ Touch swipe support for image navigation on mobile
- ✅ Cart persists via localStorage
- ✅ Form validation with Bootstrap
- ✅ Smooth animations & transitions
- ✅ Back to top button
- ✅ Shared footer loaded dynamically (single source of truth)
- ✅ Clean, modular code — ready for backend integration

---

## 📁 Project Structure

```
fotware/
├── index.html              # Homepage
├── products.html           # Product listing
├── product-detail.html     # Single product page
├── cart.html               # Shopping cart
├── checkout.html           # Checkout with COD
├── order-confirmation.html # Order success
├── reels.html              # TikTok-style product feed
├── footer.html             # Shared footer (loaded dynamically)
├── css/
│   ├── style.css           # Main site styles
│   ├── admin.css           # Admin panel styles
│   └── reels.css           # Reels page styles
├── js/
│   ├── main.js             # Cart, products, UI interactions
│   ├── reels.js            # Reels scrolling & image slider
│   └── admin.js            # Admin panel functionality
└── admin/
    ├── index.html           # Admin dashboard
    ├── products.html        # Manage products
    ├── orders.html          # Manage orders
    ├── customers.html       # Manage customers
    ├── categories.html      # Manage categories
    └── inventory.html       # Manage inventory
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Structure |
| CSS3 | Styling & animations |
| JavaScript (Vanilla) | Interactivity & cart logic |
| Bootstrap 5 | Responsive grid & components |
| Font Awesome 6 | Icons |
| Google Fonts | Typography (Poppins) |
| Unsplash | Product images |

---

## 🎨 Design System

- **Primary Color:** `#FF6B35` (Orange)
- **Secondary Color:** `#004E89` (Dark Blue)
- **Dark:** `#1a1a2e`
- **Font:** Poppins (300–800 weights)
- **Border Radius:** 12px
- **Shadows:** Layered soft shadows

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Muhammad9985/solestyle-footwear.git
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server (XAMPP, VS Code Live Server, etc.)

3. **Admin Panel**
   - Navigate to `admin/index.html`

> No build tools, no dependencies to install. Just open and go.

---

## 📱 Mobile-First Design

The site is fully optimized for mobile devices:
- Responsive navigation with hamburger menu
- Touch-friendly Reels with swipe gestures
- Adapted layouts for all screen sizes
- Footer sections intelligently hidden on mobile
- Toast notifications positioned for mobile viewing

---

## 🔮 Roadmap (Phase 2 — Backend)

- [ ] PHP Core backend integration
- [ ] MySQL database for products, orders, customers
- [ ] User authentication & registration
- [ ] Admin login with session management
- [ ] Real payment gateway integration
- [ ] Order tracking system
- [ ] Email notifications
- [ ] Image upload for products

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Contact

**Muhammad Rafique**

- 🌐 Portfolio: [mr-software.online](https://mr-software.online/)
- 💼 LinkedIn: [Muhammad Rafique](https://www.linkedin.com/in/muhammad-rafique-944b05159/)
- 🐙 GitHub: [Muhammad9985](https://github.com/Muhammad9985/)
- 📧 Email: rafiqalbaloshi3@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this useful, please give it a star!** ⭐
