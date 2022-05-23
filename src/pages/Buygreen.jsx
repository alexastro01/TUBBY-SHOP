import React from 'react';
import greenT from '../assets/green.png';

function Buygreen() {
  return (
    <div>
    <div>
<div className='h-full w-full bg-gray-700 flex align-center  justify-center pt-9'>
 
  <img src={greenT} className='h-[400px] w-[400px] justify-center hover:scale-110 transition-transform rounded-md ' alt="red" />
  <br/>
  
 

</div>
<div className='bg-gray-700 h-[500px] pt-8'>
<p className='flex justify-center text-white font-medium'>Please fill out the form below to proceed to payment.</p>

<form action="https://formsubmit.co/ariaworkshopnft@gmail.com" method="POST" className='grid row-auto px-8 pt-3 md:px-[400px] '>
  <input type="text" name="name" placeholder='Name' required className='mt-3 pl-2 rounded-md'/>
  <input type="text" name="ETH address" placeholder='Your ETH address' required className='mt-3 pl-2 rounded-md'/>
  <input type="email" name="email" placeholder='EMail' required className='mt-3 pl-2 mb-3 rounded-md'/>
  <textarea type="text" name="Address" placeholder='Shipping Address '  required className='w-full h-20 mb-3 rounded-md pl-2' />
  <input type="hidden" name="_next" value="https://tubby-shop.vercel.app/paygreen" />
  <input type="hidden" name="_captcha" value="false"/>

  <button type="submit" className='bg-white rounded-full w-20 h-9 font-medium hover:scale-110 transition-transform ml-[135px] sm:ml-[330px] '>Send</button>
</form>
</div>
</div>

</div>
  )
}

export default Buygreen
