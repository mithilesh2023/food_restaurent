import React from 'react'
const Sidebar = ({sidebarData}) => {
const Items=({data})=>
<h1 className='text-2xl text-left text-white bg-slate-800 hover:bg-slate-600 p-3 '>{data}</h1>

  return (
    <div>
        {
            sidebarData.map((value,index)=>{
                return(
                    <Items data={value.name} key={index}/>
                )
            })
        }
    </div>
  )
}

export default Sidebar