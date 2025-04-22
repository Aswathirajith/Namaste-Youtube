import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'


function Body() {
   
  return (
    <div className='flex'>
        <Sidebar />
      
      <Maincontainer/>
    </div>
  )
}

export default Body
