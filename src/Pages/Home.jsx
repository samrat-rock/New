import React from 'react'

function Home() {
  return (
    <>
       <section className='bg-[url("https://gameplex-final.vercel.app/assets/img/banner/bnbg3.jpg")] h-[500px] relative'>
       <div>
       <div className='py-6'>
            <img src="https://gameplex-final.vercel.app/assets/img/banner/banner1.png" alt="" className='w-[250px] rounded-lg h-[150px]' />
        </div>
        <div className='absolute bottom-[70px] rounded-lg border-2 border-white rounded-lg'>
            <img src="https://gameplex-final.vercel.app/assets/img/banner/banner3.png" alt="" className=' w-[250px] h-[150px] rounded-lg' />
        </div>

        <div className='absolute bottom-[70px] rounded-lg border-2 border-white   rounded-lg'>
            <img src="https://gameplex-final.vercel.app/assets/img/banner/banner3.png" alt="" className=' w-[250px] h-[150px] rounded-lg' />
        </div>
        <div className='py-6 absolute bottom-[70px] right-0 top-0 '>
            <img src="https://gameplex-final.vercel.app/assets/img/banner/banner1.png" alt="" className='border-2 border-white w-[250px] rounded-lg h-[150px]' />
        </div>
        <div className='absolute bottom-[70px] right-0 rounded-lg border-2 border-white rounded-lg'>
            <img src="https://gameplex-final.vercel.app/assets/img/banner/banner3.png" alt="" className=' w-[250px] h-[150px] rounded-lg' />
        </div>

        
        <div className='absolute left-[400px] top-[90px]'>
            <h3 className='text-orange-600 text-[30px] text-center font-serif'>Introducing GamePlex</h3>
            <p className='font-serif text-[40px] text-white py-2'>GamePlex - A Gamingbr <br /> Platform HTML Template</p>
        </div>
       </div>


       </section>


    </>
  )
}

export default Home
