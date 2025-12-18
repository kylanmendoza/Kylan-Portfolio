// 'use client'


// import {
//   Dialog,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
// } from '@headlessui/react'
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]


// export default function NavBar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="bg-gray-900">
//         <h1 className="text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-indigo-400">Kylan Mendoza</h1>
//     </header>
//   )
// }

import { useEffect } from "react";
import { Link } from 'react-scroll';

export const NavBar = ({ menuOpen, setMenuOpen }) => {


    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="font mono text-xl font-bold text-white cursor-pointer"
                    >
                        ky<span className="text-blue-500">.tech</span>{" "}
                    </Link>

                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                        >
                            Home 
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                        >
                            Contact
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
};