//^ EMPLOYEES ROUTE ===================================================================================================

import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { id: 1, name: "POURYA", job: 'DEVELOPER' },
    { id: 2, name: "MAMAD", job: 'DEVELOPER' },
    { id: 3, name: "ALI", job: 'DEVELOPER' },
    { id: 4, name: "REZA", job: 'DEVELOPER' },
    { id: 5, name: "MEHDI", job: 'DEVELOPER' },
    { id: 6, name: "MOJTABA", job: 'DEVELOPER' },
    { id: 7, name: "MORTEZA", job: 'DEVELOPER' },
    { id: 8, name: "MAJID", job: 'DEVELOPER' }

  ]
  
  return NextResponse.json({
    message: 'EMPLOYEES GET FUNCTION ',
    data: data
  })

}