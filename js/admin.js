// ===== Admin Panel JavaScript =====

// Sample Data
const adminOrders = [
    { id: "ORD-001", customer: "John Doe", email: "john@example.com", date: "2024-01-15", total: 245.00, status: "delivered", items: 3 },
    { id: "ORD-002", customer: "Jane Smith", email: "jane@example.com", date: "2024-01-14", total: 189.99, status: "shipped", items: 2 },
    { id: "ORD-003", customer: "Mike Johnson", email: "mike@example.com", date: "2024-01-14", total: 320.50, status: "processing", items: 4 },
    { id: "ORD-004", customer: "Sarah Williams", email: "sarah@example.com", date: "2024-01-13", total: 95.00, status: "pending", items: 1 },
    { id: "ORD-005", customer: "Robert Brown", email: "robert@example.com", date: "2024-01-13", total: 450.00, status: "delivered", items: 5 },
    { id: "ORD-006", customer: "Emily Davis", email: "emily@example.com", date: "2024-01-12", total: 175.00, status: "cancelled", items: 2 },
    { id: "ORD-007", customer: "David Wilson", email: "david@example.com", date: "2024-01-12", total: 290.00, status: "shipped", items: 3 },
    { id: "ORD-008", customer: "Lisa Anderson", email: "lisa@example.com", date: "2024-01-11", total: 135.99, status: "processing", items: 2 }
];

