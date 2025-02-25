function Footer() {
    return (
        <>
            <footer className="bg-teal-600 text-white p-4 items-center tracking-wide text-center">
                <div className="flex flex-col md:flex-row mt-5 mb-5 justify-between gap-8 md:gap-0">
                     {/* Navigation */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h4 className="text-lg mb-4 tracking-wider">NAVIGATE</h4>
                        <nav>
                            <ul className="flex flex-col leading-8 text-base">
                                <li>
                                    <a href="/" className="hover:text-yellow-300 transition duration-300">Home</a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:text-yellow-300 transition duration-300">About</a>
                                </li>
                                <li>
                                    <a href="#services" className="hover:text-yellow-300 transition duration-300">Services</a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Official Links */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h4 className="text-lg mb-4 tracking-wider">OFFICIAL</h4>
                        <nav>
                            <ul className="flex flex-col leading-8 tracking-wide text-base">
                                <li>
                                    <a href="#privacy" className="hover:text-yellow-300 transition duration-300">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#terms" className="hover:text-yellow-300 transition duration-300">Terms of Services</a>
                                </li>
                                <li>
                                    <a href="#faqs" className="hover:text-yellow-300 transition duration-300">Faqs</a>
                                </li>
                                <li><a href="#contactt" className="hover:text-yellow-300 transition duration-300">Contact</a></li>
                                <li>
                                    <a href="#shipping" className="hover:text-yellow-300 transition duration-300">Shipping Policy</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Follow Us */}
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h4 className="text-lg mb-4 tracking-wider">FOLLOW US</h4>
                        <div className="flex flex-col leading-8 tracking-wide text-base">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="w-full md:w-1/4">
                        <h4 className="text-lg mb-4 tracking-wider">SUPPORT</h4>
                        <p className="leading-8 tracking-wide text-base"><span className="font-medium">Working Hours:</span> Mon to Sat 9 AM to 5 PM</p>
                        <p className="leading-8 tracking-wide text-base"><span className="font-medium">Email:</span> myportraits@gmail.com</p>
                        <p className="leading-8 tracking-wide text-base"><span className="font-medium">Phone:</span> +91-9633201060</p>
                    </div>
                </div>

                <hr className="my-4" />

                <p className="mt-2 text-base">&copy; 2025 My Portraits. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer;
