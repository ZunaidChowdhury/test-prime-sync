'use client'

import Image from 'next/image'
import { ChevronDown, Menu, User, X } from 'lucide-react'
import { useState } from 'react'

const NAV_COLOR = '#40E1D1'

type NavItem = {
    label: string;
    items: string[];
};

const navItems: NavItem[] = [
    { label: 'Product', items: [] },
    { label: 'Solution', items: ['Car Dealership', 'Plumbing', 'Property Preservation', 'HVAC', 'Auto Repair', 'Insurance'] },
    { label: 'Pricing', items: [] },
    { label: 'About', items: [] },
    { label: 'Resources', items: ['Blogs', 'Docs', 'Support'] },
];

export default function Header() {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const [openDropdownMenu, setOpenDropdownMenu] = useState<string | null>(null)
    const [openMobileDropdownMenu, setOpenMobileDropdownMenu] = useState<string | null>(null);

    const toggleCategory = (label: string) => {
        setOpenMobileDropdownMenu(openMobileDropdownMenu === label ? null : label);
    };

    return (
        <header>
            <nav className="container  xl:max-w-305 h-16  mx-auto px-4 bg-white mt-6 rounded-xl">
                <div className="flex h-full items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 ml-3 cursor-pointer">
                        <Image
                            src="/assets/primeSyncSolutions_LOGO.png"
                            alt="Logo"
                            width={116}
                            height={40}
                            priority
                        />
                    </div>
                    {/* Navigation */}
                    <div className="hidden lg:flex h-full justify-center  items-center gap-6">
                        <nav className="h-full flex items-center gap-6 text-sm font-medium">
                            <NavItem label="Product" />
                            <Divider />

                            <Dropdown
                                label="Solution"
                                open={openDropdownMenu === 'solution'}
                                onOpen={() => setOpenDropdownMenu('solution')}
                                onClose={() => setOpenDropdownMenu(null)}
                            >
                                <DropdownItem label="Car Dealership" />
                                <DropdownItem label="Plumbing" />
                                <DropdownItem label="Property Preservation" />
                                <DropdownItem label="HVAC" />
                                <DropdownItem label="Auto Repair" />
                                <DropdownItem label="Insurance" />
                            </Dropdown>

                            <Divider />
                            <NavItem label="Pricing" />
                            <Divider />
                            <NavItem label="About" />
                            <Divider />

                            <Dropdown
                                label="Resources"
                                open={openDropdownMenu === 'resources'}
                                onOpen={() => setOpenDropdownMenu('resources')}
                                onClose={() => setOpenDropdownMenu(null)}
                            >
                                <DropdownItem label="Blog" />
                                <DropdownItem label="Docs" />
                                <DropdownItem label="Support" />
                            </Dropdown>
                        </nav>

                        {/* CTA Button */}
                        <div className="mr-3">
                            <button
                                className="w-40 h-12 rounded-full px-5 py-2 text-sm font-semibold cursor-pointer text-white transition hover:opacity-90"
                                style={{ backgroundColor: NAV_COLOR }}
                            >
                                Request Demo
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 hover:text-primary transition cursor-pointer"
                        onClick={() => setNavMenuOpen(!navMenuOpen)}
                    >
                        {navMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>


                </div>
            </nav>
            {/* Mobile Menu (Slide-down) */}
            {navMenuOpen && (
                <div className="lg:hidden bg-white mt-1 rounded-lg shadow-md px-4 py-3 animate-slideDown">

                    {/* Mobile Categories */}
                    <ul className="flex flex-col gap-2">
                        {navItems.map((navItem) => (
                            <li key={navItem.label}>
                                <button
                                    onClick={() => toggleCategory(navItem.label)}
                                    className="w-full flex items-center justify-between px-2 py-2 text-text-primary font-semibold hover:text-text-primary hover:bg-primary cursor-pointer"
                                >
                                    {navItem.label}

                                    {navItem.items.length === 0 ? null : (
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform ${openMobileDropdownMenu === navItem.label ? 'rotate-180' : ''
                                            }`}
                                    />)}
                                </button>

                                {openMobileDropdownMenu === navItem.label && (
                                    <ul className="pl-4 border-l border-text-primary ml-2 mt-1">
                                        {navItem.items.map((item) => (
                                            <li
                                                key={item}
                                                className="py-1 text-sm font-semibold text-text-primary hover:text-primary cursor-pointer"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Sign In Button */}
                    <div className="mt-4">
                        <button
                            className="w-full h-12 rounded-full px-5 py-2 text-sm font-semibold cursor-pointer text-white transition hover:opacity-90"
                            style={{ backgroundColor: NAV_COLOR }}
                        >
                            Request Demo
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

function NavItem({ label }: { label: string }) {
    return (
        <button className="relative h-10 text-sm text-text-primary font-bold hover:text-primary cursor-pointer transition">
            {label}
        </button>
    )
}

function Divider() {
    return (
        <span
            className="h-5 w-px"
            style={{ backgroundColor: NAV_COLOR }}
        />
    )
}

function Dropdown({
    label,
    open,
    onOpen,
    onClose,
    children,
}: {
    label: string
    open: boolean
    onOpen: () => void
    onClose: () => void
    children: React.ReactNode
}) {
    return (
        <div
            className="group relative h-10 flex items-center"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
        >
            <button className="flex  justify-center items-center gap-1 text-sm text-text-primary font-semibold group-hover:text-primary cursor-pointer transition">
                {label}
                <ChevronDown
                    size={16}
                    className="transition-transform"
                    style={{
                        color: NAV_COLOR,
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                />
            </button>

            {open && (
                <div className="absolute left-0 top-full min-w-[220px] rounded-2xl bg-[#0f1f1f] p-2 shadow-xl">
                    {children}
                </div>
            )}
        </div>
    )
}

function DropdownItem({ label }: { label: string }) {
    return (
        <button className="block w-full rounded-xl px-4 py-2 text-left text-sm font-semibold text-white/80 hover:bg-primary hover:text-black transition cursor-pointer">
            {label}
        </button>
    )
}
