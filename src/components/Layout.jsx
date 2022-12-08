import React from 'react'
import Home from './Home'
import ProductPrice from './ProductPrice'
import Sidebar from './Sidebar'
import  pizzaData  from '../data/pizzaData'
const Layout = ({sidebarData}) => {
  return (
    <div className='flex flex-row'>
        <div className='w-2/12 flex flex-col'>
           <Sidebar sidebarData={sidebarData}/>
        </div>
        <div className=' w-7/12 grid grid-rows-4 p-2 grid-flow-col gap-2 '>
          {
            pizzaData.map((data,index)=>{
              return(
                <Home data={data} key={index}/>
              )
            })
          }
        </div>
        <div className='w-3/12'>
            <ProductPrice/>
        </div>
    </div>
  )
}

export default Layout