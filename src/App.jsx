import React from 'react'

const App = () => {
  return (
    <div className='bg-red-400 flex justify-center items-center w-full h-screen'>
      <div className="rounded-md overflow-hidden">

        <div className='text-xl p-2 m-3 font-seimifold border-solid border-2 border-sky-500 ' >password generator</div>
        <div className='text-s p-1 font-semifold'> a thing to generate password</div>
        <div className='rounded-full w-32 p-4 border-4 bg-black-600'>halo</div>
        




      
      <div className='flex flex-row gap-4 mt-3  '>
        <div className='flex flex-row items-center gap-1 text-slate-100'>
          <input type="checkbox"/><div>Include Uppercase letter</div>
        </div>
        <div className='flex flex-row items-center gap-1 text-slate-100'>
          <input type="checkbox"/><div>Include Lowercase letter</div>
        </div>
        
      </div>
      <div className='flex flex-row gap-4 mt-3'>
      <div className='flex flex-row items-center gap-1 text-slate-100'>
          <input type="checkbox"/><div>Include Numbers</div>
        </div>
        <div className='flex flex-row items-center gap-3 text-slate-100'>
          <input type="checkbox"/><div>Include Symbols ;</div>
        </div>
      </div>
      <div className="hidden md:flex p-2 "><input type="text" placeholder=" length" />
        </div>
      
    </div>
    </div>

  )
}

export default App