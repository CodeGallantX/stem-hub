import Link from 'next/link';

const Header = () => {
    return (
        <header className="py-4 sm:py-6 fixed top-0 md:top-8 z-30 backdrop-blur-md w-full md:w-4/5 md:left-1/2 md:-translate-x-1/2 rounded-none md:rounded-full bg-[#cf5638] animate-gradient bg-opacity-40 outline-none px-4 md:px-8 lg:px-14">
            <nav className="container mx-auto flex items-center justify-between">
                {/* <Image                                                                                                                                                                                                                                                                                                                                  z
                    src="/stemhub-logo.svg"
                    alt="STEM-Hub Logo"
                    width={120}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                    height={40}
                /> */}
                <Link href="/" className="text-3xl font-bold text-white font-outfit">
                    STEM <span className="text-[#e76f51]">Hub</span>
                </Link>
                <ul className="hidden sm:flex space-x-8 text-lg font-semibold text-white">
                    <li><a href="/features">Features</a></li> 
                    <li><a href="/about">About</a></li>
                    <li><a href="#contact">Contact</a></li>                                   
                    <li>
                        <Link
                            href="/login"
                            className="bg-[#e76f51] px-6 py-3 rounded-full text-white hover:bg-[#cf5638] transition"
                        >
                            Get Started
                        </Link>
                    </li>
                </ul>
                <button className="sm:hidden text-2xl">☰</button>
            </nav>
        </header>
    )
}

export default Header;