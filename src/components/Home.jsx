import React from 'react'
const Home = ({data}) =>{ 
return(
<div className >
    <div className=' w-[90%] bg-red-500 p-1 rounded-md '>
        <img src={data.img} alt="" className='w-full h-[100px]  border border-gray   rounded' />
        <div className=' text-white p-1'>
            <p className=' text-xl mb-1'>{data.name}</p>
            <hr />
            <p >{data.ingridiant}</p>
        </div>
        <hr />
        <p className='text-sm mt-1 text-white'>Starts form  <span className='font-bold'> ₹{data.price}/-</span></p>
        <button className='text-white text-xl bg-green-700 w-full mt-1 mb-1 rounded-md'>Add to Cart</button>
    </div>
</div>
)
}

export default Home