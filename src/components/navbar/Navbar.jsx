import React from 'react'

export default function Navbar() {
    return (
        <header className="bg-black h-15 "  >
            <nav className="max-w-[1200px] py-[5px] items-center flex justify-between border-white mx-auto" aria-label="Global">
                        <img src="logo1.jpg" className="h-8 w-auto"  alt="" />
                   
    <ul className='flex gap-10'>
        <li>   
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100">
                  Web3mkr
            </a>
        </li>

        <li> 
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100">
                  WhitePaper
            </a>
        </li>

        <li>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100">
                  Services
            </a>
        </li>
        <li>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100">
                  Tool
            </a>
        </li>
        <li>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100">
                  Contact Us
            </a>
        </li>
        
        <button class="inline-flex items-center px-4 py-2 bg-black border border-blue-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
	Start For Free
  </button>
    </ul>
                   
            </nav>
        </header>
                        )
}
