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
      <div className='col-span-4 h-6 '>Home</div>
        <Card variant="primary" className="flex rounded-2xl w-full col-span-3 mt-3 h-[14rem] relative bg-gradient-to-r 
            from-[#0180E196] from-[42%] 
            to-[#FFFFFF96] to-[100%]  px-0 md:col-span-5 lg:col-span-3 col-span-5">
          <div className='w-[80%] mr-1 md:w-[70%] py-0'>
          <CardHeader className="border-b-0 m-0 py-0 md:text-[0.8rem] lg:text-[1.5rem] lg:py-1 sm:text-[1rem] text-[#003B6C] font-[1000]">"Knowledge is not power until applied."</CardHeader>
          <CardContent className='m-0 px-1 py-0 text-[0.6em] sm:py-0 text-[0.5em] lg:text-[1rem]'>Knowledge alone doesn’t create change — it’s only when you apply what you know that it becomes true power. Learning gives you potential, but action unlocks that potential. Without application, knowledge remains just information, not transformation.
It’s a reminder that real growth and success come from doing, not just knowing. </CardContent>
          <CardFooter className='border-t-0 lg:py-2 sm:py-0 lg:text-[0.8rem] lg:text-[0.7rem] md:text-[0.7rem] font-[600] text-[black]'>
            ON 12 AUG 2025
          </CardFooter>
          </div>
          <img src={Image1} alt="" style={{
            position:'absolute',
            top:-65,
            right:-20,
            width:'12rem'
          }} className='sm-w-[12px]'/>
          
        </Card>
        <Card variant="primary" className='col-span-2 text-[1.2rem] mt-3 bg-gradient-to-r from-[#CA590394] from-[10%] to-[#FFFFFF] to-[120%] '>
          <CardHeader>Welcome Mr Deo Massawe</CardHeader>
          <CardContent className='flex gap-4 items-start text-[1.2rem]'>
            <img src={Image1} alt="" className="w-[7rem] h-[7rem] rounded-full"/>
            <div>
              Today: 25th Dec 2025 <br />
              Role: Head Master <br />
              Subject: Mathematics <br />
              Age: 20 Years
            </div>
          </CardContent>
        </Card>
        <Card variant="primary" className="lg:col-span-1 sm:col-span-2 relative">
          <CardHeader className='border-b-0 items-center'>Upcoming Lesson</CardHeader>
          <CardContent>100 KG Available</CardContent>
          
        </Card>

        <Card variant="primary" className="lg:col-span-1 sm:col-span-2 relative">
          <CardHeader className='border-b-0'>Gas Inventory</CardHeader>
          <CardContent>100 KG Available</CardContent>
          
        </Card>

        <Card variant="primary" className="lg:col-span-1 sm:col-span-2 relative bg-gradient-to-r 
            from-[red]  
            to-[blue]">
          <CardHeader>Gas Inventory</CardHeader>
          <CardContent>100 KG Available</CardContent>
          
        </Card>
        <Card variant="primary" className="lg:col-span-2 row-span-4 h-[20rem] sm:col-span-2 relative bg-gradient-to-r 
            from-[red]  
            to-[blue]">
          <CardHeader>Gas Inventory</CardHeader>
          <CardContent>100 KG Available</CardContent>
          
        </Card>
    </div>
  )
}

export default dashboard