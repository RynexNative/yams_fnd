import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import {Table, TableHeader, TableHead,TableRow, TableBody, TableCell } from "@/components/ui/Table"
import React from "react";

function LessonPlan() {
  return (
    <div className="grid grid-cols-4 auto-rows-max gap-2 grid-cols-[1fr_1fr_1fr_1fr]" style={{
      width: '100%',
      height: '100vh',
      paddingTop: '5rem',
      paddingLeft: "2rem",
      paddingRight: '1rem'
    }}>
        <Card variant="default" className="bg-gradient-to-r 
            from-[#0180E196] from-[42%] 
            to-[#0180E196] to-[100%] text-[#005544] shadow-[0px_4px_5px_1px_rgba(0,0,0,0.50)] h-[7rem] flex flex-col text-center items-center justify-center">
            <CardHeader className="border-b-0 font-[900] text-[1.3rem] lg:p-0 lg:m-0">Lesson Pans</CardHeader>
            <CardContent>12</CardContent>
        </Card>
        <Card variant="default" className="bg-gradient-to-r 
            from-[#0180E196] from-[42%] 
            to-[#0180E196] to-[100%] text-[#005544] shadow-[0px_4px_5px_1px_rgba(0,0,0,0.50)] h-[7rem] flex flex-col text-center items-center justify-center">
            <CardHeader className="border-b-0 font-[900] text-[1.3rem] lg:p-0 lg:m-0">Lesson Pans</CardHeader>
            <CardContent>12</CardContent>
        </Card>
        <Card variant="default" className="bg-gradient-to-r 
            from-[#0180E196] from-[42%] 
            to-[#0180E196] to-[100%] text-[#005544] shadow-[0px_4px_5px_1px_rgba(0,0,0,0.50)] h-[7rem] flex flex-col text-center items-center justify-center">
            <CardHeader className="border-b-0 font-[900] text-[1.3rem] lg:p-0 lg:m-0">Lesson Pans</CardHeader>
            <CardContent>12</CardContent>
        </Card>
        <Card variant="default" className="bg-gradient-to-r 
            from-[#0180E196] from-[42%] 
            to-[#0180E196] to-[100%] text-[#005544] shadow-[0px_4px_5px_1px_rgba(0,0,0,0.50)] h-[7rem] flex flex-col text-center items-center justify-center">
            <CardHeader className="border-b-0 font-[900] text-[1.3rem] lg:p-0 lg:m-0">Lesson Pans</CardHeader>
            <CardContent>12</CardContent>
        </Card>
        <div className="flex col-span-4 justify-between p-[0.5rem_2rem]  w-full"><p>Lesson Plan Lists</p><button className="bg-[#0180e1] p-1 rounded-lg">Add Lesson Plan</button></div>
        <Table variant="primary" className="col-span-4">
                    <TableHeader variant="primary">
                      <tr>
                        <TableHead>Class</TableHead>
                        <TableHead>School</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Status</TableHead>
                      </tr>
                    </TableHeader>
        
                    <TableBody>
                      <TableRow>
                        <TableCell>Texa</TableCell>
                        <TableCell>None</TableCell>
                        <TableCell>texa@email.com</TableCell>
                        <TableCell className="text-green-600 font-medium">
                          Active
                        </TableCell>
                      </TableRow>
        
                      <TableRow>
                        <TableCell>John</TableCell>
                        <TableCell>None</TableCell>
                        <TableCell>john@email.com</TableCell>
                        <TableCell className="text-red-600 font-medium">
                          Inactive
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Texa</TableCell>
                        <TableCell>None</TableCell>
                        <TableCell>texa@email.com</TableCell>
                        <TableCell className="text-green-600 font-medium">
                          Active
                        </TableCell>
                      </TableRow>
        
                      <TableRow>
                        <TableCell>John</TableCell>
                        <TableCell>None</TableCell>
                        <TableCell>john@email.com</TableCell>
                        <TableCell className="text-red-600 font-medium">
                          Inactive
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Texa</TableCell>
                        <TableCell>None</TableCell>
                        <TableCell>texa@email.com</TableCell>
                        <TableCell className="text-green-600 font-medium">
                          Active
                        </TableCell>
                      </TableRow>
        
                      <TableRow>
                        <TableCell>John</TableCell>
                        <TableCell>None</TableCell>
                        <TableCell>john@email.com</TableCell>
                        <TableCell className="text-red-600 font-medium">
                          Inactive
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Texa</TableCell>
                        <TableCell>None</TableCell>
                        <TableCell>texa@email.com</TableCell>
                        <TableCell className="text-green-600 font-medium">
                          Active
                        </TableCell>
                      </TableRow>
        
                      <TableRow>
                        <TableCell>John</TableCell>
                        <TableCell>None</TableCell>
                        <TableCell>john@email.com</TableCell>
                        <TableCell className="text-red-600 font-medium">
                          Inactive
                        </TableCell>
                      </TableRow>
                      
                    </TableBody>
                  </Table>
    </div>
  )
}

export default LessonPlan;