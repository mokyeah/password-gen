import React, { useState, useEffect }  from 'react';
import { Icon } from '@iconify/react';
import copy from 'copy-to-clipboard';

const App = () => {
  const [password, setPassword] = useState("yup")
  const [length, setLength] = useState(8)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [number, setNumber] = useState(true)
  const [symbol, setSymbol] = useState(true)
  const [copied, setcopied] = useState(true)
console.log(length)
  
  const generatePassword = () => {
    let thePassword = ""
    let temp = ''  
    if (uppercase) thePassword += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) thePassword += 'abcdefghijklmnopqrstuvwxyz';
    if (number) thePassword += '0123456789';
    if (symbol) thePassword += '!@#$%^&*()_+-={}[]:";\'<>?,./';
    for (let i = 0; i < length; i++) {
      temp += thePassword[Math.floor(Math.random() * thePassword.length)] || ''

    }
    setPassword(temp)    
  }
  useEffect(() => {
    generatePassword();
  }, [length, uppercase, lowercase, number, symbol])
  
  
  
  return (
    <div className='items-start  bg-stone-900 flex text-slate-100 w-full h-screen md:bg-stone-900 flex justify-center text-slate-100   items-center w-full h-screen'>
      <div className="py-4"></div>
      <div className="rounded-md overflow-hidden">

        <div className=' md:text-4xl p-2 m-3 font-seimifold border-b border-slate-100 tracking-widest text-slate-100' >PASSWORD GENERATOR</div>
       
        <div className='text-s p-2 font-semifold'> a thing to generate password</div>
        <div className='flex flex-row items-center gap-4 border p-5 border-neutral-700 mt-5 '>
           
          <div className='text-2xl items-center'>{password}</div>
          <button>
            <Icon onClick={() => setPassword(generatePassword)} icon="carbon:restart" width="25"/></button>
          <button><Icon onClick={() => copy(password)} icon="akar-icons:copy" width="25" />
          </button>          
          

          </div>
          
        
          <div className="mt-8 flex flex-col">
        <div className="flex flex-row gap-10">
         <div className="p-1 flex gap-2 w-64 flex-row items-center md:flex gap-2 w-64 flex-row items-center ">
           <input onClick={() => setUppercase(!uppercase)} checked={uppercase} type="checkbox" className="w-6 h-6" />
            <div className="text-l md:text-xl">Uppercase Character</div>
          </div>
          <div className="p-1 flex gap-2 flex-row items-center md:flex gap-2 flex-row items-center">
            <input onClick={() => setNumber(!number)} checked={number} type="checkbox" className="w-6 h-6" />
            <div className="text-l md:text-xl">Number</div>
          </div>
        </div>
        <div className="p-1 flex flex-row gap-10 md:flex flex-row gap-10">
          <div className="flex gap-2 w-64 flex-row items-center">
            <input onClick={() => setLowercase(!lowercase)} checked={lowercase} type="checkbox" className="w-6 h-6" />
            <div className="text-l md:text-xl">Lowercase Character</div>
          </div>
          <div className="p-1 flex gap-2 flex-row  md:flex gap-2 flex-row items-center">
            <input onClick={() => setSymbol(!symbol)} checked={symbol} type="checkbox" className="w-6 h-6" />
            <div className="text-l md:text-xl">Symbol</div>
          </div>
        </div>
      </div>
      <div className='text-l p-5 text-center'>
        <div className="flex ">
          <div className="p-3 text-xl md:p-3 text-2xl">password length: </div>
          <div className="text-3xl p-4 gap-3 font-bold md:p-2 text-5xl gap-3 font-bold" onClick={() => setLength(length-1)} >-</div>
          <input value={length} onChange={(e) => setLength(parseInt(e.target.value))} className="w-11 h-14 p-1 focus:outline-none text-slate-900 text-3xl  md:w-10  h-16 focus:outline-none text-slate-900 text-3xl" />
          <div className="p-4 text-4xl font-bold md:text-3xl p-2 font-bold " onClick={() => setLength(length+1)} >+</div>
          </div>
        </div>
    </div>
    </div>

  )
}

export default App