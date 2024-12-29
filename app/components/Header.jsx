"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <header className="absolute w-full z-30 bg-transparent flex items-center justify-between px-6 md:px-10 xl:px-36 py-6">
                <Link href="/" className="text-3xl font-bold text-white font-outfit">
                    STEM <span className="text-[#e76f51]">Hub</span>
                </Link>

                <nav className="hidden lg:flex items-center gap-8 font-medium text-white">
                    <Link href="/about">About</Link>
                    <Link href="/features">Features</Link>
                    <Link href="/contact">Contact</Link>
                    <Link
                        href="/login"
                        className="bg-[#e76f51] text-white px-6 py-3 rounded-full font-medium hover:bg-[#cf5638] transition"
                    >
                        Get Started
                    </Link>
                </nav>

                <button onClick={toggleSidebar} className="lg:hidden text-3xl text-white">
                    <HiMenuAlt4 />
                </button>

                {/* Sidebar Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md"
                        onClick={toggleSidebar}
                    ></div>
                )}

                {/* Sidebar */}
                <div
                    className={`fixed inset-0 z-50 bg-[#24201D] text-white flex flex-col items-center justify-center transform ${
                        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
                >
                    <button onClick={toggleSidebar} className="absolute top-6 right-6 text-white text-3xl">
                        <IoMdClose />
                    </button>
                    <nav className="flex flex-col items-center space-y-8 text-lg">
                        <Link href="/about" onClick={toggleSidebar} className="hover:text-[#e76f51]">
                            About
                        </Link>
                        <Link href="/features" onClick={toggleSidebar} className="hover:text-[#e76f51]">
                            Features
                        </Link>
                        <Link href="/contact" onClick={toggleSidebar} className="hover:text-[#e76f51]">
                            Contact
                        </Link>
                        <Link
                            href="/login"
                            className="bg-[#e76f51] text-white px-6 py-3 rounded-full hover:bg-[#cf5638] transition"
                            onClick={toggleSidebar}
                        >
                            Get Started
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;