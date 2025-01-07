import React from 'react'
import Routes from '../Pages/Routes'

function Header() {
  return (
    <>
      <nav className='bg-[#071431] border-1 border-black'>
        <div className='lg:container lg:mx-auto py-3 flex lg:justify-around justify-between items-center font-serif'>
         
         <div>
            <img src="https://gameplex-final.vercel.app/assets/img/logo/logolisht.png" alt="" className='w-[100px]' />
         </div>
         <div className='text-white text-sm hidden lg:block '>
         <ul className='flex gap-5'>
            <li className='hover:text-orange-400 tranisition  duration-500  ease-in'>Demo</li>
            <li className='hover:text-orange-400 tranisition  duration-500  ease-in'>Inners</li>
            <li className='hover:text-orange-400 tranisition  duration-500  ease-in'>Customization</li>
            <li className='hover:text-orange-400 tranisition  duration-500  ease-in'>Features</li>
            <li className='hover:text-orange-400 tranisition  duration-500  ease-in'>Check Elite Author</li>
            
         </ul>
         </div>

         <div className='bg-orange-400 p-2 text-white text-[10px] pl-[18px] w-[100px] rounded-md  hover:bg-blue-200 hover:text-black tranisition  duration-500  ease-in  hidden lg:block '  >
         <button>Purchase Now</button>
         </div>

<div className='transform hover:rotate-90 transition duration-500 ease-in-out lg:hidden'>
    <div className='w-[35px] h-[1px]  bg-white m-3'>
    </div>
    <div className='w-[35px] h-[1px] bg-white m-3'></div>
    <div className='w-[35px] h-[1px] bg-white m-3'></div>
</div>
       

        </div>

       
      </nav>
  <Routes/>

    </>
  )
}

export default Header
