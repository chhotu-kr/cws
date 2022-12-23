import React from 'react'

const BannerImage = () => {
  return (
    <div className='bg-gradient-to-l from-gray-400 to-yellow-200 brightness-150 flex'>
        <div className='flex flex-col  py-24 px-24'>
            <h2 className='text-green-800 text-7xl px-5'>Skill Hai, <br/> Toh Future Hai</h2>

            <p className='text-lg  px-5 mt-5 '>"CWS is an on-demand marketplace for top Programming engineers, developers,<br/> consultants, architects, programmers, and tutors. Get your projects built by <br/> vetted web programming freelancers or learn from expert mentors with team <br/>training & coaching experiences in Project based training."</p>
            <div className='flex mt-8'>
            <button type='button' className='bg-emerald-400 rounded-md text-lg px-5 ml-2 py-2 hover:bg-emerald-300 '>Join now</button>
         </div>
        </div>
         
     </div>
  )
}

export default BannerImage
