import React from 'react'

export default function Future() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-black">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 gap-7">
                <ul>
                    <li>
              <a className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none">
                Multi-Chain
              </a>
              </li>
              <li>
              <a className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none">
               Dashboard
              </a>
              </li>
              <li>
              <a className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none">
                Tool
              </a>
              </li>
              </ul>
            </div>
            <hr className="mb-6 border-gray-300" />
            <div className="flex">
              <a href="/" aria-label="Play Song" className="mr-3">
                <div className="flex items-center justify-center w-10 h-10 text-white transition duration-300 transform rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:scale-110">
                  <svg className="w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                  </svg>
                </div>
              </a>
              <div className="flex flex-col">
                
              </div>
            </div>
          </div>
          <div className="px-5 pt-6 pb-5 text-center border border-gray-900 rounded lg:w-2/5">

            <div className="flex justify-center w-full mb-3">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
               
              </a>
            </div>
          
            <div className="flex items-center w-full mb-5">
              <hr className="flex-1 border-gray-300" />
              <div className="px-3 text-xs text-gray-500 sm:text-sm">or</div>
              <hr className="flex-1 border-gray-300" />
            </div>
            <img
             src="logos.jpg" 
             alt="" />
           
          </div>
        </div>
      </div>
  )
}
