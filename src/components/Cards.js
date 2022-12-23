import React from 'react'
import product from '../data/product'
const Cards = ({data}) => {
    const NewCard=({value})=>{
        <div className='flex-col ml-24 py-5'>
          <h2 className=' text-2xl text-bold  text-gray-600'>Our Courses</h2>
          <p className='text-lg text-bold p-1  '>Lorem ipsum dolor sit amet</p>
         <div className='flex gap-3'>
           <div className='w-1/6 border border-gray-400 rounded-lg px-3'>
              <img src={value.imgUrl} alt='' className='rounded-full w-full h-30'/>
                <hr/>
                <h3 className='text-black text-lg text-bold text-center mb-2'>{value.title}</h3>
               <div className='bg-emerald-300 hover:bg-emerald-400 mb-2 py-2 rounded text-center'>
                   {value.duration}
                </div>
            </div>
          </div>
        </div>
    }
  return (
    <>
    {
        product.map((value,index)=>{
          <Cards key={index} value={value}/>
        })
    }
    </>
    
  )
}

export default Cards
