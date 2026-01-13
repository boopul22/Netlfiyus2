import { Navigation, Phone, Menu, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
            {/* Top Bar for Address */}
            <div className="bg-[#1a365d] text-white py-2 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
                    <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-blue-400" />
                        <span>6391 Elgin St. Celina, 10299</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-4">
                        <a href="tel:8884080938" className="hover:text-blue-300 transition-colors">Call : 888 408 0938</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <img
                        src="/logo.png"
                        alt="Auto File Claim"
                        className="h-16 w-auto"
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
                    <button className="md:hidden text-slate-800">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    )
}
