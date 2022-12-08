import React, { useState } from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai';
const ProductPrice = () => {
    const[count,setCount]=useState(0);
  return (
    <div className='p-1'>
        <table className='table-fixed w-full bg-teal-300 rounded-lg' >
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody className='divide-y p-3 divide-slate-400 '>
                <tr className=''>
                    <td>1</td>
                    <td >Pizza</td>
                    <td className=' text-center'>
                        <button className='bg-red-400 rounded-md text-center p-1 text-md w-[25px]'><AiOutlineMinus />
                        </button>
                        <span className='font-bold'>2</span>
                        <button className='bg-blue-800 rounded-md text-center p-1 text-md w-[25px]'><AiOutlinePlus
                      />
                        </button>
                        {/* 2 */}
                        </td>
                    <td>120.00/-</td>
                </tr> 
                <tr >
                    <td>1</td>
                    <td>Pizza</td>
                    <td className=' text-center'>
                        <button className='bg-red-400 rounded-md text-center p-1 text-md w-[25px]' onClick={()=>setCount(count-1)}><AiOutlineMinus />
                        </button>
                        <span className='font-bold'>{count}</span>
                        <button className='bg-blue-800 rounded-md text-center p-1 text-md w-[25px]' onClick={()=>setCount(count+1)}><AiOutlinePlus
                      />
                        </button>
                        {/* 2 */}
                        </td>
                    <td>{count*count}</td>
                </tr> 
                <tr className=''>
                    <td>1</td>
                    <td>Pizza</td>
                    <td className=' text-center'>
                        <button className='bg-red-400 rounded-md text-center p-1 text-md w-[25px]'><AiOutlineMinus />
                        </button>
                        <span className='font-bold'>2</span>
                        <button className='bg-blue-800 rounded-md text-center p-1 text-md w-[25px]'><AiOutlinePlus
                      />
                        </button>
                        {/* 2 */}
                        </td>
                    <td>120.00/-</td>
                </tr> 
                <tr>
                    <td>1</td>
                    <td>Pizza</td>
                    <td className=' text-center'>
                        <button className='bg-red-400 rounded-md text-center p-1 text-md w-[25px]'><AiOutlineMinus />
                        </button>
                        <span className='font-bold'>2</span>
                        <button className='bg-blue-800 rounded-md text-center p-1 text-md w-[25px]'><AiOutlinePlus
                      />
                        </button>
                        {/* 2 */}
                        </td>
                    <td>120.00/-</td>
                </tr> 
                <tr>
                    <td>1</td>
                    <td>Pizza</td>
                    <td className=' text-center'>
                        <button className='bg-red-400 rounded-md text-center p-1 text-md w-[25px]'><AiOutlineMinus />
                        </button>
                        <span className='font-bold'>2</span>
                        <button className='bg-blue-800 rounded-md text-center p-1 text-md w-[25px]'><AiOutlinePlus
                      />
                        </button>
                        {/* 2 */}
                        </td>
                    <td>120.00/-</td>
                </tr>                 

            </tbody>
        </table>
       
            <button className='w-full bg-red-500 rounded-lg p-2 mb-2 mt-2 text-xl'>Total Price:
            {}
            </button><br />
            <button className='w-full bg-slate-400 rounded-lg p-2 text-xl'>Order Now</button>
        
    </div>
  )
}

export default ProductPrice