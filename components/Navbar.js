import { Navigation, Phone, Menu } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="#" className="flex items-center gap-2 group">
                    <div className="relative flex items-center justify-center w-8 h-8 bg-[#1a365d] rounded-lg text-white">
                        <Navigation size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-[#1a365d]">Auto<span className="font-light text-slate-400">Claim</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#" className="text-sm font-medium text-slate-600 hover:text-[#3182ce] transition-colors">Home</Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-[#3182ce] transition-colors">How it Works</Link>
                    <Link href="#claim" className="text-sm font-medium text-slate-600 hover:text-[#3182ce] transition-colors">File Claim</Link>
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <a href="tel:8884080938" className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1a365d] border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:shadow-sm">
                        <Phone size={16} />
                        <span>888.408.0938</span>
                    </a>
                    <button className="md:hidden text-slate-600">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    )
}
