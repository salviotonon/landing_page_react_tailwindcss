import { Gi3DStairs, GiHamburgerMenu, GiExpander } from 'react-icons/gi'
import { useState } from 'react';

export function Header() {
  const [visible, setIsVisible] = useState(false);

  const handleVisibleMenu = function () {
    setIsVisible(true)
  }
  const handleCloseMenu = function () {
    setIsVisible(false)
  }
  console.log(visible)
  return (
    <header className=' p-6 flex justify-between mb-11 mt-2'>
      <div className='flex items-center justify-start'>
        <Gi3DStairs />
        <h1 className={`font-semibold text-lg ml-1`}>Tax<strong className='text-blue'>Pal</strong></h1>
      </div>
      <nav className='flex items-center relative'>
        <div class={`${visible ? 'block' : 'hidden'} fixed inset-0 bg-slate-300/80  opacity-100`}></div>
        <div className={`${visible ? 'block' : 'hidden'} absolute p-8 top-20 right-1 w-80 bg-white rounded-xl`}>
          <GiExpander
            className={`${visible ? 'block' : 'hidden'} absolute z-20 top-5 right-5`}
            onClick={handleCloseMenu}
          />
          <ul >
            <li className='list-primary'>Features</li>
            <li className='list-primary'>Testimonials</li>
            <li className='list-primary'>Pricing</li>
            <li className='list-primary'>Sign in</li>
          </ul>
        </div>
        <button className='bg-blue text-white px-4 py-2.5 rounded-full text-sm'>Get started</button>
        <button className='ml-4'>
          <GiHamburgerMenu size={23} onClick={handleVisibleMenu} className={`${visible ? 'invisible' : 'block'}`} />

        </button>
      </nav>
    </header>
  );
}