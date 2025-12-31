import React from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card'
import Image1 from "@/assets/images/png/jump-happy.png"

function dashboard() {
  return (
    <div className="grid grid-cols-4 auto-rows-max gap-2 " style={{width: '100%',
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
            right:-40,
            width:'12rem'
          }} className='sm-w-[12px] right-0'/>
          
        </Card>
        <Card variant="primary" className='mt-3 col-span-4 bg-gradient-to-r from-[#CA590388] from-[30%] to-[#FFFFFF] to-[112%] h-[10rem] lg:col-span-1 sm:col-span-5 center items-center justify-start pl-4'>
          
          <div>
            <h2 className='text-[#003B6C] font-[700] text-[1.2rem]'>Welcome Back! Mr. Deo</h2>
          </div>
          <div className='flex center items-center gap-4 mt-3'>
            <img src={Image1} alt="" className='w-[5rem] h-[4rem] rounded-full'/>
            <CardContent>
              <p><span className='font-[1000]'>Today:</span> 30/12/2025</p>
              <p><span className='font-[1000]'>Specialization:</span> Teacher</p>
              <p><span className='font-[1000]'>Subject:</span> Kiswahili</p>
              <p><span className='font-[1000]'>Age:</span> 32</p>
            </CardContent>
          </div>
          
        </Card>
        <Card variant="primary" className="lg:col-span-1 sm:col-span-2 relative">
          <CardHeader className='border-b-0 items-center'>Upcoming Lesson</CardHeader>
          <CardContent>100 KG Available</CardContent>
          
        </Card>

        <Card variant="primary" className="lg:col-span-1 sm:col-span-2 relative">
          <CardHeader className='border-b-0'>Gas Inventory</CardHeader>
          <CardContent>100 KG Available</CardContent>
          
        </Card>

        <Card variant="primary" className="lg:col-span-1 sm:col-span-2 lg:h-[6rem] flex flex-col justify-center items-center relative bg-gradient-to-r 
            from-[#27C84080] from-[40%] 
            to-[#ffff] to-[100%]">
          <CardHeader className='font-[600] border-b-0 pt-2'>Live Time</CardHeader>
          <CardContent>10:15:30</CardContent>
          
        </Card>

        <Card variant="primary" className="sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:h-[30rem] bg-gradient-to-r 
            from-[#0180E196] from-[40%] 
            to-[#ffff] to-[100%]">
          <CardHeader className='font-[600] border-b-0 pt-2'>Gas Inventory</CardHeader>
          <CardContent>100 KG Available</CardContent>
          
        </Card>
    </div>
  )
}

export default dashboard