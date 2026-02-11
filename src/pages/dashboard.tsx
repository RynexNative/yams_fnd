import React from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Cards'
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from '@/components/ui/Tables'
import {
  List,
  ListItem,
  ListMarker,
  ListMedia,
  ListContent,
  ListTitle,
  ListDescription,
} from "@/components/ui/List";
import Image1 from "@/assets/images/png/jump-happy.png"
import Image2 from "@/assets/images/png/profile_sample.png"

function dashboard() {
  return (
    <div className="grid grid-cols-4 auto-rows-max gap-2 grid-cols-[1fr_1fr_1fr_1.45fr]" style={{
      width: '100%',
      height: '100vh',
      paddingTop: '5rem',
      paddingLeft: "2rem",
      paddingRight: '1rem'
    }}>
      <div className='col-span-4 '>Home</div>
      <Card variant="primary" className="shadow-[0px_4px_5px_1px_rgba(0,0,0,0.50)] flex rounded-2xl w-full col-span-4 mt-3 h-[11rem] relative bg-gradient-to-r 
            from-[#0180E196] from-[42%] 
            to-[#FFFFFF96] to-[100%] lg:col-span-3 sm:col-span-4">
        <div className='w-[80%] mr-1 md:w-[70%]'>
          <CardHeader className="border-b-0 m-0 pt-2 text-[0.9rem] sm:pb-0 sm:pt-3 md:pt-2 md:text-[0.9rem] lg:py-2 lg:text-[1.2rem] text-[#003B6C] font-[1000] sm:text-[0.9rem]">"Knowledge is not power until applied."</CardHeader>
          <CardContent className='m-0 px-1 py-0 text-[0.6em] sm:py-0 text-[0.7rem]'>Knowledge alone doesn’t create change — it’s only when you apply what you know that it becomes true power. Learning gives you potential, but action unlocks that potential. Without application, knowledge remains just information, not transformation.
            It’s a reminder that real growth and success come from doing, not just knowing. </CardContent>
          <CardFooter className='border-t-0 lg:py-2 sm:py-0 lg:text-[0.8rem] lg:text-[0.7rem] md:text-[0.7rem] font-[600] text-[black]'>
            ON 12 AUG 2025
          </CardFooter>
        </div>
        <img src={Image1} alt="" style={{
          position: 'absolute',
          top: -65,
          right: -40,
          width: '12rem'
        }} className='sm-w-[12px] right-0' />

      </Card>
      <Card variant="primary" className='mt-3 shadow-[0px_4px_5px_1px_rgba(0,0,0,0.50)]  mb-[10px] w-[100%] col-span-4 bg-gradient-to-r from-[#CA590388] from-[30%] to-[#FFFFFF] to-[112%] h-[11rem] lg:col-span-1 sm:col-span-4 center items-center justify-start pl-4'>

        <div>
          <h2 className='text-[#003B6C] font-[700] text-[1.2rem] mt-2 ml-2'>Welcome Back! Mr. Deo</h2>
        </div>
        <div className='flex center items-center gap-4 mt-3'>
          <img src={Image1} alt="" className='w-[5rem] h-[4rem] rounded-full' />
          <CardContent>
            <p><span className='font-[1000]'>Today:</span> 30/12/2025</p>
            <p><span className='font-[1000]'>Specialization:</span> Teacher</p>
            <p><span className='font-[1000]'>Subject:</span> Kiswahili</p>
            <p><span className='font-[1000]'>Age:</span> 32</p>

          </CardContent>
        </div>

      </Card>
      <Card variant="primary" className="lg:col-span-1 sm:col-span-2 h-[6rem] flex flex-col justify-center items-center relative bg-gradient-to-r 
            from-[#0180E196] from-[40%] 
            to-[#ffff] to-[100%]">
        <CardHeader className='font-[600] border-b-0 pt-2'>Upcoming Lesson</CardHeader>
        <CardContent>Math-Form 1A</CardContent>
        <CardContent>Time-10:30</CardContent>
      </Card>

      <Card variant="primary" className=" lg:col-span-1 sm:col-span-2 h-[6rem] flex flex-col justify-center items-center relative bg-gradient-to-r 
            from-[#FF383C80] from-[40%] 
            to-[#ffff] to-[100%]">
        <CardHeader className='font-[600] border-b-0 pt-2'>Present Student</CardHeader>
        <CardContent>120</CardContent>
      </Card>

      <Card variant="primary" className="lg:col-span-1 sm:col-span-2 lg:h-[6rem] flex flex-col justify-center items-center relative bg-gradient-to-r 
            from-[#27C84080] from-[40%] 
            to-[#ffff] to-[100%]">
        <CardHeader className='font-[600] border-b-0 pt-2'>Live Time</CardHeader>
        <CardContent>10:15:30</CardContent>

      </Card>

      <Card variant="primary" className="lg:mb-[2rem] rounded-[0px] sm:col-span-2 lg:col-span-1 lg:row-span-4 lg:h-[60rem] bg-[#FFF]">
        <CardHeader className='font-[400] border-b-0 pt-2 text-[0.8rem]'>Teachers on Duty</CardHeader>
        <CardContent className='text-[0.7rem]'>
          <List variant="spacious" className='lg:mt-[0.5rem] pl-4'>

            {/* MWALIMU 1 */}
            <ListItem>
              <ListMarker type="none" value={1} />

              <ListMedia
                src={Image2}
                size={48}
              />

              <ListContent>
                <ListTitle>Mwalimu John Doe</ListTitle>
                <ListDescription>
                  Anafundisha: Hisabati, Fizikia
                </ListDescription>
                <ListDescription>
                  Madarasa: Form I – Form III
                </ListDescription>
              </ListContent>
            </ListItem>

            {/* MWALIMU 2 */}
            <ListItem>
              <ListMarker type="none" value={2} />

              <ListMedia
                src={Image2}
                size={48}
              />

              <ListContent>
                <ListTitle>Mwalimu Jane Smith</ListTitle>
                <ListDescription>
                  Anafundisha: Biolojia
                </ListDescription>
                <ListDescription>
                  Madarasa: Form I – Form III
                </ListDescription>
                <ListDescription className='flex gap-1'>
                  <ListMarker type="custom">
                    ⭐
                  </ListMarker>
                  Mwalimu Bora wa Mwaka
                </ListDescription>
              </ListContent>
            </ListItem>

          </List>

        </CardContent>

        <CardHeader className='font-[400] border-b-0 pt-2 text-[0.8rem]'>Other Staff Members</CardHeader>
        <CardContent className='text-[0.7rem]'>
          <List variant="spacious" className='lg:mt-[0.5rem] pl-4'>

            {/* MWALIMU 1 */}
            <ListItem className='m-0 p-0'>
              <ListMarker type="none" />

              <ListMedia
                src={Image2}
                size={48}
              />

              <ListContent>
                <ListTitle>Mwalimu John Doe</ListTitle>
                <ListDescription>
                  Anafundisha: Hisabati, Fizikia
                </ListDescription>
                <ListDescription>
                  Madarasa: Form I – Form III
                </ListDescription>
              </ListContent>
            </ListItem>

            {/* MWALIMU 2 */}
            <ListItem>
              <ListMarker type="none" value={2} />

              <ListMedia
                src={Image2}
                size={48}
              />

              <ListContent>
                <ListTitle>Mwalimu Jane Smith</ListTitle>
                <ListDescription>
                  Anafundisha: Biolojia
                </ListDescription>
                <ListDescription>
                  Madarasa: Form I – Form III
                </ListDescription>
              </ListContent>
            </ListItem>

            <ListItem>
              <ListMarker type="none" value={2} />

              <ListMedia
                src={Image2}
                size={48}
              />

              <ListContent>
                <ListTitle>Mwalimu Jane Smith</ListTitle>
                <ListDescription>
                  Anafundisha: Biolojia
                </ListDescription>
                <ListDescription>
                  Madarasa: Form I – Form III
                </ListDescription>
              </ListContent>
            </ListItem>

            <ListItem>
              <ListMarker type="none" value={2} />

              <ListMedia
                src={Image2}
                size={48}
              />

              <ListContent>
                <ListTitle>Mwalimu Jane Smith</ListTitle>
                <ListDescription>
                  Anafundisha: Biolojia
                </ListDescription>
                <ListDescription>
                  Madarasa: Form I – Form III
                </ListDescription>
              </ListContent>
            </ListItem>

            <ListItem>
              <ListMarker type="none" value={2} />

              <ListMedia
                src={Image2}
                size={48}
              />

              <ListContent>
                <ListTitle>Mwalimu Jane Smith</ListTitle>
                <ListDescription>
                  Anafundisha: Biolojia
                </ListDescription>
                <ListDescription>
                  Madarasa: Form I – Form III
                </ListDescription>
              </ListContent>
            </ListItem>
            <ListDescription className='text-center lg:m-[3rem] cursor-pointer text-blue-600 underline'>
              See More
            </ListDescription>

            
            

          </List>

        </CardContent>
        <CardHeader className='font-[400] border-b-0 pt-2 text-[0.8rem]'>Adminstration Members</CardHeader>
        <CardContent className='text-[0.7rem]'>
          <List variant="spacious" className='lg:mt-[0.5rem] pl-4'>

            {/* MWALIMU 1 */}
            <ListItem className='m-0 p-0'>
              <ListMarker type="none" />

              <ListMedia
                src={Image2}
                size={48}
              />

              <ListContent>
                <ListTitle>Mwalimu John Doe</ListTitle>
                <ListDescription>
                  Anafundisha: Hisabati, Fizikia
                </ListDescription>
                <ListDescription>
                  Madarasa: Form I – Form III
                </ListDescription>
              </ListContent>
            </ListItem>

            {/* MWALIMU 2 */}
            <ListItem>
              <ListMarker type="none" value={2} />

              <ListMedia
                src={Image2}
                size={48}
              />

              <ListContent>
                <ListTitle>Mwalimu Jane Smith</ListTitle>
                <ListDescription>
                  Anafundisha: Biolojia
                </ListDescription>
                <ListDescription>
                  Madarasa: Form I – Form III
                </ListDescription>
              </ListContent>
            </ListItem>
            

            <ListItem>
              <ListMarker type="none" value={2} />

              <ListMedia
                src={Image2}
                size={48}
              />

              <ListContent>
                <ListTitle>Mwalimu Jane Smith</ListTitle>
                <ListDescription>
                  Anafundisha: Biolojia
                </ListDescription>
                <ListDescription>
                  Madarasa: Form I – Form III
                </ListDescription>
              </ListContent>
            </ListItem>
            <ListDescription className='text-center lg:m-[3rem] cursor-pointer text-blue-600 underline'>
              See More
            </ListDescription>

          </List>

        </CardContent>
      </Card>
      <div className='h-[2rem] col-span-3 items-start transition-colors p-0 mt-1'>
        <p>
          Quick Actions
        </p>
      </div>
      <Card variant="primary" className="rounded-[0px] col-span-4 ml-2 sm:col-span-2 lg:col-span-3 lg:row-span-4 lg:h-[25rem] bg-[#FFF]">
        <CardHeader className='font-[600] border-b-0 pt-2'>Gas Inventory</CardHeader>
        <CardContent>

          <Table variant="primary">
            <TableHeader variant="primary">
              <tr>
                <TableHead>Jina</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
              </tr>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>Texa</TableCell>
                <TableCell>texa@email.com</TableCell>
                <TableCell className="text-green-600 font-medium">
                  Active
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>John</TableCell>
                <TableCell>john@email.com</TableCell>
                <TableCell className="text-red-600 font-medium">
                  Inactive
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>

      </Card>
    </div>
  )
}

export default dashboard