import React from 'react'
import { Card1 } from '@/components/ui/Card'

function dashboard() {
  return (
    <div className= "grid grid-cols-4 auto-rows-max gap-2 " style={{backgroundColor:'red', width:'100%',
      height:'100vh',
      paddingTop:'5rem',
      paddingLeft:"2rem",
      paddingRight:'1rem'
    }}>
      <div className='col-span-4 h-6 '>sdkjahdjkas</div>
    <div className="col-span-3">
      <div className="bg-muted/40 aspect-video rounded-xl" style={{
        maxHeight:'15rem'
      }}/>
    </div>
    </div>
  )
}

export default dashboard