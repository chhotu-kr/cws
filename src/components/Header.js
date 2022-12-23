import React from 'react'

const Header = () => {
    const Logo=()=><div className='text-3xl text-gray-700 px-3 placeholder-sky-300'>Code With Sadique</div>

    const List=()=>(
        <div className='flex gap-5'>
            <button type='button' className='text-xl text-slate-900 rounded-md bg-purple-500 px-3 p-2'>Home</button>
            <button type='button' className='text-xl text-slate-900 rounded-md hover:bg-purple-400 px-3 p-2'>Cources</button>
            <button type='button' className='text-xl text-slate-900 rounded-md hover:bg-purple-400 px-3 p-2'>gallery</button>
        </div>
    )

    const ListItem=()=>(
        <div className='flex gap-5'>
            <a href='' className='hover:bg-emerald-300 text-lg font-bold rounded p-2'>Online Payment</a>
            <a href='' className='bg-emerald-400 text-white hover:bg-emerald-300 text-lg font-bold rounded p-2'>Apply For Admisssion</a>
        </div>
    )
  return (
    <div className='flex justify-between items-center px-5 py-3'>
      <Logo/>
      <List/>
      <ListItem/>
    </div>
  )
}

export default Header