const adminProducts = [
    { id: 1, name: "Nike Air Max 270", category: "Men", price: 150, stock: 45, status: "in-stock", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=50&h=50&fit=crop" },
    { id: 2, name: "Adidas Ultraboost 22", category: "Men", price: 190, stock: 32, status: "in-stock", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=50&h=50&fit=crop" },
    { id: 3, name: "Puma RS-X", category: "Women", price: 110, stock: 8, status: "low-stock", image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=50&h=50&fit=crop" },
    { id: 4, name: "New Balance 574", category: "Women", price: 85, stock: 56, status: "in-stock", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=50&h=50&fit=crop" },
    { id: 5, name: "Nike Air Force 1", category: "Kids", price: 95, stock: 0, status: "out-of-stock", image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=50&h=50&fit=crop" },
    { id: 6, name: "Adidas Stan Smith", category: "Casual", price: 80, stock: 67, status: "in-stock", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=50&h=50&fit=crop" },
    { id: 7, name: "Nike Pegasus 39", category: "Sports", price: 130, stock: 5, status: "low-stock", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=50&h=50&fit=crop" },
    { id: 8, name: "Clarks Oxford", category: "Formal", price: 120, stock: 23, status: "in-stock", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=50&h=50&fit=crop" }
];

const adminCustomers = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "+1 234-567-8901", orders: 5, spent: 1245.00, joined: "2023-06-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+1 234-567-8902", orders: 3, spent: 589.99, joined: "2023-07-20" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", phone: "+1 234-567-8903", orders: 8, spent: 2450.50, joined: "2023-03-10" },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com", phone: "+1 234-567-8904", orders: 2, spent: 295.00, joined: "2023-09-05" },
    { id: 5, name: "Robert Brown", email: "robert@example.com", phone: "+1 234-567-8905", orders: 12, spent: 3890.00, joined: "2023-01-22" },
    { id: 6, name: "Emily Davis", email: "emily@example.com", phone: "+1 234-567-8906", orders: 4, spent: 675.00, joined: "2023-08-18" }
];

const adminCategories = [
    { id: 1, name: "Men", products: 45, description: "Men's footwear collection" },
    { id: 2, name: "Women", products: 38, description: "Women's footwear collection" },
    { id: 3, name: "Kids", products: 22, description: "Kids' footwear collection" },
    { id: 4, name: "Sports", products: 31, description: "Athletic and sports shoes" },
    { id: 5, name: "Casual", products: 27, description: "Everyday casual footwear" },
    { id: 6, name: "Formal", products: 15, description: "Formal and dress shoes" }
];

// ===== Sidebar Toggle =====
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.admin-sidebar');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    }

    // Initialize page based on current page
    initAdminPage();
});

function initAdminPage() {
    renderOrdersTable();
    renderProductsTable();
    renderCustomersTable();
    renderCategoriesTable();
    renderInventoryTable();
    renderDashboardStats();
    renderRecentOrders();
}

// ===== Dashboard Stats =====
function renderDashboardStats() {
    const totalOrdersEl = document.getElementById('total-orders');
    const totalRevenueEl = document.getElementById('total-revenue');
    const totalProductsEl = document.getElementById('total-products');
    const totalCustomersEl = document.getElementById('total-customers');

    if (totalOrdersEl) totalOrdersEl.textContent = adminOrders.length;
    if (totalRevenueEl) totalRevenueEl.textContent = '$' + adminOrders.reduce((sum, o) => sum + o.total, 0).toLocaleString();
    if (totalProductsEl) totalProductsEl.textContent = adminProducts.length;
    if (totalCustomersEl) totalCustomersEl.textContent = adminCustomers.length;
}

// ===== Recent Orders (Dashboard) =====
function renderRecentOrders() {
    const container = document.getElementById('recent-orders-table');
    if (!container) return;

    container.innerHTML = adminOrders.slice(0, 5).map(order => `
        <tr>
            <td><strong>${order.id}</strong></td>
            <td>${order.customer}</td>
            <td>${order.date}</td>
            <td>$${order.total.toFixed(2)}</td>
            <td><span class="status-badge ${order.status}">${capitalizeFirst(order.status)}</span></td>
        </tr>
    `).join('');
}

// ===== Orders Table =====
function renderOrdersTable() {
    const container = document.getElementById('orders-table-body');
    if (!container) return;

    container.innerHTML = adminOrders.map(order => `
        <tr>
            <td><strong>${order.id}</strong></td>
            <td>${order.customer}</td>
            <td>${order.email}</td>
            <td>${order.date}</td>
            <td>${order.items}</td>
            <td>$${order.total.toFixed(2)}</td>
            <td>
                <select class="form-select form-select-sm" onchange="updateOrderStatus('${order.id}', this.value)" style="width:130px">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>Processing</option>
                    <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                    <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                    <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                </select>
            </td>
            <td>
                <div class="action-btns">
                    <button class="btn btn-sm btn-outline-primary" onclick="viewOrder('${order.id}')" title="View"><i class="fas fa-eye"></i></button>
                    <button class="btn btn-sm btn-outline-danger" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function updateOrderStatus(orderId, status) {
    const order = adminOrders.find(o => o.id === orderId);
    if (order) {
        order.status = status;
        showAdminToast(`Order ${orderId} status updated to ${capitalizeFirst(status)}`);
    }
}

function viewOrder(orderId) {
    const order = adminOrders.find(o => o.id === orderId);
    if (!order) return;

    const modalBody = document.querySelector('#orderDetailModal .modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <h6>Order Information</h6>
                    <p><strong>Order ID:</strong> ${order.id}</p>
                    <p><strong>Date:</strong> ${order.date}</p>
                    <p><strong>Status:</strong> <span class="status-badge ${order.status}">${capitalizeFirst(order.status)}</span></p>
                </div>
                <div class="col-md-6">
                    <h6>Customer Information</h6>
                    <p><strong>Name:</strong> ${order.customer}</p>
                    <p><strong>Email:</strong> ${order.email}</p>
                </div>
            </div>
            <hr>
            <h6>Order Summary</h6>
            <p><strong>Items:</strong> ${order.items}</p>
            <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
        `;
    }

    const modal = new bootstrap.Modal(document.getElementById('orderDetailModal'));
    modal.show();
}

// ===== Products Table =====
function renderProductsTable() {
    const container = document.getElementById('products-table-body');
    if (!container) return;

    container.innerHTML = adminProducts.map(product => `
        <tr>
            <td><img src="${product.image}" class="product-thumb" alt="${product.name}"></td>
            <td><strong>${product.name}</strong></td>
            <td>${product.category}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td><span class="status-badge ${product.status}">${formatStatus(product.status)}</span></td>
            <td>
                <div class="action-btns">
                    <button class="btn btn-sm btn-outline-primary" onclick="editProduct(${product.id})" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${product.id})" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function editProduct(productId) {
    const product = adminProducts.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productStock').value = product.stock;

    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        const index = adminProducts.findIndex(p => p.id === productId);
        if (index > -1) {
            adminProducts.splice(index, 1);
            renderProductsTable();
            showAdminToast('Product deleted successfully');
        }
    }
}

// ===== Customers Table =====
function renderCustomersTable() {
    const container = document.getElementById('customers-table-body');
    if (!container) return;

    container.innerHTML = adminCustomers.map(customer => `
        <tr>
            <td><strong>#${customer.id}</strong></td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.orders}</td>
            <td>$${customer.spent.toFixed(2)}</td>
            <td>${customer.joined}</td>
            <td>
                <div class="action-btns">
                    <button class="btn btn-sm btn-outline-primary" onclick="viewCustomer(${customer.id})" title="View"><i class="fas fa-eye"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function viewCustomer(customerId) {
    const customer = adminCustomers.find(c => c.id === customerId);
    if (!customer) return;

    const modalBody = document.querySelector('#customerDetailModal .modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="text-center mb-4">
                <div style="width:80px;height:80px;background:#f0f0f0;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto;font-size:2rem;color:#6c757d">
                    <i class="fas fa-user"></i>
                </div>
                <h5 class="mt-3 mb-0">${customer.name}</h5>
                <small class="text-muted">Customer since ${customer.joined}</small>
            </div>
            <div class="row text-center">
                <div class="col-4">
                    <h4 class="mb-0">${customer.orders}</h4>
                    <small class="text-muted">Orders</small>
                </div>
                <div class="col-4">
                    <h4 class="mb-0">$${customer.spent.toFixed(0)}</h4>
                    <small class="text-muted">Spent</small>
                </div>
                <div class="col-4">
                    <h4 class="mb-0">$${(customer.spent / customer.orders).toFixed(0)}</h4>
                    <small class="text-muted">Avg Order</small>
                </div>
            </div>
            <hr>
            <p><i class="fas fa-envelope me-2"></i>${customer.email}</p>
            <p><i class="fas fa-phone me-2"></i>${customer.phone}</p>
        `;
    }

    const modal = new bootstrap.Modal(document.getElementById('customerDetailModal'));
    modal.show();
}

// ===== Categories Table =====
function renderCategoriesTable() {
    const container = document.getElementById('categories-table-body');
    if (!container) return;

    container.innerHTML = adminCategories.map(cat => `
        <tr>
            <td><strong>#${cat.id}</strong></td>
            <td>${cat.name}</td>
            <td>${cat.description}</td>
            <td>${cat.products}</td>
            <td>
                <div class="action-btns">
                    <button class="btn btn-sm btn-outline-primary" onclick="editCategory(${cat.id})" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-outline-danger" onclick="deleteCategory(${cat.id})" title="Delete"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function editCategory(catId) {
    const cat = adminCategories.find(c => c.id === catId);
    if (!cat) return;

    document.getElementById('categoryName').value = cat.name;
    document.getElementById('categoryDescription').value = cat.description;

    const modal = new bootstrap.Modal(document.getElementById('categoryModal'));
    modal.show();
}

function deleteCategory(catId) {
    if (confirm('Are you sure you want to delete this category?')) {
        const index = adminCategories.findIndex(c => c.id === catId);
        if (index > -1) {
            adminCategories.splice(index, 1);
            renderCategoriesTable();
            showAdminToast('Category deleted successfully');
        }
    }
}

// ===== Inventory Table =====
function renderInventoryTable() {
    const container = document.getElementById('inventory-table-body');
    if (!container) return;

    container.innerHTML = adminProducts.map(product => `
        <tr class="${product.stock === 0 ? 'table-danger' : product.stock < 10 ? 'table-warning' : ''}">
            <td><img src="${product.image}" class="product-thumb" alt="${product.name}"></td>
            <td><strong>${product.name}</strong></td>
            <td>${product.category}</td>
            <td><strong>${product.stock}</strong></td>
            <td><span class="status-badge ${product.status}">${formatStatus(product.status)}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="updateStock(${product.id})" title="Update Stock">
                    <i class="fas fa-edit"></i> Update
                </button>
            </td>
        </tr>
    `).join('');
}

function updateStock(productId) {
    const product = adminProducts.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('stockProductName').textContent = product.name;
    document.getElementById('stockQuantity').value = product.stock;

    const modal = new bootstrap.Modal(document.getElementById('stockModal'));
    modal.show();

    document.getElementById('stockForm').onsubmit = (e) => {
        e.preventDefault();
        const newStock = parseInt(document.getElementById('stockQuantity').value);
        product.stock = newStock;
        if (newStock === 0) product.status = 'out-of-stock';
        else if (newStock < 10) product.status = 'low-stock';
        else product.status = 'in-stock';
        
        renderInventoryTable();
        modal.hide();
        showAdminToast(`Stock updated for ${product.name}`);
    };
}

// ===== Utility Functions =====
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatStatus(status) {
    return status.split('-').map(capitalizeFirst).join(' ');
}

function showAdminToast(message) {
    const toastContainer = document.getElementById('admin-toast');
    if (!toastContainer) {
        // Create toast container
        const container = document.createElement('div');
        container.id = 'admin-toast';
        container.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'alert alert-success alert-dismissible fade show';
    toast.style.cssText = 'min-width:300px;box-shadow:0 5px 15px rgba(0,0,0,0.2)';
    toast.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    (document.getElementById('admin-toast') || document.body).appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
