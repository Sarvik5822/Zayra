function updateBreadcrumb(pageName, pageUrl) {
    const breadcrumbContainer = document.getElementById('breadcrumb-container');
    breadcrumbContainer.innerHTML = `
        <span class="hover:underline cursor-pointer" onclick="navigateTo('index.html', 'Dashboard')">Dashboard</span>
        <span class="material-symbols-outlined text-sm">chevron_right</span>
        <span class="opacity-50" id="currentPage">${pageName}</span>
    `;
}

function navigateTo(url, pageName) {
    // Update the breadcrumb and navigate to the new page
    updateBreadcrumb(pageName, url);
    window.location.href = url; // Navigate to the new page
}

function createSidebar() {
    return `
        <aside class="w-64 border-r border-gray-200 h-screen">
            <div class="bg-[#81d8d0] px-6 py-4" onclick="navigateTo('index.html', 'Dashboard')">
                <h1 class="pb-4 text-2xl font-bold hover:scale-105 transition-transform cursor-pointer">Zayra</h1>
            </div>
            <nav class="p-2 space-y-1">
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="navigateTo('index.html', 'Dashboard')">
                    <span class="material-symbols-outlined">dashboard</span>
                    <span>Dashboard</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="navigateTo('order.html', 'Order')">
                    <span class="material-symbols-outlined">receipt</span>
                    <span>Order</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="navigateTo('product.html', 'Product')">
                    <span class="material-symbols-outlined">package</span>
                    <span>Product</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="navigateTo('categories.html', 'Category')">
                    <span class="material-symbols-outlined">category</span>
                    <span>Category</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3">
                    <details class="relative w-full">
                        <summary class="list-none cursor-pointer flex items-center justify-between w-full">
                            <div class="flex items-center space-x-3">
                                <span class="material-symbols-outlined">business</span>
                                <span>Vendor</span>
                            </div>
                            <span class="material-symbols-outlined">expand_more</span>
                        </summary>
                        <div class="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                            <div class="p-2.5 hover:bg-gray-50 cursor-pointer transition-colors"
                                onclick="navigateTo('admin_vendor_details.html', 'Vendor Details')">Vendor Details</div>
                            <div class="p-2.5 hover:bg-gray-50 cursor-pointer transition-colors"
                                onclick="navigateTo('admin_approve_vendor.html', 'Vendor Approval')">Vendor Approval</div>
                            <div class="p-2.5 hover:bg-gray-50 cursor-pointer transition-colors"
                                onclick="navigateTo('admin_suspend_vendor.html', 'Suspension')">Suspension</div>
                        </div>
                    </details>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="navigateTo('sales.html', 'Sales')">
                    <span class="material-symbols-outlined">attach_money</span>
                    <span>Sales</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="navigateTo('customer_listing.html', 'Customer')">
                    <span class="material-symbols-outlined">support_agent</span>
                    <span>Customer</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="navigateTo('admin_login.html', 'Authentication')">
                    <span class="material-symbols-outlined">security</span>
                    <span>Authentication</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="navigateTo('admin_profile.html', 'Account')">
                    <span class="material-symbols-outlined">account_circle</span>
                    <span>Account</span>
                </div>
            </nav>
        </aside>
    `;
}

function createHeader() {
    return `
        <header class="bg-[#81d8d0] px-6 py-4">
            <nav class="flex items-center justify-between">
               <div class="flex items-center space-x-8" id="breadcrumb-container">
                    <!-- Breadcrumb will be inserted here -->
                </div>

                <details class="relative">
                        <summary class="list-none cursor-pointer">
                            <div class="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-colors">
                                <img src="https://ui-avatars.com/api/?name=John+Doe" alt="Profile"
                                    class="w-8 h-8 rounded-full" />
                                <span class="material-symbols-outlined">expand_more</span>
                            </div>
                        </summary>
                        <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                            <div class="p-2 hover:bg-gray-50 cursor-pointer transition-colors"
                                onclick="navigateTo('admin_profile.html', 'Profile')">
                                <span class="material-symbols-outlined mr-2 align-middle">person</span>
                                Profile
                            </div>
                            <div class="p-2 hover:bg-gray-50 cursor-pointer transition-colors"
                                onclick="navigateTo('admin_setting.html', 'Settings')">
                                <span class="material-symbols-outlined mr-2 align-middle">settings</span>
                                Settings
                            </div>
                            <div class="p-2 hover:bg-gray-50 cursor-pointer transition-colors border-t"
                                onclick="navigateTo('admin_login.html', 'Logout')">
                                <span class="material-symbols-outlined mr-2 align-middle">logout</span>
                                Logout
                            </div>
                        </div>
                    </details>
                </div>
            </nav>
        </header>
    `;
}

function insertLayout() {
    const sidebarContainer = document.getElementById('sidebar-container');
    const headerContainer = document.getElementById('header-container');

    sidebarContainer.innerHTML = createSidebar();
    headerContainer.innerHTML = createHeader();

    // Initialize breadcrumb based on the current page
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page from the URL
    const pageNameMap = {
        'index.html': 'Dashboard',
        'order.html': 'Order',
        'add_order.html': 'Add Order',
        'order_details.html': 'Order Details',
        'product.html': 'Product',
        'add_product.html': 'Add Product',
        'categories.html': 'Category',
        'add_category.html': 'Add Category',
        'sales.html': 'Sales',
        'customer_listing.html': 'Customer',
        'admin_login.html': 'Authentication',
        'admin_profile.html': 'Account',
        'admin_vendor_details.html': 'Vendor Details',
        'admin_approve_vendor.html': 'Vendor Approval',
        'admin_suspend_vendor.html': 'Suspension',
        'admin_setting.html': 'Setting',
        // Add more mappings as needed
    };

    const pageName = pageNameMap[currentPage] || 'Current Page'; // Default to 'Current Page' if not found
    updateBreadcrumb(pageName, currentPage); // Set the initial breadcrumb
}

// Call the function to insert the sidebar and header when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertLayout);