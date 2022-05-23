import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
     
     
      </div>



      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="mr-48 mt-4 sm:flex-shrink-0 flex items-center sm:mb-4">
          <Link to ='./'>
          <img class="block lg:hidden h-12 w-12 rounded-lg" src="https://lucky-trader-cms-prod.s3.us-east-2.amazonaws.com/Tubby_Cat_e6dd27c2eb.webp" alt="TUBBYSHOP" />
          </Link>
          <Link to ='./'>
          <img class="hidden lg:block h-8 w-auto rounded-lg" src="https://lucky-trader-cms-prod.s3.us-east-2.amazonaws.com/Tubby_Cat_e6dd27c2eb.webp" alt="TUBBSHOP" />
          </Link>
          <Link to ='./'>
          <p className='ml-5 font-medium text-white'>TUBBY SHOP -- network rinkeby  </p>
          </Link>



        </div>




      </div>
      <div class="absolute inset-y-0 right-0 space-x-5 flex items-center pr-2 sm:static sm:inset-auto mt-4 sm:ml-6 sm:mb-4 sm:pr-0">
        <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <a href='https://github.com/AriaWorkshop' alt='/' target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 float-left ml-5 ' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href='https://twitter.com/AriaWorkshop' alt='/' target="_blank" rel="noreferrer">
        <svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 ml-4 float-left'>
  <path d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"  className='fill-[#3BA9EE]'/>
</svg>
</a>
       
        </button>


        <div class="ml-3 relative">
          <div>
            <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              
            </button>
          </div>

       
  
        </div>
      </div>
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">

     
    </div>
  </div>
  
</nav>
  )
}

export default Navbar