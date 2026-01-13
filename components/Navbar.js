import { Phone, Menu, MapPin, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
            {/* Top Bar for Address */}
            <div className="bg-[#1a365d] text-white py-2 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-blue-400 shrink-0" />
                        <span className="truncate">6391 Elgin St. Celina, 10299</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-4">
                        <a href="tel:8884080938" className="hover:text-blue-300 transition-colors">Call : 888 408 0938</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center group" onClick={closeMenu}>
                    <img
                        src="/logo.png"
                        alt="Auto File Claim"
                        className="h-12 sm:h-16 w-auto"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-semibold text-[#1a365d] hover:text-[#3182ce] transition-colors">Home</Link>
                    <Link href="/file-your-claim-today" className="text-sm font-semibold text-[#1a365d] hover:text-[#3182ce] transition-colors">File Your Claim Today</Link>
                    <Link href="/contact" className="text-sm font-semibold text-[#1a365d] hover:text-[#3182ce] transition-colors">Contact</Link>
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <a href="tel:8884080938" className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-[#3182ce] rounded-full hover:bg-blue-600 transition-all shadow-md">
                        <Phone size={16} />
                        <span>888 408 0938</span>
                    </a>
                    <button
                        className="md:hidden text-slate-800 p-2 -mr-2"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className="flex flex-col px-4 py-4 space-y-1">
                    <Link
                        href="/"
                        className="py-3 px-4 text-base font-semibold text-[#1a365d] hover:bg-slate-50 rounded-lg transition-colors"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link
                        href="/file-your-claim-today"
                        className="py-3 px-4 text-base font-semibold text-[#1a365d] hover:bg-slate-50 rounded-lg transition-colors"
                        onClick={closeMenu}
                    >
                        File Your Claim Today
                    </Link>
                    <Link
                        href="/contact"
                        className="py-3 px-4 text-base font-semibold text-[#1a365d] hover:bg-slate-50 rounded-lg transition-colors"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                    <div className="pt-3 border-t border-slate-100 mt-2">
                        <a
                            href="tel:8884080938"
                            className="flex items-center justify-center gap-2 py-3 px-4 text-base font-bold text-white bg-[#3182ce] rounded-lg hover:bg-blue-600 transition-all"
                        >
                            <Phone size={18} />
                            <span>Call: 888 408 0938</span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}
