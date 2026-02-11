import { Card, CardContent, CardHeader } from "@/components/ui/Cards";
import {Table, TableHeader, TableHead,TableRow, TableBody, TableCell } from "@/components/ui/Tables"
import React from "react";

function Attendance() {
  return (
    <div className="grid grid-cols-4 auto-rows-max gap-2 grid-cols-[1fr_1fr_1fr_1fr]" style={{
      width: '100%',
      height: '100vh',
      paddingTop: '5rem',
      paddingLeft: "2rem",
      paddingRight: '1rem'
    }}>
        
        <div className="flex col-span-4 justify-between p-[0.5rem_2rem]  w-full"><p>Attendance Lists</p><button className="bg-[#0180e1] p-1 rounded-lg">Take Attendance</button></div>
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

export default Attendance;