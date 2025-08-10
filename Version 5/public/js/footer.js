document.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementById('site-footer');

    if (footer) {
        footer.innerHTML = `
            <div class="bg-salon-blue text-white text-center md:text-start">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <div class="text-2xl font-bold mb-4">David's Salon</div>
                            <div class="space-y-2 text-gray-300">
                                <div class="flex items-center justify-center md:justify-start">
                                    <span>A. DSI Building, 1251 Cardona St. Poblacion, Makati City</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul class="space-y-2 text-gray-300">
                                <li><a href="index.html" class="hover:text-white transition-colors">Home</a></li>
                                <li><a href="about.html" class="hover:text-white transition-colors">About</a></li>
                                <li><a href="service-promos.html" class="hover:text-white transition-colors">Services & Promos</a></li>
                                <li><a href="branches.html" class="hover:text-white transition-colors">Branches</a></li>
                                <li><a href="contact-socials.html" class="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Our Services</h3>
                            <ul class="space-y-2 text-gray-300">
                                <li>Cutting</li>
                                <li>Hair Color</li>
                                <li>Make-up</li>
                                <li>Treatments</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Stay Connected</h3>
                            <div class="space-y-3 text-gray-300">
                                <div class="flex items-center justify-center md:justify-start">
                                    <i class="fas fa-phone mr-2"></i>
                                    <a href="tel:+1234567890" class="hover:text-white transition-colors">8890-9098</a>
                                </div>
                                <div class="flex items-center justify-center md:justify-start">
                                    <i class="fas fa-envelope mr-2"></i>
                                    <a href="mailto:info@davidsalon.com.ph" class="hover:text-white transition-colors">info@davidsalon.com.ph</a>
                                </div>
                                <div class="flex space-x-4 mt-4 justify-center md:justify-start">
                                    <a target="_blank" href="https://www.facebook.com/Davids.Salon" class="text-gray-300 hover:text-white transition-colors"><i class="fab fa-facebook-f text-xl"></i></a>
                                    <a target="_blank" href="https://www.instagram.com/davidsalonph/?hl=en" class="text-gray-300 hover:text-white transition-colors"><i class="fab fa-instagram text-xl"></i></a>
                                    <a target="_blank" href="https://x.com/DavidSalonPH" class="text-gray-300 hover:text-white transition-colors"><i class="fab fa-twitter text-xl"></i></a>
                                    <a target="_blank" href="https://www.linkedin.com/company/david-salon/" class="text-gray-300 hover:text-white transition-colors"><i class="fab fa-linkedin text-xl"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p class="text-gray-300 text-sm">© 2025 David's Salon. All rights reserved.</p>
                        <div class="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" class="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
                            <a href="#" class="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
                            <a href="#" class="text-gray-300 hover:text-white text-sm transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
});
