// layout.js

function createSidebar() {
    return `
        <aside class="w-64 border-r border-gray-200 h-screen">
            <div class="bg-[#81d8d0] px-6 py-4" onclick="window.location.href='vendor_dashboard.html'">
                <h1 class="pb-4 text-2xl font-bold hover:scale-105 transition-transform cursor-pointer">Zayra</h1>
            </div>
            <nav class="p-2 space-y-1">
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="window.location.href='vendor_dashboard.html'">
                    <span class="material-symbols-outlined">dashboard</span>
                    <span>Dashboard</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="window.location.href='vendor_order.html'">
                    <span class="material-symbols-outlined">receipt</span>
                    <span>Order</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="window.location.href='vendor_product.html'">
                    <span class="material-symbols-outlined">package</span>
                    <span>Product</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="window.location.href='vendor_categories.html'">
                    <span class="material-symbols-outlined">category</span>
                    <span>Category</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="window.location.href='revenue_breakdown.html'">
                    <span class="material-symbols-outlined">payment</span>
                    <span>Revenue</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="window.location.href='signin.html'">
                    <span class="material-symbols-outlined">security</span>
                    <span>Authentication</span>
                </div>
                <div class="p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer flex items-center space-x-3"
                    onclick="window.location.href='vendor_profile.html'">
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
                <div class="flex items-center space-x-8">
                    <div class="flex items-center space-x-2 text-sm">
                        <span class="hover:underline cursor-pointer">Home</span>
                        <span class="material-symbols-outlined text-sm">chevron_right</span>
                        <span class="hover:underline cursor-pointer">Dashboard</span>
                        <span class="material-symbols-outlined text-sm">chevron_right</span>
                        <span class="opacity-50">Current Page</span>
                    </div>
                </div>

                <div class="flex items-center space-x-6">
                    <div class="relative">
                        <input type="text" placeholder="Search..."
                            class="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all w-64" />
                        <span class="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
                    </div>

                    <details class="relative">
                        <summary class="list-none cursor-pointer">
                            <div class="relative hover:bg-gray-100 p-2 rounded-full transition-colors">
                                <span class="material-symbols-outlined">notifications</span>
                                <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </div>
                        </summary>
                        <div class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 p-4 z-50">
                            <h3 class="font-semibold mb-2">Notifications</h3>
                            <div class="space-y-2">
                                <div class="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                    <span class="material-symbols-outlined mt-1">mail</span>
                                    <div>
                                        <p class="text-sm font-medium">New message received</p>
                                        <p class="text-xs text-gray-500">2 minutes ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </details>

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
                                onclick="window.location.href='vendor_profile.html'">
                                <span class="material-symbols-outlined mr-2 align-middle">person</span>
                                Profile
                            </div>
                            <div class="p-2 hover:bg-gray-50 cursor-pointer transition-colors"
                                onclick="window.location.href='vendor_setting.html'">
                                <span class="material-symbols-outlined mr-2 align-middle">settings</span>
                                Settings
                            </div>
                            <div class="p-2 hover:bg-gray-50 cursor-pointer transition-colors border-t"
                                onclick="window.location.href='signin.html'">
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
}

// Call the function to insert the sidebar and header when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertLayout);