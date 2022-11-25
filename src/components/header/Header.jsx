import { Gi3DStairs, GiHamburgerMenu } from 'react-icons/gi'

export function Header() {
  return (
    <header className='bg-red-600 p-6 flex justify-between mb-11 mt-2'>
      <div className='flex items-center justify-start'>
        <Gi3DStairs size={23} />
        <h1 className='font-semibold text-lg ml-1'>Tax<strong className='text-blue'>Pal</strong></h1>
      </div>
      <nav className='flex items-center'>
        <button className='bg-blue text-white px-4 py-2.5 rounded-full text-sm'>Get started</button>
        <button className='ml-4'><GiHamburgerMenu size={23} /></button>
      </nav>
    </header>
  );
}