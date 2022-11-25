import { Gi3DStairs, GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';

export function Header() {
  const [visible, setIsVisible] = useState(false);

  const handleVisibleMenu = function () {
    setIsVisible(true)
  }
  console.log(visible)
  return (
    <header className='bg-red-600 p-6 flex justify-between mb-11 mt-2'>
      <div className='flex items-center justify-start'>
        <Gi3DStairs />
        <h1 className='font-semibold text-lg ml-1'>Tax<strong className='text-blue'>Pal</strong></h1>
      </div>
      <nav className='flex items-center relative'>
        <div className={`${visible ? 'block' : 'hidden'} absolute p-8 top-20 right-2 w-80 bg-blue`}>
          <ul >
            <li>Features</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>Sign in</li>
          </ul>
        </div>
        <button className='bg-blue text-white px-4 py-2.5 rounded-full text-sm'>Get started</button>
        <button className='ml-4'><GiHamburgerMenu size={23} onClick={handleVisibleMenu} /></button>
      </nav>
    </header>
  );
}