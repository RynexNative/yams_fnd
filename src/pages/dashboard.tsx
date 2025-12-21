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
        <Card variant="primary" className="flex rounded-2xl w-full col-span-3 mt-3 h-[10rem] relative bg-gradient-to-r 
            from-[#0180E196] from-[42%] 
            to-[#FFFFFF96] to-[100%] sm:col-span-5">
          <div className='w-[80%] mr-1 md:w-[70%]'>
          <CardHeader className="border-b-0 m-0 py-0 sm:py-0 text-[1rem] md:text-[0.8rem] lg:text-[1.6rem] text-[#003B6C] font-[1000]">"Knowledge is not power until applied."</CardHeader>
          <CardContent className='m-0 px-1 py-0 text-[0.6em] sm:py-0 text-[0.5em]'>Knowledge alone doesn’t create change — it’s only when you apply what you know that it becomes true power. Learning gives you potential, but action unlocks that potential. Without application, knowledge remains just information, not transformation.
It’s a reminder that real growth and success come from doing, not just knowing. </CardContent>
          <CardFooter className='border-t-0 py-0 sm:py-0'>
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
        <Card variant="primary" className='col-span-2 mt-3 bg-gradient-to-r from-[#FF383C80] to-[#FFFFFF] '>
          <CardHeader>Gas Inventory</CardHeader>
          <CardContent>100 KG Available</CardContent>
        </Card>
        <Card variant="primary" className="lg:col-span-1 sm:col-span-2 relative">
          <CardHeader>Gas Inventory</CardHeader>
          <CardContent>100 KG Available</CardContent>
          
        </Card>

        <Card variant="primary" className="lg:col-span-1 sm:col-span-2 relative">
          <CardHeader>Gas Inventory</CardHeader>
          <CardContent>100 KG Available</CardContent>
          
        </Card>

        <Card variant="primary" className="lg:col-span-1 sm:col-span-2 relative bg-gradient-to-r 
            from-[red]  
            to-[blue]">
          <CardHeader>Gas Inventory</CardHeader>
          <CardContent>100 KG Available</CardContent>
          
        </Card>
    </div>
  )
}

export default dashboard