import React from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card'
import Image1 from "@/assets/images/png/jump-happy.png"

function dashboard() {
  return (
    <div className="grid grid-cols-5 auto-rows-max gap-2 " style={{width: '100%',
      height: '100vh',
      paddingTop: '5rem',
      paddingLeft: "2rem",
      paddingRight: '1rem'
    }}>
      <div className='col-span-4 h-6 '>sdkjahdjkas</div>
        <Card variant="primary" className="flex rounded-2xl w-full col-span-3 mt-3 h-[10rem] relative">
          <div className='w-[80%] mr-1 md:w-[70%]'>
          <CardHeader className="border-b-0 m-0 py-2 text-[1rem] md:text-[1rem] lg:text-[1.6rem] ">"Knowledge is not power until applied."</CardHeader>
          <CardContent className='m-0 px-6 py-0'>100 KG Available</CardContent>
          <CardFooter className='border-t-0'>
            hdsajdjasd
          </CardFooter>
          </div>
          <img src={Image1} alt="" style={{
            position:'absolute',
            top:-65,
            right:-20,
            width:'12rem'
          }} className='sm-w-[12px]'/>
          
        </Card>
        <Card variant="primary" className='col-span-2 mt-3'>
          <CardHeader>Gas Inventory</CardHeader>
          <CardContent>100 KG Available</CardContent>
        </Card>
        <Card variant="primary" className="col-span-4 relative">
          <CardHeader>Gas Inventory</CardHeader>
          <CardContent>100 KG Available</CardContent>
          
        </Card>
    </div>
  )
}

export default dashboard