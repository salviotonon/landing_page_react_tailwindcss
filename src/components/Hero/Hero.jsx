import { GiPlayButton } from 'react-icons/gi';
import tuple from '../../assets/tuple.svg'
import transistor from '../../assets/transistor.svg'
import statickit from '../../assets/statickit.svg'
import mirage from '../../assets/mirage.svg'
import laravel from '../../assets/laravel.svg'
import statamic from '../../assets/statamic.svg'

export function Hero() {
  return (
    <div className='mt-20 px-4 flex-wrapw min-h-screen'>
      <h1 className='text-5xl text-center leading-tight font-medium tracking-tight'>
        Accounting
        <span className='text-blue font-semibold'> made simple </span>
        for small businesses.
      </h1>
      <h2 className='mt-8 text-gay text-center text-lg tracking-tighter leading-relaxed'>Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don't get audited.</h2>
      <div className='flex justify-center gap-x-3 mt-10'>
        <button className='bg-black text-white rounded-full  px-4 py-2'>Get 6 months free</button>
        <button className='text-black border border-black border-opacity-25 px-4 py-2 rounded-full flex items-center justify-center'>
          <GiPlayButton className='mr-2 text-blue' />
          Watch Video
        </button>
      </div>
      <div className='mt-36 mb-20'>
        <p className='mb-10 text-center'>Trusted by these six companies so far</p>
        <div className='grid grid-cols-2 gap-6'>
          <img src={tuple} alt="" />
          <img src={transistor} alt="" />
          <img src={statickit} alt="" />
          <img src={mirage} alt="" />
          <img src={laravel} alt="" />
          <img src={statamic} alt="" />
        </div>
      </div>
    </div>
  )
}